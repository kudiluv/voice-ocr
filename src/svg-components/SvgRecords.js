import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgRecords({active = false}) {
    const color = (active)?'white':'#76787a'
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={30} width={30} viewBox="0 0 500 500"  
    >
      <Path fill={color} d="M171.498 30L141.165 0H0v512h512V30H171.498zM482 60v30H232.165l-30.334-30H482zM128.835 30l91 90H482v30H171.498l-30.333-30H30V30h98.835zM482 180v30H232.165l-30.333-30H482zM30 482V150h98.835l91 90H482v242H30z" />
    </Svg>
  )
}

export default SvgRecords
