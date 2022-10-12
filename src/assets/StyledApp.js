/**
 * @Description StyledApp Component
 * @author Shy
 * @date 2022/9/23
 */

import React, { useRef } from 'react'
import tw from 'tailwind-styled-components'
import { useHorizonScroll } from '../hooks/index'

const StyledApp = (props) => {
    // ref to bond with main div in App
    const paraRef = useRef(null)
    
    useHorizonScroll(paraRef)
    
    return (
        <StyledParallax ref={paraRef} className="inset-0">
            {props.children}
        </StyledParallax>
    )
}

//
const StyledParallax = tw.div`
    flex
    flex-col
    md:flex-row
    snap-mandatory
    snap-y
    md:snap-x
    md:snap-proximity
`
/* // This is the earlier version of Styled Parallax
const StyledParallax = tw(NoScrollBarStyles)`
    absolute
    md:relative
    w-full
    flex
    flex-col
    md:flex-row
    
    overflow-x-hidden
    md:overflow-y-hidden
    snap-proximity
    snap-y
    md:snap-x
    scroll-smooth
`*/

export default StyledApp