import { allColors, radius, spacingX, spacingY } from '@/constants/theme';
import { InputFieldProps } from '@/types/InputFeildTypes';
import { scaleFont, verticalScale } from '@/utils/styling';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  containerStyle,
  style,
  leftIcon,
  secureTextEntry,
  keyboardType,
  ...textInputProps
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPasswordField = secureTextEntry === true;
  const isEmailField = keyboardType === 'email-address';
  const isNameField = label?.toLowerCase().includes('name') || false;

  // Determine which left icon to show
  const getLeftIcon = () => {
    if (leftIcon) {
      return leftIcon;
    }
    if (isPasswordField) {
      return <Ionicons name="lock-closed-outline" size={20} color={allColors.primary} />;
    }
    if (isEmailField) {
      return <Ionicons name="mail-outline" size={20} color={allColors.primary} />;
    }
    if (isNameField) {
      return <Ionicons name="person-outline" size={20} color={allColors.primary} />;
    }
    return null;
  };

  const displayLeftIcon = getLeftIcon();
  const hasLeftIcon = !!displayLeftIcon;

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {hasLeftIcon && (
          <View style={styles.leftIconContainer}>
            {displayLeftIcon}
          </View>
        )}
        <TextInput
          style={[
            styles.input,
            hasLeftIcon ? styles.inputWithLeftIcon : null,
            isPasswordField ? styles.inputWithRightIcon : null,
            error ? styles.inputError : null,
            style,
          ]}
          placeholderTextColor={allColors.neutral600}
          secureTextEntry={isPasswordField && !isPasswordVisible}
          keyboardType={keyboardType}
          {...textInputProps}
        />
        {isPasswordField && (
          <TouchableOpacity
            style={styles.rightIconContainer}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={20}
              color={allColors.neutral500}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacingY._15,
  },
  label: {
    fontSize: scaleFont(14),
    fontWeight: '500',
    color: allColors.black,
    marginBottom: spacingY._8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    flex: 1,
    height: verticalScale(50),
    borderWidth: 0,
    borderRadius: radius._10,
    paddingHorizontal: spacingX._15,
    fontSize: scaleFont(16),
    color: allColors.black,
    backgroundColor: allColors.primaryLightTint,
  },
  inputWithLeftIcon: {
    paddingLeft: spacingX._40,
  },
  inputWithRightIcon: {
    paddingRight: spacingX._40,
  },
  leftIconContainer: {
    position: 'absolute',
    left: spacingX._15,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconContainer: {
    position: 'absolute',
    right: spacingX._15,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacingX._5,
  },
  inputError: {
    borderWidth: 1,
    borderColor: allColors.rose,
  },
  errorText: {
    fontSize: scaleFont(12),
    color: allColors.rose,
    marginTop: spacingY._5,
  },
});

export default InputField;
