import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootState } from '@/app/redux-code/store';
import Button from '@/components/Button';
import { allColors, spacingX, spacingY, radius } from '@/constants/theme';
import { scaleFont, verticalScale } from '@/utils/styling';

const Profile: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.userState);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.name?.charAt(0).toUpperCase() || 'U'}
          </Text>
        </View>
        <Text style={styles.name}>{user?.name || 'User'}</Text>
        <Text style={styles.email}>{user?.email || 'No email'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Information</Text>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>User ID</Text>
          <Text style={styles.infoValue}>{user?.id || 'N/A'}</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>{user?.email || 'N/A'}</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Status</Text>
          <Text style={[styles.infoValue, styles.statusVerified]}>
            {user?.isVerified ? 'Verified' : 'Not Verified'}
          </Text>
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
  header: {
    alignItems: 'center',
    paddingVertical: spacingY._40,
  },
  avatar: {
    width: verticalScale(100),
    height: verticalScale(100),
    borderRadius: verticalScale(50),
    backgroundColor: allColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacingY._20,
  },
  avatarText: {
    fontSize: scaleFont(40),
    fontWeight: '700',
    color: allColors.white,
  },
  name: {
    fontSize: scaleFont(24),
    fontWeight: '700',
    color: allColors.black,
    marginBottom: spacingY._5,
  },
  email: {
    fontSize: scaleFont(16),
    color: allColors.neutral600,
  },
  section: {
    marginTop: spacingY._20,
  },
  sectionTitle: {
    fontSize: scaleFont(18),
    fontWeight: '600',
    color: allColors.black,
    marginBottom: spacingY._15,
  },
  infoCard: {
    backgroundColor: allColors.neutral50,
    padding: spacingX._15,
    borderRadius: radius._10,
    marginBottom: spacingY._10,
  },
  infoLabel: {
    fontSize: scaleFont(12),
    color: allColors.neutral600,
    marginBottom: spacingY._5,
  },
  infoValue: {
    fontSize: scaleFont(16),
    fontWeight: '500',
    color: allColors.black,
  },
  statusVerified: {
    color: allColors.green,
  },
});

export default Profile;
