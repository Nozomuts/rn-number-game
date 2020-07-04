import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  children: React.ReactNode;
  style: any
};

const Card: FC<Props> = ({ children,style }) => {
  return <View style={{...styles.card,...style}}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
});

export default Card;
