import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '@const/theme'

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
  text: {
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  }
})