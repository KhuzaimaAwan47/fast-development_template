import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux-code/store';
import { setLoginLoading } from '@/app/redux-code/action';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import { allColors, spacingX, spacingY } from '@/constants/theme';
import { scaleFont, verticalScale } from '@/utils/styling';

const SignUp: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loginLoading } = useSelector((state: RootState) => state.userState);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    const newErrors = { name: '', email: '', password: '', confirmPassword: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;

    dispatch(setLoginLoading(true));

    // Simulate API call
    setTimeout(() => {
      dispatch(setLoginLoading(false));
      // Navigate to OTP verification with email
      router.push({
        pathname: '/(auth)/otp-verification',
        params: { email: formData.email },
      });
    }, 1500);
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
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Sign up to get started</Text>

          <View style={styles.form}>
            <InputField
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.name}
              onChangeText={(text) => {
                setFormData({ ...formData, name: text });
                setErrors({ ...errors, name: '' });
              }}
              error={errors.name}
            />

            <InputField
              label="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChangeText={(text) => {
                setFormData({ ...formData, email: text });
                setErrors({ ...errors, email: '' });
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              error={errors.email}
            />

            <InputField
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChangeText={(text) => {
                setFormData({ ...formData, password: text });
                setErrors({ ...errors, password: '' });
              }}
              secureTextEntry
              error={errors.password}
            />

            <InputField
              label="Confirm Password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChangeText={(text) => {
                setFormData({ ...formData, confirmPassword: text });
                setErrors({ ...errors, confirmPassword: '' });
              }}
              secureTextEntry
              error={errors.confirmPassword}
            />

            <Button
              title="Sign Up"
              onPress={handleSignUp}
              loading={loginLoading}
              containerStyle={styles.button}
            />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <Text
                style={styles.linkText}
                onPress={() => router.back()}
              >
                Sign In
              </Text>
            </View>
          </View>
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
  },
  subtitle: {
    fontSize: scaleFont(16),
    color: allColors.neutral600,
    marginBottom: spacingY._40,
  },
  form: {
    flex: 1,
  },
  button: {
    marginTop: spacingY._10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacingY._30,
  },
  footerText: {
    fontSize: scaleFont(14),
    color: allColors.neutral600,
  },
  linkText: {
    fontSize: scaleFont(14),
    color: allColors.primary,
    fontWeight: '600',
  },
});

export default SignUp;
