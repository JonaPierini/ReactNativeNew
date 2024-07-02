import React from 'react';
import {Pressable, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  backgroundColor?: string;
  size?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = (props: Props) => {
  //Si el backgrounColor no viene por las props se establece el colors.darkGray
  const {backgroundColor = colors.darkGray} = props;
  return (
    <Pressable
      onPress={() => props.onPress()}
      style={({pressed}) => ({
        ...globalStyles.button,
        //Si el backgrounColor no viene por las props se establece el colors.darkGray
        backgroundColor: backgroundColor,
        opacity: pressed ? 0.8 : 1,
        width: props.size ? 180 : 80,
      })}>
      <Text
        style={[
          globalStyles.buttonText,
          {color: props.blackText ? 'black' : 'white'},
        ]}>
        {props.label}
      </Text>
    </Pressable>
  );
};
