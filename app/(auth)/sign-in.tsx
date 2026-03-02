import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux-code/store';
import { login, setLoginLoading } from '@/app/redux-code/action';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import { allColors, spacingX, spacingY } from '@/constants/theme';
import { scaleFont, verticalScale } from '@/utils/styling';
import { ROUTES } from '@/utils/routes';

const SignIn: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loginLoading } = useSelector((state: RootState) => state.userState);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

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

    setErrors(newErrors);
    return isValid;
  };

  const handleSignIn = async () => {
    if (!validateForm()) return;

    dispatch(setLoginLoading(true));

    // Simulate API call
    setTimeout(() => {
      const mockUser = {
        id: '1',
        email: formData.email,
        name: 'John Doe',
      };
      const mockToken = 'mock-jwt-token-12345';

      dispatch(login(mockUser, mockToken));
      dispatch(setLoginLoading(false));
      router.replace(ROUTES.TABS.HOME);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode={Platform.OS === 'ios' ? 'interactive' : 'none'}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>

            <View style={styles.form}>
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

              <Button
                title="Sign In"
                onPress={handleSignIn}
                loading={loginLoading}
                containerStyle={styles.button}
              />

              <View style={styles.footer}>
                <Text style={styles.footerText}>{"Don't have an account?"} </Text>
                <Text
                  style={styles.linkText}
                  onPress={() => router.push(ROUTES.AUTH.SIGN_UP)}
                >
                  Sign Up
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: allColors.white,
  },
  keyboardView: {
    flex: 1,
    backgroundColor: allColors.white,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: allColors.white,
  },
  content: {
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
  form: {},
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

export default SignIn;
