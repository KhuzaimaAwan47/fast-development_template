import { Dimensions, PixelRatio } from 'react-native';

// Get device dimensions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base dimensions (iPhone 12 Pro)
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

// Scale functions
export const scale = (size: number): number => {
  return (SCREEN_WIDTH / BASE_WIDTH) * size;
};

export const verticalScale = (size: number): number => {
  return (SCREEN_HEIGHT / BASE_HEIGHT) * size;
};

export const moderateScale = (size: number, factor: number = 0.5): number => {
  return size + (scale(size) - size) * factor;
};

// Font scaling
export const scaleFont = (size: number): number => {
  const newSize = scale(size);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Device info
export const deviceInfo = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  isSmallDevice: SCREEN_WIDTH < 375,
  isTablet: SCREEN_WIDTH >= 768,
};

// Responsive breakpoints
export const breakpoints = {
  small: 375,
  medium: 414,
  large: 768,
  xlarge: 1024,
};

// Helper functions
export const isSmallScreen = (): boolean => SCREEN_WIDTH < breakpoints.small;
export const isMediumScreen = (): boolean => SCREEN_WIDTH >= breakpoints.small && SCREEN_WIDTH < breakpoints.medium;
export const isLargeScreen = (): boolean => SCREEN_WIDTH >= breakpoints.medium && SCREEN_WIDTH < breakpoints.large;
export const isXLargeScreen = (): boolean => SCREEN_WIDTH >= breakpoints.large;
