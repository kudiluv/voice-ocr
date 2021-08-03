import * as React from "react"
import Svg, { Path,Circle, Rect } from "react-native-svg"

function Microphone(props) {
  return (
    <Svg height="50%" width="50%" viewBox="0 0 100 100">
      <Circle
        cx="50"
        cy="50"
        r="45"
        stroke="blue"
        strokeWidth="2.5"
        fill="green"
      />
      <Rect
        x="15"
        y="15"
        width="70"
        height="70"
        stroke="red"
        strokeWidth="2"
        fill="yellow"
      />
      
      <Path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
    </Svg>
  )
}

export default Microphone
