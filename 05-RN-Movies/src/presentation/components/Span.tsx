import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

export const Span = (props: Props) => {
  return <Text style={[style.spanFuente, props.style]}>{props.children}</Text>;
};

const style = StyleSheet.create({
  spanFuente: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 30,
    color: '#2E3749',
  },
});
