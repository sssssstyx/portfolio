/**
 * @Description StyledSection Component
 * @author Shy
 * @date 2022/9/23
 */

import React from 'react'
import tw from 'tailwind-styled-components'
import styled from 'styled-components'

const AutoFill = styled.div`
    min-height: 100vh;
`

const StyledSection = tw(AutoFill)`
    ${p=> p.bg}
    relative
    flex
    flex-none
    min-w-full
    justify-center
    items-center
    snap-center
    overflow-hidden
`
export default StyledSection