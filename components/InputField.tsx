import { allColors, radius, spacingX, spacingY } from '@/constants/theme';
import { scaleFont, verticalScale } from '@/utils/styling';
import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

interface InputFieldProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: object;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  containerStyle,
  style,
  ...textInputProps
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          style,
        ]}
        placeholderTextColor={allColors.neutral400}
        {...textInputProps}
      />
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
  input: {
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: allColors.neutral300,
    borderRadius: radius._10,
    paddingHorizontal: spacingX._15,
    fontSize: scaleFont(16),
    color: allColors.black,
    backgroundColor: allColors.white,
  },
  inputError: {
    borderColor: allColors.rose,
  },
  errorText: {
    fontSize: scaleFont(12),
    color: allColors.rose,
    marginTop: spacingY._5,
  },
});

export default InputField;
