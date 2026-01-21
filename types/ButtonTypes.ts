import { TextStyle, ViewStyle } from "react-native";

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps {
    title: string;
    onPress: () => void;
    loading?: boolean;
    disabled?: boolean;
    variant?: ButtonVariant;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
  };

export const getButtonStyle = (variant: ButtonVariant, styles: {
  primaryButton: ViewStyle;
  secondaryButton: ViewStyle;
  outlineButton: ViewStyle;
}) => {
  switch (variant) {
    case 'secondary':
      return styles.secondaryButton;
    case 'outline':
      return styles.outlineButton;
    default:
      return styles.primaryButton;
  }
};

export const getButtonPropsWithDefaults = (props: ButtonProps): Required<Pick<ButtonProps, 'loading' | 'disabled' | 'variant'>> & ButtonProps => {
  return {
    ...props,
    loading: props.loading ?? false,
    disabled: props.disabled ?? false,
    variant: props.variant ?? 'primary',
  };
};