import { allColors, radius } from '@/constants/theme';
import { scaleFont } from '@/utils/styling';
import { Tabs } from 'expo-router';
import { HouseIcon, HouseSimpleIcon, ShoppingBagIcon, ShoppingCartIcon, UserCircleIcon, UserIcon, WalletIcon } from 'phosphor-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: allColors.primary,
        tabBarInactiveTintColor: allColors.neutral400,
        tabBarStyle: {
          backgroundColor: allColors.white,
          borderTopLeftRadius: radius._20,
          borderTopRightRadius: radius._20,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom + 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: scaleFont(12),
          fontWeight: '500',
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => {
            const Icon = focused ? HouseIcon : HouseSimpleIcon;
            return (
              <Icon
                size={size}
                color={focused ? color : allColors.neutral400}
                weight={focused ? "fill" : "regular"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color, size, focused }) => {
            const Icon = focused ? ShoppingBagIcon : ShoppingCartIcon;
            return (
              <Icon
                size={size}
                color={focused ? color : allColors.neutral400}
                weight={focused ? "fill" : "regular"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="wallets"
        options={{
          title: 'Wallets',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <WalletIcon
                size={size}
                color={focused ? color : allColors.neutral400}
                weight={focused ? "fill" : "regular"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size, focused }) => {
            const Icon = focused ? UserIcon : UserCircleIcon;
            return (
              <Icon
                size={size}
                color={focused ? color : allColors.neutral400}
                weight={focused ? "fill" : "regular"}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
