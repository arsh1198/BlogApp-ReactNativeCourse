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
          return <BlogBody title={item.title} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default BlogList
