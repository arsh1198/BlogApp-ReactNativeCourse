import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [body, setBody] = useState(initialValues.body)
  return (
    <>
      <TextInput
        style={styles.Title}
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder={'Enter a Title'}
      />
      <View
        style={{
          backgroundColor: '#eee',
          marginTop: 20,
          borderRadius: 5,
          height: 150,
          marginBottom: 20
        }}
      >
        <TextInput
          multiline
          style={styles.Body}
          value={body}
          onChangeText={text => setBody(text)}
          placeholder={'Type in the Blog'}
        />
      </View>
      <Button title="Save Post" onPress={() => onSubmit(title, body)} />
    </>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    body: ''
  }
}

const styles = StyleSheet.create({
  Title: {
    height: 50,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginTop: 20,
    paddingHorizontal: 20
  },

  Body: {
    paddingHorizontal: 20,
    paddingVertical: 12
  }
})

export default BlogPostForm
