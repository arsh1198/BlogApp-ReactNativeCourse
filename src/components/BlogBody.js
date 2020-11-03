import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BlogBody = ({ title, body }) => {
  return (
    <View style={styles.BlogBodyContainer}>
      <Text style={styles.Title}>{title}</Text>
      <View style={{ backgroundColor: '#fff', padding: 20, marginTop: 10 }}>
        <Text style={styles.Body}>
          This is just a sample Blog Body. Just writing random shit to just test
          things out!
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  BlogBodyContainer: { backgroundColor: '#eeeeee', padding: 20 },
  Title: { fontSize: 18, fontWeight: 'bold' },
  Body: {}
})

export default BlogBody
