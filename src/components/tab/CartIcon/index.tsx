import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CartIcon = ({ color }) => (
  <Svg width={20} height={21} fill="none">
    <Path
      fill={color}
      d="M14.167 13.833H6.99L7.267 13h8.361l2.144-7.5H5.537L4.787 3H2.5v1.667h1.047l2.246 7.487-.59 1.77a2.496 2.496 0 1 0 3.13 2.41 2.472 2.472 0 0 0-.153-.834h3.64a2.47 2.47 0 0 0-.153.833 2.5 2.5 0 1 0 2.5-2.5Zm1.395-6.666-1.19 4.166H7.288l-1.25-4.166h9.524Zm-8.895 9.166a.833.833 0 1 1-1.667 0 .833.833 0 0 1 1.667 0Zm7.5.834a.833.833 0 1 1 0-1.666.833.833 0 0 1 0 1.666Z"
    />
  </Svg>
);
export default CartIcon;
