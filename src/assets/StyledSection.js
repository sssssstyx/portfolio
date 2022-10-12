/**
 * @Description StyledSection Component
 * @author Shy
 * @date 2022/9/23
 */

import tw from 'tailwind-styled-components'
import styled from 'styled-components'

const AutoFill = styled.div`

`

const StyledSection = tw(AutoFill)`
    ${p=> p.bg}
    relative
    flex
    flex-none
    min-w-full
    min-h-screen
    mobile:h-[120vh]
    justify-center
    items-center
    snap-center
    overflow-hidden
`
export default StyledSection