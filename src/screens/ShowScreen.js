import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BlogBody from '../components/BlogBody'
import { Context } from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)
  const id = navigation.getParam('id')
  const blogPost = state.find(blogPost => blogPost.id === id)
  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
      <BlogBody
        showBody={true}
        showIcon={false}
        title={blogPost.title}
        body="sample body!"
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ShowScreen
