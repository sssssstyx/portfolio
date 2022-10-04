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
                <div>
                    {typingWords}
                    <span className="animate-blink">|</span>
                </div>
                <div className="gap-6 text-2xl md:text-3xl xl:text-[2.75rem] text-black md:leading-10 xl:leading-[50px]">
                    <span>Welcome!🥰🥰🥰</span>
                    <br/>
                    <span>Try to touch the awesome letters👆</span>
                </div>
            </StyledTyping>
    )
}

// tailwindCSS for animation typing
const StyledTyping = tw.div`
    flex
    flex-col
    gap-8
    absolute
    hsm:top-52
    top-72
    sm:left-16
    sm:top-[19rem]
    md:top-80
    lg:top-[21rem]
    xl:top-[22rem]
    ml-6
    sm:ml-0
    h-fit
    text-8xl
    font-share
    text-5xl sm:text-7xl md:text-[80px] lg:text-8xl xl:text-9xl
    tracking-wide xl:tracking-wider
    leading-[2.5rem] md:leading-[120px] xl:leading-[140px]
    text-black/70
    z-20
`
/**
 * End of Typing Component
 */