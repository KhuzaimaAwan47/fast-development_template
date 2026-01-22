import { allColors, radius } from '@/constants/theme';
import { CustomTabsProps } from '@/types/CustomTabsTypes';
import { scaleFont } from '@/utils/styling';
import { Tabs as ExpoTabs } from 'expo-router';
import React from 'react';



const Tabs: React.FC<CustomTabsProps> = ({ children }) => {
  return (
    <ExpoTabs
      screenOptions={{
        tabBarActiveTintColor: allColors.primary,
        tabBarInactiveTintColor: allColors.neutral500,
        tabBarStyle: {
          backgroundColor: allColors.white,
          borderTopLeftRadius: radius._20,
          borderTopRightRadius: radius._20,
          height: "60%",
          paddingBottom: 8,
          paddingTop: 8,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: scaleFont(12),
          fontWeight: '500',
        },
        headerShown: false,
      }}
    >
      {children}
    </ExpoTabs>
  );
};

export default Tabs;
