/**
 * @Description Experience Component
 * @author Shy
 * @date 22.09.2022
 */

import React from 'react'

import StyledSection from '../../assets/StyledSection'
import Marquee from '../../features/Marquee/Marquee'
import Stacks from './Stacks'

export default function Experience () {
    /* horizontal words scrolling infinitely */
    const experiences = "Experience"
    return (
        <StyledSection bg={'bg-ventura'}>
            {/* the component for infinite horizontal texts */}
            <Marquee
                text={experiences}
                styles={'bg-ventura text-glow h-full text-3xl'}
            />
            <div className="absolute inset-0 mobile:h-[90vh]  h-full w-full flex justify-center items-center">
                {/* skill stacks displaying */}
                <Stacks />
            </div>
            
        </StyledSection>
    )
}
/**
 * End of Experience Component
 */