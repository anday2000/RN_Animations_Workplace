import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring,
  useAnimatedGestureHandler,
  withDelay,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { View, Button, Dimensions } from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
export default function AnimatedStyleUpdateExample(props) {
  const progressWidth = useSharedValue(10);

  const config = {
    duration: 1500,
  };

  const style = useAnimatedStyle(() => {
    return {
      width: progressWidth.value,
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.startX = progressWidth.value;
    },
    onActive: (event, context) => {
      // console.log(event.translationX)
      progressWidth.value = context.startX + event.translationX;
    },
  });

  return (
    <View
      style={{
        flex: 1,
        // alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            {
              width: 100,
              height: 80,
              backgroundColor: "#0CCE6B",
              margin: 30,
              borderRadius: 20,
            },
            style,
          ]}
        />
      </PanGestureHandler>
      <Button
        title="Reset"
        onPress={() => {
          progressWidth.value = withTiming(10, config);
        }}
      />
    </View>
  );
}
