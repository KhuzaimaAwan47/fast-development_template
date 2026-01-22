import React from 'react';
import { ActivityIndicator, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface DebouncedTouchableOpacityProps extends TouchableOpacityProps {
  loading?: boolean;
  disabled?: boolean;
}

const DebouncedTouchableOpacity: React.FC<DebouncedTouchableOpacityProps> = ({
  children,
  onPress,
  loading = false,
  disabled = false,
  style,
  ...props
}) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const handlePress = (event: any) => {
    if (disabled || loading || isPressed) return;
    
    setIsPressed(true);
    if (onPress) {
      onPress(event);
    }
    
    // Reset after a short delay to prevent rapid presses
    setTimeout(() => setIsPressed(false), 300);
  };

  return (
    <TouchableOpacity
      style={[
        {
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
      onPress={handlePress}
      disabled={disabled || loading || isPressed}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#000" />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default DebouncedTouchableOpacity;
