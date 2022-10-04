/**
 * @Description StyledContainer Component
 * @author Shy
 * @date 2022/10/1
 */

import React from 'react'
import tw from 'tailwind-styled-components'

const StyledContainer = tw.div`
    relative
    sm:h-[80vh]
    h-screen
    w-full
    justify-center
    items-center
    max-w-[1280px]
    cursor-default
`

export default StyledContainer