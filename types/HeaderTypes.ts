import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface HeaderProps {
  title?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  style?: ViewStyle;
}
