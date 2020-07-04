import React, { FC } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/colors';
import TitleText from '../screens/TitleText';

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }) => {
  return (
    <View style={{...styles.headerBase,...Platform.select({
      ios: styles.headerIOS,
      android: styles.headerAndroid
    })}}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};
4;
const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    color: Platform.OS==='ios'? Colors.primary: 'white',
  },
});

export default Header;
