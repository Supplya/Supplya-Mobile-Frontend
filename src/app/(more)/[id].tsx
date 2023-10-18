import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { COLORS } from '@const/theme'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import DetailsCard from '@comp/details/DetailsCard'

const Details = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          title: "Dragon Fruit",
        }}
      />
      <View style={styles.image}/>
      <DetailsCard />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.offWhite
  },
  image: {
    width: wp(100),
    aspectRatio: 375/240,
    backgroundColor: COLORS.systemGray,
  }
})