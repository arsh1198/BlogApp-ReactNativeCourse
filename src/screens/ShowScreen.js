import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BlogBody from '../components/BlogBody'
import { Context } from '../context/BlogContext'
import IndexScreen from './IndexScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)
  const id = navigation.getParam('id')
  const blogPost = state.find(blogPost => blogPost.id === id)
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#fff',
        flex: 1
      }}
    >
      <BlogBody
        showBody={true}
        showIcon={false}
        title={blogPost.title}
        body={blogPost.body}
      />
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <MaterialCommunityIcons
          name={'pencil-circle'}
          style={{ marginEnd: 20 }}
          size={30}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({})

export default ShowScreen
