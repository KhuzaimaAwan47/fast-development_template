import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { allColors, spacingX, spacingY, radius } from '@/constants/theme';
import { scaleFont } from '@/utils/styling';

const Settings: React.FC = () => {

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Notifications</Text>
          <Text style={styles.settingValue}>Enabled</Text>
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Language</Text>
          <Text style={styles.settingValue}>English</Text>
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Theme</Text>
          <Text style={styles.settingValue}>Light</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Privacy Policy</Text>
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Terms of Service</Text>
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>About</Text>
        </View>
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
  section: {
    marginBottom: spacingY._30,
  },
  sectionTitle: {
    fontSize: scaleFont(18),
    fontWeight: '600',
    color: allColors.black,
    marginBottom: spacingY._15,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: allColors.neutral50,
    padding: spacingX._15,
    borderRadius: radius._10,
    marginBottom: spacingY._10,
  },
  settingLabel: {
    fontSize: scaleFont(16),
    color: allColors.black,
  },
  settingValue: {
    fontSize: scaleFont(16),
    color: allColors.neutral600,
  },
});

export default Settings;
