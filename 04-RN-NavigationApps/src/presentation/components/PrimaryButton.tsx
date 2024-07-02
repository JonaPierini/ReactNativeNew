import React from 'react';
import {Pressable, Text} from 'react-native';
import {globalStyles} from '../theme/theme';

interface Button {
  handleNavigate: () => void;
  label: string;
}

export const PrimaryButton = (props: Button) => {
  return (
    <Pressable
      onPress={props.handleNavigate}
      style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{props.label}</Text>
    </Pressable>
  );
};
