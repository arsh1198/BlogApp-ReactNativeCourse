import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import BlogBody from './BlogBody'

const BlogList = ({ data }) => {
  return (
    <View>
      <FlatList
        keyExtractor={blogPost => blogPost.title}
        data={data}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default BlogList
