import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'
import { call } from 'react-native-reanimated'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogPosts':
      return action.payload
    case 'delete_blogPost':
      return state.filter(blogPost => blogPost.id !== action.payload)
    case 'edit_blogPost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost
      })
    default:
      return state
  }
}

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogPosts')
    dispatch({ type: 'get_blogPosts', payload: response.data })
  }
}

const addBlogPost = dispatch => {
  return (title, body, callback) => {
    jsonServer.post('/blogPosts', { title, body })
    if (callback) callback()
  }
}
const deleteBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogPosts/${id}`)
    dispatch({ type: 'delete_blogPost', payload: id })
  }
}

const editBlogPost = dispatch => {
  return async (id, title, body, callback) => {
    await jsonServer.put(`/blogPosts/${id}`, { title, body })
    dispatch({ type: 'edit_blogPost', payload: { id, title, body } })
    callback()
  }
}

export const { Context, Provider } = createDataContext(blogReducer, {
  addBlogPost,
  deleteBlogPost,
  editBlogPost,
  getBlogPosts
})
