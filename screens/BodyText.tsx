import React, { FC } from 'react'
import { Text, StyleSheet } from 'react-native'

type Props = {
  children: React.ReactNode
  style?: any
}

const BodyText:FC<Props> = ({children,style}) => {
  return (
  <Text style={{...styles.body,...style}}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans'
  }
})

export default BodyText

