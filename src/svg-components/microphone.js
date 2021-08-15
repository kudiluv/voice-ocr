import * as React from "react"
import Svg, { Path,Circle, Rect } from "react-native-svg"
const SvgMicrophone = ({active = false}) => {
  const color = (active)?'white':'#76787a'
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={30} width={30} viewBox="0 0 500 500"     
    >
      <Path fill={color} d="M241 420.323V482h-90v30h210v-30h-90v-61.677c67.33-6.042 122.865-52.795 142.411-114.813l-28.612-9.018C366.982 353.02 315.222 391 256 391s-110.982-37.98-128.799-94.509l-28.612 9.018C118.114 367.459 173.6 414.274 241 420.323z" />
      <Path fill={color} d="M256 361c57.897 0 105-47.103 105-105V106C361 47.551 313.897 0 256 0S151 47.551 151 106v150c0 57.897 47.103 105 105 105zm-75-180h45v-30h-45v-30h45V91h-43.526c6.892-34.746 37.238-61 73.526-61s66.634 26.254 73.526 61H286v30h45v30h-45v30h45v30H181zm0 60h150v15c0 41.355-33.645 75-75 75s-75-33.645-75-75z" />
    </Svg>
  )
}

export default SvgMicrophone
