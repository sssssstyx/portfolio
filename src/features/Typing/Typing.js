/**
 * @Description Typing Component
 * @author Shy
 * @date 24.09.2022
 */

import React from 'react'
import tw from 'tailwind-styled-components'

import { useTyping } from '../../hooks/index'

export default function Typing () {
    const typingWords = useTyping()
    return (
        <StyledTyping>
            {typingWords}
            <span className="animate-blink">|</span>
        </StyledTyping>
    
    )
}

const StyledTyping = tw.div`
    font-share
    text-5xl sm:text-7xl md:text-[80px] lg:text-8xl xl:text-9xl hsm:text-7xl
    tracking-wide xl:tracking-wider
    leading-[2.5rem] md:leading-[120px] xl:leading-[140px]
    text-black/70
`
/**
 * End of Typing Component
 */