/**
 * @Description Home Component
 * @author Shy
 * @date 22.09.2022
 */

import React from 'react'

import StyledSection from '../../assets/StyledSection'
import StyledContainer from '../../assets/StyledContainer'
import Typing from '../../features/typing/Typing'
import NameCubes from './NameCubes'
import Footers from './Footers'

export default function Home () {
    return (
        <StyledSection bg={'bg-dim'} className="mobile:h-screen">
            <StyledContainer>
                <Typing />
                <NameCubes />
            </StyledContainer>
            <Footers />
        </StyledSection>
    )
}

/**
 * End of Home Component
 */