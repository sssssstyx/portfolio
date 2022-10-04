/**
 * @Description Experience Component
 * @author Shy
 * @date 22.09.2022
 */

import React from 'react'

import StyledSection from '../../assets/StyledSection'
import Marquee from '../../features/marquee/Marquee'
import Stacks from './Stacks'

export default function Experience () {
    /* horizontal words scrolling infinitely */
    const experiences = "Experience"
    return (
        <StyledSection bg={'bg-glow'}>
            {/* the component for infinite horizontal texts */}
            <Marquee
                text={experiences}
                styles={'bg-ventura text-glow h-full text-3xl'}
            />
            {/* skill stacks displaying */}
            <Stacks />
        </StyledSection>
    )
}
/**
 * End of Experience Component
 */