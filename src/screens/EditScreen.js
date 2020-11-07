import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const { state, editBlogPost } = useContext(Context)
  const blogPost = state.find(blogPost => blogPost.id === id)
  return (
    <View
      style={{
        paddingTop: 20,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 20 }}>
        Edit BlogPost
      </Text>
      <BlogPostForm
        initialValues={{ title: blogPost.title, body: blogPost.body }}
        onSubmit={(title, body) => {
          editBlogPost(id, title, body, () => navigation.pop())
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditScreen
