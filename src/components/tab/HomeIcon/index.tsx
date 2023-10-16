import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HomeIcon = ({ color }) => (
  <Svg width={20} height={21} fill="none">
    <Path
      fill={color}
      d="M18.854 9.016 10.01 1.933 1.147 9.016l1.04 1.302 1.146-.916V18h13.334V9.4l1.146.917 1.041-1.301Zm-9.687 7.318v-4.167h1.666v4.167H9.167Zm5.833 0h-2.5V10.5h-5v5.834H5V8.069l5.008-4L15 8.065v8.269Z"
    />
  </Svg>
);
export default HomeIcon;
