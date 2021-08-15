import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgPause(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 792 792"
            {...props}
        >
            <Path fill={"white"} d="M282.856 0H169.714c-31.228 0-56.571 25.344-56.571 56.571v678.857c0 31.228 25.344 56.571 56.571 56.571h113.143c31.256 0 56.572-25.315 56.572-56.571V56.571C339.428 25.344 314.112 0 282.856 0zm339.429 0H509.143c-31.256 0-56.572 25.344-56.572 56.571v678.857c0 31.228 25.316 56.571 56.572 56.571h113.143c31.256 0 56.572-25.315 56.572-56.571V56.571C678.857 25.344 653.541 0 622.285 0z" />
        </Svg>
    )
}

export default SvgPause