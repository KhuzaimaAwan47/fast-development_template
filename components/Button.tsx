import { allColors, radius, spacingX } from '@/constants/theme';
import { ButtonProps, getButtonPropsWithDefaults, getButtonStyle } from '@/types/ButtonTypes';
import { scaleFont, verticalScale } from '@/utils/styling';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
const Button: React.FC<ButtonProps> = (props) => {
  const {
    title,
    onPress,
    loading,
    disabled,
    variant,
    containerStyle,
    textStyle,
  } = getButtonPropsWithDefaults(props);

  const getTextStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryText;
      case 'outline':
        return styles.outlineText;
      default:
        return styles.primaryText;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonStyle(variant, styles),
        (disabled || loading) && styles.buttonDisabled,
        containerStyle,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'outline' ? allColors.primary : allColors.white}
          size="small"
        />
      ) : (
        <Text style={[styles.buttonText, getTextStyle(), textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: verticalScale(50),
    borderRadius: radius._10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacingX._20,
  },
  primaryButton: {
    backgroundColor: allColors.primary,
  },
  secondaryButton: {
    backgroundColor: allColors.primaryLight,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: allColors.primary,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: scaleFont(16),
    fontWeight: '600',
  },
  primaryText: {
    color: allColors.white,
  },
  secondaryText: {
    color: allColors.white,
  },
  outlineText: {
    color: allColors.primary,
  },
});

export default Button;
