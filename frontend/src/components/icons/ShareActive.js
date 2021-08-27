import * as React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'

function SvgShareActive(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="black"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}
    >
      <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <Path d="M12 8v8M8 12h8" />
    </Svg>
  )
}

export default SvgShareActive
