import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context)
  return (
    <View>
      <Text>Index Screen!</Text>
      <Button title={'Add post'} onPress={addBlogPost} />
      <Button title={'Remove post'} />
      <FlatList
        keyExtractor={blogPost => blogPost.title}
        data={state}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen
