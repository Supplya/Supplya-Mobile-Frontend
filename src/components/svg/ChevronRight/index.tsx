import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { SVGStyleProps } from "utils/types";
const ChevronRight = ({ style = {} }: SVGStyleProps) => (
  <View style={style}>
    <Svg width={24} height={24} fill="none">
      <Path
        fill="#000"
        fillRule="evenodd"
        d="m9 4 8 8-8 8-2-2 6-6-6-6 2-2Z"
        clipRule="evenodd"
      />
    </Svg>
  </View>
);
export default ChevronRight;
