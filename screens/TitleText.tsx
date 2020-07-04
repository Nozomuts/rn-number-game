import React, { FC } from 'react'
import { Text, StyleSheet } from 'react-native'

type Props = {
  children: React.ReactNode
  style?: any
}

const TitleText:FC<Props> = ({children,style}) => {
  return (
  <Text style={{...styles.title,...style}}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  }
})

export default TitleText

