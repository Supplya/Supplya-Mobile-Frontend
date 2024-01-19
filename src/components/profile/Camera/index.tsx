import { COLORS } from "@const/theme";
import * as React from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";
import { SVGStyleProps } from "utils/types";

const Camera = ({ style }: SVGStyleProps) => (
  <TouchableOpacity style={style}>
    <View
      style={{ padding: 8, borderRadius: 30, backgroundColor: COLORS.primary }}
    >
      <Svg width={24} height={24} fill="none">
        <Path
          fill="#fff"
          d="M18.188 7.688h-2.813V6.563H8.344v1.125H5.53a1.5 1.5 0 0 0-1.5 1.5v7.78a1.5 1.5 0 0 0 1.5 1.5h12.657a1.5 1.5 0 0 0 1.5-1.5v-7.78a1.5 1.5 0 0 0-1.5-1.5Zm-6.329 9.937a4.55 4.55 0 0 1-4.545-4.546 4.55 4.55 0 0 1 4.545-4.547 4.552 4.552 0 0 1 4.546 4.546 4.55 4.55 0 0 1-4.546 4.546v.001Zm0-7.594a3.048 3.048 0 1 0 .001 6.098 3.048 3.048 0 0 0-.001-6.099v.001Z"
        />
      </Svg>
    </View>
  </TouchableOpacity>
);
export default Camera;
