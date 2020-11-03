import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import BlogList from '../components/BlogList'
import { Context } from '../context/BlogContext'

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context)
  return (
    <View>
      <Text>Index Screen!</Text>
      <Button title={'Add post'} onPress={addBlogPost} />
      <BlogList data={state} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen
