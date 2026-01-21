import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootState } from '@/app/redux-code/store';
import Button from '@/components/Button';
import { allColors, spacingX, spacingY } from '@/constants/theme';
import { scaleFont, verticalScale } from '@/utils/styling';

const Home: React.FC = () => {
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.userState);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>
          {user?.name || 'User'}
        </Text>
        <Text style={styles.description}>
          You're successfully logged in to the app.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: allColors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacingX._20,
  },
  title: {
    fontSize: scaleFont(32),
    fontWeight: '700',
    color: allColors.black,
    marginBottom: spacingY._10,
  },
  subtitle: {
    fontSize: scaleFont(24),
    fontWeight: '600',
    color: allColors.primary,
    marginBottom: spacingY._20,
  },
  description: {
    fontSize: scaleFont(16),
    color: allColors.neutral600,
    textAlign: 'center',
  },
});

export default Home;
