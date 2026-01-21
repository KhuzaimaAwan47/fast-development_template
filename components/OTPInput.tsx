import { allColors, radius, spacingX, spacingY } from '@/constants/theme';
import { scaleFont, verticalScale } from '@/utils/styling';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface OTPInputProps {
  length?: number;
  onComplete: (otp: string) => void;
  error?: string;
}

const OTPInput: React.FC<OTPInputProps> = ({
  length = 6,
  onComplete,
  error,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) {
      // Handle paste
      const pastedText = text.slice(0, length);
      const newOtp = [...otp];
      pastedText.split('').forEach((char, i) => {
        if (index + i < length) {
          newOtp[index + i] = char;
        }
      });
      setOtp(newOtp);
      
      // Focus on last filled input or next empty
      const nextIndex = Math.min(index + pastedText.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
      
      if (newOtp.every((digit) => digit !== '')) {
        onComplete(newOtp.join(''));
      }
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus next input
    if (text && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if OTP is complete
    if (newOtp.every((digit) => digit !== '')) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={[
              styles.input,
              digit && styles.inputFilled,
              error && styles.inputError,
            ]}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="number-pad"
            maxLength={1}
            selectTextOnFocus
          />
        ))}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacingY._20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacingX._10,
  },
  input: {
    width: verticalScale(50),
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: allColors.neutral300,
    borderRadius: radius._10,
    textAlign: 'center',
    fontSize: scaleFont(20),
    fontWeight: '600',
    color: allColors.black,
    backgroundColor: allColors.white,
  },
  inputFilled: {
    borderColor: allColors.primary,
    backgroundColor: allColors.neutral50,
  },
  inputError: {
    borderColor: allColors.rose,
  },
  errorText: {
    fontSize: scaleFont(12),
    color: allColors.rose,
    marginTop: spacingY._10,
    textAlign: 'center',
  },
});

export default OTPInput;
