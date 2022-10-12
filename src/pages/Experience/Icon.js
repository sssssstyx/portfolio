/**
 * @Description Icon Component
 * @author Shy
 * @date 27.09.2022
 */

import React from 'react'
import tw from 'tailwind-styled-components'

export default function Icon (props) {
    return (
        <StyledIcon>
            <div className="flex flex-col items-center justify-center rounded-xl gap-2 hover:scale-110 ease-in-out duration-300 lg:duration-500">
                <div className="hsm:w-12 hsm:h-8 w-16 h-16 lg:w-24 lg:h-24 z-20">
                    <img className="rounded-xl" src={props.icon} height="300" width="300" alt={`${props.title}`}/>
                </div>
                <span className="mt-2 font-poppins">{props.title}</span>
            </div>
        </StyledIcon>
    )
}

const StyledIcon = tw.div`
    bg-dim/30
    hsm:h-24
    hsm:w-24
    w-full
    max-w-[350px] min-w-[120px]
    backdrop-blur-sm
    h-full
    py-5
    rounded-2xl
    shadow-lg
    cursor-pointer
`
/**
 * End of Icon Component
 */