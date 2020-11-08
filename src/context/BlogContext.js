import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          body: action.payload.body
        }
      ]
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

const getBlogPost = dispatch => {
  return () => {
    await jsonServer.get('/blogPosts')
  }
}

const addBlogPost = dispatch => {
  return (title, body, callback) => {
    dispatch({ type: 'add_blogPost', payload: { title, body } })
    callback()
  }
}
const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogPost', payload: id })
  }
}

const editBlogPost = dispatch => {
  return (id, title, body, callback) => {
    dispatch({ type: 'edit_blogPost', payload: { id, title, body } })
    callback()
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: 'Sample Blog!', body: 'A sample Blog body..', id: 1 }]
)
