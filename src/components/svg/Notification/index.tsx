import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { SVGStyleProps } from "utils/types";
const Notification = ({ style = {} }: SVGStyleProps) => (
  <Svg width={24} height={24} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#54B175"
        fillRule="evenodd"
        d="M15 19a2 2 0 0 1-1.85 1.995L13 21h-2a2 2 0 0 1-1.995-1.85L9 19h6ZM12 2a7 7 0 0 1 6.996 6.76L19 9v3.764l1.822 3.644a1.1 1.1 0 0 1-.869 1.586l-.115.006H4.162a1.1 1.1 0 0 1-1.03-1.487l.046-.105L5 12.764V9a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-4.995 4.783L7 9v3.764a2 2 0 0 1-.136.725l-.075.17L5.619 16h12.763l-1.17-2.342a2 2 0 0 1-.203-.709L17 12.764V9a5 5 0 0 0-5-5Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Notification;
