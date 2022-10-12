/**
 * @Description Home Component
 * @author Shy
 * @date 22.09.2022
 */

import React from 'react'

import StyledSection from '../../assets/StyledSection'
import StyledContainer from '../../assets/StyledContainer'
import NameCubes from './NameCubes'
import Footers from './Footers'
import Showcase from './Showcase'

export default function Home () {
    return (
        <StyledSection bg={'bg-dim'} className="mobile:h-screen">
            <StyledContainer>
                <Showcase />
                <NameCubes />
            </StyledContainer>
            <Footers />
        </StyledSection>
    )
}

/**
 * End of Home Component
 */