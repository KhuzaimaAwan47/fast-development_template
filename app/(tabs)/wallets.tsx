import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { allColors, spacingX, spacingY } from '@/constants/theme';
import { scaleFont } from '@/utils/styling';

const Wallets: React.FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Wallets</Text>
          <Text style={styles.description}>
            Your wallet information will appear here.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: allColors.white,
  },
  content: {
    padding: spacingX._20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: spacingY._40,
  },
  title: {
    fontSize: scaleFont(32),
    fontWeight: '700',
    color: allColors.black,
    marginBottom: spacingY._10,
  },
  description: {
    fontSize: scaleFont(16),
    color: allColors.neutral600,
    textAlign: 'center',
  },
});

export default Wallets;
