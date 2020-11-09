import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import BlogBody from './BlogBody'
const BlogList = ({ data, onIconPress, navigation }) => {
  return (
    <FlatList
      style={{ marginTop: 10 }}
      showsVerticalScrollIndicator={false}
      keyExtractor={blogPost => blogPost.title}
      data={data}
      renderItem={({ item }) => {
        return (
          <View style={{ marginBottom: 10 }}>
            <BlogBody
              onPress={navigation.navigate}
              showBody={false}
              showIcon={true}
              title={item.title}
              onIconPress={onIconPress}
              id={item.id}
            />
          </View>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default BlogList
