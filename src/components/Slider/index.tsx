import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { welcomeData } from "assets/data/welcomeData";
import SlideItem from "../SlideItem";
import Pagination from "../Pagination";
import { FlatList } from "react-native-gesture-handler";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollToIndex({index, animated: true, viewPosition: 0.5 })
  }, [index])
  

  const incrementIndex = () => {
    if (index === welcomeData.length - 1) return;
    setIndex(index + 1);
  };
  
  const skipToLastIndex = () => {
    if (index === welcomeData.length - 1) return;
    setIndex(welcomeData.length - 1);
  };

  const handleOnScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
    }
  );

  // const handleOnItemChanged = useRef(({ viewableItems }) => {
  //   setIndex(viewableItems[0].index)
  // }).current;

  // const handleViewabilityConfig = useRef({
  //   viewAreaCoveragePercentThreshold: 50,
  // }).current;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={welcomeData}
          renderItem={({ item, index }) => (
            <SlideItem
              title={item.title}
              description={item.description}
              image={item.image}
              index={index}
            />
          )}
          ref={scrollRef}
          initialScrollIndex={index}
          horizontal
          scrollEnabled={false}
          snapToAlignment="center"
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          bounces={false}
          onScroll={handleOnScroll}
          scrollEventThrottle={20}
        />
      </View>
      <Pagination
        data={welcomeData}
        scrollX={scrollX}
        index={index}
        nextScreen={incrementIndex}
        lastScreen={skipToLastIndex}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
