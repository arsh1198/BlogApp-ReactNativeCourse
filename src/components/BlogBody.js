import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BlogBody = ({ title, body, onIconPress, id }) => {
  return (
    <View style={styles.BlogBodyContainer}>
      <View
        style={{
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Text style={styles.Title}>{title}</Text>
        <TouchableOpacity onPress={() => onIconPress(id)}>
          <MaterialIcons
            name="delete"
            size={24}
            color="black"
            style={{ alignSelf: 'flex-end' }}
          />
        </TouchableOpacity>
      </View>
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
