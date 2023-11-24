import { Pressable, StyleProp, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface AnimatedPressableProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const AnimPressable = Animated.createAnimatedComponent(Pressable);

const AnimatedPressable = ({
  onPress,
  style = {},
  children,
}: AnimatedPressableProps) => {
  const elevation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      elevation: elevation.value,
      zIndex: elevation.value ? 1 : 0,
    };
  });

  function handlePressIn() {
    elevation.value = withTiming(elevation.value + 50, { duration: 50 });
  }

  function handlePressOut() {
    elevation.value = withTiming(elevation.value - 50, { duration: 50 });
  }
  return (
    <AnimPressable
      style={[style, animatedStyle]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={() => {
        handlePressOut();
      }}
    >
      {children}
    </AnimPressable>
  );
};

export default AnimatedPressable;
