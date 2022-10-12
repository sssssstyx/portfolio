/**
 * @Description Showcase Component
 * @author Shy
 * @date 12.10.2022
 */

import React from 'react'
import tw from 'tailwind-styled-components'
import Typing from '../../features/typing/Typing'

export default function Showcase () {
    return (
        <StyledShowcase>
            <Typing />
            <div className="gap-6 text-2xl md:text-3xl xl:text-[2.75rem] hsm:text-3xl text-black md:leading-10 xl:leading-[50px]">
                <span>Welcome!🥰🥰🥰</span>
                <br/>
                <span>Try to touch the awesome letters👆</span>
            </div>
        </StyledShowcase>
    )
}

// tailwindCSS for animation typing
const StyledShowcase = tw.div`
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
    z-20
`

/**
 * End of Showcase Component
 */