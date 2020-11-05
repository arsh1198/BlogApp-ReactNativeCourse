import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { Context } from '../context/BlogContext'

const CreateScreen = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const { addBlogPost } = useContext(Context)
  return (
    <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
      <>
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 20 }}>
          Create a BlogPost
        </Text>
        <TextInput
          style={styles.Title}
          value={title}
          onChangeText={text => setTitle(text)}
          placeholder={'Enter a Title'}
        />
        <View
          style={{
            backgroundColor: 'lightgrey',
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
        <Button
          title="Add Post"
          onPress={() => {
            addBlogPost(title, body)
          }}
        />
      </>
    </View>
  )
}

const styles = StyleSheet.create({
  Title: {
    height: 50,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    marginTop: 20,
    paddingHorizontal: 20
  },

  Body: {
    paddingHorizontal: 20,
    paddingVertical: 12
  }
})

export default CreateScreen
