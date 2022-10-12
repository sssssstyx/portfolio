/**
 * @Description Stacks Component
 * @author Shy
 * @date 27.09.2022
 */

import React from 'react'
import tw from 'tailwind-styled-components'

import react_icon from '../../assets/images/react.svg'
import redux_icon from '../../assets/images/redux.svg'
import tailwind_icon from '../../assets/images/tailwindcss.svg'
import js_icon from '../../assets/images/javascript.png'
import python_icon from '../../assets/images/python.png'
import ts_icon from '../../assets/images/typescript.png'

import Icon from './Icon'

const stacks = [
    {
        id: 1,
        title: "JavaScript",
        icon: js_icon,
        
    },
    {
        id: 2,
        title: "React",
        icon: react_icon
    },
    {
        id: 3,
        title: "Redux",
        icon: redux_icon,
    },
    {
        id: 4,
        title: "TailwindCSS",
        icon: tailwind_icon,
    },
    
    {
        id: 5,
        title: "Python",
        icon: python_icon,
    },
    {
        id: 6,
        title: "TypeScript",
        icon: ts_icon,
    },
    /*{
        id: 6,
        title: "Docker",
        icon: docker_icon,
    },*/
    /*{
        id: 7,
        title: "Java",
        icon: java_icon,
    },*/
    /*{
        id: 8,
        title: "GraphQL",
        icon: GraphQL_icon,
    },*/
    
]

export default function Stacks () {
    return (
        <StyledStacks>
            {stacks.map((s)=>{
                return (
                    <Icon
                        key={s.id}
                        title={s.title}
                        icon={s.icon}
                    />
                )
            })}
        </StyledStacks>
    )
}

const StyledStacks = tw.div`
    relative
    flex
    mx-20
    mobile:mx-12
    min-w-[280px] w-full max-w-[1280px]
    backdrop-blur-sm
    rounded-lg
    grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-12 justify-items-center items-stretch
`
/**
 * End of Stacks Component
 */