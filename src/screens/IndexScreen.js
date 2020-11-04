import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import BlogList from '../components/BlogList'
import { Context } from '../context/BlogContext'

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context)
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#fff',
        flex: 1
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 20 }}>
        Blog Posts
      </Text>
      <Button title={'Add post'} onPress={addBlogPost} />
      <BlogList
        data={state}
        onIconPress={deleteBlogPost}
        navigation={navigation}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen
