import { allColors, spacingY } from '@/constants/theme';
import { HeaderProps } from '@/types/HeaderTypes';
import { scaleFont, verticalScale } from '@/utils/styling';
import { CaretLeft } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TitleToolbar: React.FC<HeaderProps & { onBackPress?: () => void }> = ({
  title,
  leftIcon,
  rightIcon,
  onBackPress,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftSection}>
        {onBackPress && (
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <CaretLeft size={verticalScale(24)} color={allColors.black} weight="regular" />
          </TouchableOpacity>
        )}
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        {title && (
          <Text style={styles.title}>
            {title}
          </Text>
        )}
      </View>

      <View style={styles.rightSection}>
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacingY._15,
    paddingHorizontal: spacingY._20,
    backgroundColor: allColors.white,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: scaleFont(18),
    fontWeight: '600',
    color: allColors.black,
    marginLeft: spacingY._10,
  },
  backButton: {
    padding: 5,
  },
  leftIcon: {
    marginLeft: spacingY._10,
  },
  rightIcon: {
    marginRight: spacingY._10,
  },
});

export default TitleToolbar;
