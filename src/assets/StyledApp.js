/**
 * @Description StyledApp Component
 * @author Shy
 * @date 2022/9/23
 */

import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useLoading, useWindow } from '../hooks'
import InitScreen from '../pages/Loading/InitScreen'

const StyledApp = (props) => {
    const isLoading = useLoading()
    
    const { screenWidth } = useWindow()
    
    // const screenWidth = window.innerWidth
    const [scrollX, setScrollX] = useState(0)   // set horizontal scroll distance
    
    const wheelEvent = (e) => {
        // wheelEvent.active = true
        
        let newX = scrollX - e.deltaY / 30   // less scrolling speed
        // let newX = scrollX - e.deltaY
    
        /* suppose scrolling all the elements(left) at right in 100% */
        const rightLimit = -(props.children.length) * 100
        // const rightLimit = -(props.children.length) * screenWidth
        
        /* suppose scrolling only 100% element at left */
        const leftLimit = 100
        // const leftLimit = screenWidth
        
        // 100% screen width for one more page on the left side
        const leftPosition = -(props.children.length - 1) * 100
        // const leftPosition = -(props.children.length - 1) * screenWidth
        
        // if < right-limit then it's going right, else > left-limit it's going left
        if (newX <= rightLimit) newX = 0
        else if (newX > leftLimit) newX = leftPosition
        
        // console.log(newX, rightLimit, leftLimit)
        setScrollX(newX)    // scroll position
    }
    
    // styles for scrolling horizontally
    const scrollStyles = {
        transform: `translate3d(${scrollX}%, 0px, 0px)`,
        // transform: `translate3d(${scrollX}px, 0px, 0px)`,
        left: '-100vw',
        position: 'relative'
    }
    
    return (
        <React.Fragment>
            {
                isMobile || screenWidth < 769 ?
                    // mobile devices
                    isLoading ?
                        <InitScreen/>
                        :
                        <div className="inset-0 flex flex-col ">
                            {props.children}
                        </div>
                    :
                    // desktop devices
                    isLoading ?
                        <InitScreen/>
                        :
                        <div className="inset-0 flex flex-col md:flex-row snap-x snap-proximity" onWheel={wheelEvent}
                             style={scrollStyles}>
                            {/* have one more page on both left and right side for a continuing scrolling */}
                            {props.children[props.children.length - 1]}
                            {props.children}
                            {props.children[0]}
                        </div>
            }
        </React.Fragment>
    )
}
export default StyledApp