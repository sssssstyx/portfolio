/**
 * @Description InitScreen Component
 * @author Shy
 * @date 10.11.2022
 */

import React from 'react'
import styled from 'styled-components'

export default function InitScreen () {
    return (<div
            className="flex relative h-screen w-screen justify-center items-center bg-dim overflow-hidden cursor-default">
            <div className="flex z-10">
                <StyledBall
                    className=" min-h-full min-w-full rounded-full bg-ventura animate-load z-10 justify-center items-center"/>
            </div>
            <div className="z-20 group absolute flex flex-row animate-rightforward text-center text-3xl md:text-4xl lg:text-5xl font-caveat tracking-normal md:tracking-wider lg:tracking-widest">
                <div className="group-hover:animate-jump1">L</div>
                <div className="group-hover:animate-jump2">o</div>
                <div className="group-hover:animate-jump1">a</div>
                <div className="group-hover:animate-jump2">d</div>
                <div className="group-hover:animate-jump1">i</div>
                <div className="group-hover:animate-jump2">n</div>
                <div className="group-hover:animate-jump1">g</div>
                <div className="group-hover:animate-jump2">.</div>
                <div className="group-hover:animate-jump1">.</div>
                <div className="group-hover:animate-jump2">.</div>
            </div>
        </div>
    
    )
}
const StyledBall = styled.div`
    width: max(100vw, 100vh);
    height: max(100vw, 100vh);
`
/**
 * End of InitScreen Component
 */