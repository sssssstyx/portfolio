/**
 * @Description Icon Component
 * @author Shy
 * @date 27.09.2022
 */

import React from 'react'
import tw from 'tailwind-styled-components'

export default function Icon (props) {
    return (
        <StyledIcon className="">
            <div className="hsm:w-12 hsm:h-8 w-16 h-16 lg:w-24 lg:h-24 z-20">
                <img className="rounded-xl" src={props.icon} height="300" width="300" alt={`${props.title}`}/>
            </div>
            <span className="mt-2 font-poppins">{props.title}</span>
        </StyledIcon>
    )
}

const StyledIcon = tw.div`
    bg-dim/30
    hsm:h-24
    hsm:w-24
    w-full
    max-w-[350px] min-w-[120px]
    
    h-full
    flex flex-col items-center justify-center rounded-2xl gap-2
    py-5
    shadow-lg
    hover:scale-105 ease-in-out duration-300 lg:duration-500
    cursor-pointer
`
/**
 * End of Icon Component
 */