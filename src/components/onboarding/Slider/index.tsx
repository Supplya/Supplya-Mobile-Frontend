import { View, Animated } from "react-native";
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
    scrollRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  }, [index]);

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

  return (
    <View style={{ flex: 0.8 }}>
      <View style={{}}>
        <FlatList
          data={welcomeData}
          renderItem={({ item, index }) => (
            <SlideItem
              title={item.title}
              description={item.description}
              image={item.image}
              index={index}
              skipScreen={skipToLastIndex}
            />
          )}
          ref={scrollRef}
          initialScrollIndex={index}
          horizontal
          snapToAlignment="center"
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          bounces={false}
          onScroll={handleOnScroll}
          scrollEventThrottle={20}
        />
        <Pagination data={welcomeData} scrollX={scrollX} index={index} />
      </View>
    </View>
  );
};

export default Slider;
