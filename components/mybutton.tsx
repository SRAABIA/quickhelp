import { View, StyleSheet,Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Mybutton = ({title, onPress}) => {
  return (
    <View>
        <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}>
            <Text style={styles.text} onPress={onPress}>{title} </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: "lightblue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  text:{
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  }
})
export default Mybutton