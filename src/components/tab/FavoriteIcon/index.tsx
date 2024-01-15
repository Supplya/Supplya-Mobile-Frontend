import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FavoriteIcon = ({ color }) => (
  <Svg width={24} height={25} fill="none">
    <Path
      fill={color}
      d="M21.025 11.55v7.95c0 .55-.196 1.021-.587 1.413a1.921 1.921 0 0 1-1.413.587h-14c-.55 0-1.02-.196-1.412-.587a1.93 1.93 0 0 1-.588-1.413v-7.95c-.383-.35-.679-.8-.887-1.35-.208-.55-.212-1.15-.013-1.8L3.175 5c.133-.433.371-.792.713-1.075A1.806 1.806 0 0 1 5.075 3.5h13.9c.45 0 .842.138 1.175.413.333.275.575.638.725 1.087l1.05 3.4c.2.65.196 1.242-.012 1.775a3.938 3.938 0 0 1-.888 1.375Zm-6.8-1.05c.45 0 .792-.154 1.025-.462.233-.308.325-.654.275-1.038l-.55-3.5h-1.95v3.7c0 .35.117.654.35.913a1.1 1.1 0 0 0 .85.387Zm-4.5 0c.383 0 .696-.13.938-.388.242-.259.363-.563.362-.912V5.5h-1.95L8.525 9c-.067.4.02.75.262 1.05.241.3.554.45.938.45Zm-4.45 0c.3 0 .562-.108.787-.325.225-.217.362-.492.413-.825l.55-3.85h-1.95l-1 3.35c-.1.333-.046.692.162 1.075.208.383.554.575 1.038.575Zm13.5 0c.483 0 .833-.192 1.05-.575.217-.383.267-.742.15-1.075l-1.05-3.35h-1.9l.55 3.85c.05.333.188.608.413.825a1.1 1.1 0 0 0 .787.325Z"
    />
  </Svg>
);
export default FavoriteIcon;
