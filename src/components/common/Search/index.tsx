import { View } from "react-native";
import { Svg, Path } from "react-native-svg";
import React from "react";
import { COLORS } from "@const/theme";

const Search = ({ style = {}, color = COLORS.primary }) => {
  return (
    <View style={style}>
      <Svg width={20} height={20} fill="none">
        <Path
          fill={color}
          d="m18.09 16.91-3.783-3.782a7.105 7.105 0 1 0-1.179 1.179l3.783 3.782 1.178-1.178Zm-9.34-2.743a5.417 5.417 0 1 1 5.417-5.417 5.423 5.423 0 0 1-5.417 5.417Z"
        />
      </Svg>
    </View>
  );
};

export default Search;
