export const ROUTES = {
  // Auth routes
  AUTH: {
    SIGN_IN: '/(auth)/sign-in',
    SIGN_UP: '/(auth)/sign-up',
    OTP_VERIFICATION: '/(auth)/otp-verification',
  },
  // Tab routes
  TABS: {
    HOME: '/(tabs)',
    PROFILE: '/(tabs)/profile',
    SETTINGS: '/(tabs)/settings',
  },
  // Root
  ROOT: '/',
} as const;

export type RoutePath = typeof ROUTES[keyof typeof ROUTES][keyof typeof ROUTES[keyof typeof ROUTES]] | typeof ROUTES.ROOT;
