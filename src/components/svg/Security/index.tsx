import Svg, { Path } from "react-native-svg";
import { SVGStyleProps } from "utils/types";
const Security = ({ style = {} }: SVGStyleProps) => (
  <Svg width={24} height={24} fill="none">
    <Path
      fill="#54B175"
      d="M10.5 12.443 8.557 10.5 7.5 11.557l3 3 6-6L15.443 7.5 10.5 12.443Z"
    />
    <Path
      fill="#54B175"
      d="m12 22.5-4.632-2.47A8.237 8.237 0 0 1 3 12.75V3a1.502 1.502 0 0 1 1.5-1.5h15A1.501 1.501 0 0 1 21 3v9.75a8.237 8.237 0 0 1-4.368 7.28L12 22.5ZM4.5 3v9.75a6.738 6.738 0 0 0 3.575 5.956L12 20.8l3.925-2.093A6.739 6.739 0 0 0 19.5 12.75V3h-15Z"
    />
  </Svg>
);
export default Security;
