import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring,
  useAnimatedGestureHandler,
  withDelay,
  withRepeat,
  withDecay,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import {
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);
export default function FloatingButton() {
  const positionA = useSharedValue(0);
  const positionB = useSharedValue(0);
  const buttonRotation = useSharedValue(0);
  const styleRotationAnimated = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: buttonRotation.value + 'deg' }],
    };
  });
  const styleAnimatedA = useAnimatedStyle(() => {
    return {
      bottom: positionA.value,
    };
  });
  const styleAnimatedB = useAnimatedStyle(() => {
    return {
      bottom: positionB.value,
    };
  });
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
      }}
    >
      <AnimatedButton style={[styles.backgroundButton, styleAnimatedB]}>
        <Text style={{ fontSize: 20 }}>B</Text>
      </AnimatedButton>
      <AnimatedButton style={[styles.backgroundButton, styleAnimatedA]}>
        <Text style={{ fontSize: 20 }}>A</Text>
      </AnimatedButton>
      <AnimatedButton
        style={[styles.buttonWrapper, styleRotationAnimated]}
        onPress={() => {
          positionA.value = withTiming(positionA.value ? 0 : 60, {
            duration: 500,
          });
          positionB.value = withTiming(positionB.value ? 0 : 120, {
            duration: 500,
          });

          buttonRotation.value = withTiming(buttonRotation.value ? 0 : 90, {
            duration: 500,
          });
        }}
      >
        <Text style={{ fontSize: 25 }}>+</Text>
      </AnimatedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
},
backgroundButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "green",
  },
});
