import React from 'react'
import {useSpring, animated} from 'react-spring'

const Length = (props) => {
    const lengthValue = useSpring({
        a:props.a,
        b:props.b,
        c:props.c,
        config:{precision:1}
    })
    return(
        <div>
            <p>a=<animated.span>{lengthValue.a}</animated.span></p>
            <p>b=<animated.span>{lengthValue.b}</animated.span></p>
            <p>c=<animated.span>{lengthValue.c}</animated.span></p>
        </div>

    )
}

export default Length