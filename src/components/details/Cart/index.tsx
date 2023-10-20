import { COLORS } from "@const/theme";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Cart = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      fill={COLORS.primary}
      d="M17 18a2 2 0 1 1-2 2c0-1.11.89-2 2-2ZM1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2Zm6 16a2 2 0 1 1-2 2c0-1.11.89-2 2-2Zm9-7 2.78-5H6.14l2.36 5H16Z"
    />
  </Svg>
);
export default Cart;