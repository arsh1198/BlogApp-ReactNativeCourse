import createDataContext from './createDataContext'

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
    default:
      return state
  }
}

const addBlogPost = dispatch => {
  return (title, body) => {
    dispatch({ type: 'add_blogPost', payload: { title, body } })
  }
}
const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogPost', payload: id })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
)
