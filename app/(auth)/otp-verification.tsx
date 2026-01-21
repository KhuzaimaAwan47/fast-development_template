import { login, setOTPLoading, verifyOTP } from '@/app/redux-code/action';
import { RootState } from '@/app/redux-code/store';
import Button from '@/components/Button';
import OTPInput from '@/components/OTPInput';
import { allColors, spacingX, spacingY } from '@/constants/theme';
import { scaleFont, verticalScale } from '@/utils/styling';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const OTPVerification: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const params = useLocalSearchParams<{ email?: string }>();
  const { otpLoading } = useSelector((state: RootState) => state.userState);

  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleOTPComplete = async (otpCode: string) => {
    setOtp(otpCode);
    setError('');

    if (otpCode.length !== 6) {
      setError('Please enter a valid 6-digit code');
      return;
    }

    dispatch(setOTPLoading(true));

    // Simulate API call for OTP verification
    setTimeout(() => {
      // Mock verification - in real app, verify with backend
      if (otpCode === '123456') {
        // Success - create user and login
        const mockUser = {
          id: '1',
          email: params.email || 'user@example.com',
          name: 'New User',
          isVerified: true,
        };
        const mockToken = 'mock-jwt-token-12345';

        dispatch(verifyOTP(true));
        dispatch(login(mockUser, mockToken));
        dispatch(setOTPLoading(false));
        router.replace('/(tabs)');
      } else {
        setError('Invalid OTP code. Please try again.');
        dispatch(setOTPLoading(false));
        dispatch(verifyOTP(false));
      }
    }, 1500);
  };

  const handleResendOTP = () => {
    setError('');
    setOtp('');
    // Simulate resend OTP
    // In real app, call API to resend OTP
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          <Text style={styles.title}>Verify Your Email</Text>
          <Text style={styles.subtitle}>
            We've sent a 6-digit code to{'\n'}
            <Text style={styles.email}>{params.email || 'your email'}</Text>
          </Text>

          <OTPInput
            length={6}
            onComplete={handleOTPComplete}
            error={error}
          />

          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't receive the code? </Text>
            <Text style={styles.resendLink} onPress={handleResendOTP}>
              Resend
            </Text>
          </View>

          <Button
            title="Verify"
            onPress={() => otp && handleOTPComplete(otp)}
            loading={otpLoading}
            disabled={otp.length !== 6}
            containerStyle={styles.button}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: allColors.white,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacingX._20,
    paddingTop: verticalScale(80),
    paddingBottom: spacingY._40,
  },
  title: {
    fontSize: scaleFont(32),
    fontWeight: '700',
    color: allColors.black,
    marginBottom: spacingY._10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: scaleFont(16),
    color: allColors.neutral600,
    marginBottom: spacingY._40,
    textAlign: 'center',
  },
  email: {
    fontWeight: '600',
    color: allColors.primary,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacingY._20,
    marginBottom: spacingY._30,
  },
  resendText: {
    fontSize: scaleFont(14),
    color: allColors.neutral600,
  },
  resendLink: {
    fontSize: scaleFont(14),
    color: allColors.primary,
    fontWeight: '600',
  },
  button: {
    marginTop: spacingY._20,
  },
});

export default OTPVerification;
