import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors'
import TitleText from '../screens/TitleText'

type Props = {
  title: string
}

const Header:FC<Props> = ({title}) => {

  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  )
}
4
const styles= StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'black',
  }
})

export default Header

