import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { SVGStyleProps } from "utils/types";
const Logout = ({ style = {} }: SVGStyleProps) => (
  <Svg width={24} height={24} fill="none">
    <G fill="#54B175" clipPath="url(#a)">
      <Path d="M15.333 2.667H4.667A1.333 1.333 0 0 0 3.333 4v16a1.333 1.333 0 0 0 1.334 1.333h10.666A1.333 1.333 0 0 0 16.667 20v-4H10.42a.667.667 0 1 1 0-1.334h6.247V4a1.333 1.333 0 0 0-1.334-1.333Z" />
      <Path d="M18.773 11.52a.667.667 0 0 0-.94.94l2.254 2.207h-3.42V16h3.42l-2.254 2.307a.666.666 0 1 0 .94.94l3.894-3.867-3.894-3.86Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Logout;
