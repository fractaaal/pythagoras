import React from 'react'
import {useSpring, animated} from 'react-spring'

const Triangle = (props) => {
    const useStyle = useSpring({
        width: 0,
        height: 0,
        borderRight: `${props.a*10}px solid transparent`,
        borderBottom: `${props.b*10}px solid lightblue`,
        marginLeft: '100px'
    })

    return(
        <animated.div style={useStyle}></animated.div>
    )
}

export default Triangle