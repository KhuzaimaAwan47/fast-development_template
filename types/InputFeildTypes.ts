import React from 'react';
import { TextInputProps } from 'react-native';

export interface InputFieldProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: object;
  leftIcon?: React.ReactNode;
}
