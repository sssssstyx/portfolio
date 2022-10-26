/**
 * @Description StyledApp Component
 * @author Shy
 * @date 2022/9/23
 */

import React, { useState } from 'react'
import { useWindowSize } from '../hooks/index'
import { isMobile } from 'react-device-detect'

const StyledApp = (props) => {
    const {screenWidth} = useWindowSize()     // Get screen width
    const [scrollX, setScrollX] = useState(0)   // set horizontal scroll distance
    
    const wheelEvent = (e) => {
        let newX = scrollX - e.deltaY / 5   // less scrolling speed
        const rightLimit = -(props.children.length) * screenWidth // 3 screens width for one more page on the right side
        const leftLimit = screenWidth // 1 screen width for one more page on the left side
        const leftPosition = -(props.children.length - 1) * screenWidth // 2 screen width
        
        // < 0 is going right, > 0 is going left
        if (newX <= rightLimit) newX = 0
        else if (newX > leftLimit) newX = leftPosition
        // scroll position
        setScrollX(newX)
    }
    
    // styles for scrolling horizontally
    const scrollStyles = {
        transform: `translate3d(${scrollX}px, 0px, 0px)`,
        left: '-100vw',
        position: 'relative'
    }
    
    return (
        <React.Fragment>
            {
                isMobile || screenWidth < 769 ?
                    // mobile devices
                    <div className="inset-0 flex flex-col">
                        {props.children}
                    </div>
                    :
                    // desktop devices
                    <div className="inset-0 flex flex-col md:flex-row snap-x snap-proximity" onWheel={(event) => wheelEvent(event)} style={scrollStyles}>
                        {/* have one more page on both left and right side for a continuing scrolling */}
                        {props.children[props.children.length-1]}
                        {props.children}
                        {props.children[0]}
                    </div>
            }
        </React.Fragment>
    )
}
export default StyledApp