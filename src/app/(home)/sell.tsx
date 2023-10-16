import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Sell = () => {
  return (
    <View style={styles.container}>
      <Text>Sell</Text>
    </View>
  )
}

export default Sell

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})