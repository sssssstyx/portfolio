/**
 * @Description Marquee Component
 * @author Shy
 * @date 27.09.2022
 */

import React from 'react'
import tw from 'tailwind-styled-components'

export default function Marquee ({ text, styles }) {
    return (
        <StyledScrollingTexts styles={styles}>
            <StyledText>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span className="mid:hidden">{text}</span>
                <span className="mid:hidden">{text}</span>
            </StyledText>
            <StyledText>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span className="mid:hidden">{text}</span>
                <span className="mid:hidden">{text}</span>
            </StyledText>
            <div className="h-28 top-28"></div>
        </StyledScrollingTexts>
    )
}

/* using animation * keyframes in tailwind config file */
const StyledScrollingTexts = tw.div`
    ${(p) => p.styles}
    absolute
    flex
    w-full
    top-0 left-0
    items-center
    font-abril tracking-wider
    text-3xl sm:text-5xl lg:text-6xl
    cursor-default
    animate-scroll
`

const StyledText = tw.div`
    w-full
    flex
    justify-around
`

/**
 * End of Marquee Component
 */