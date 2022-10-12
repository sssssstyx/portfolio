/**
 * @Description NameCubes Component
 * @author Shy
 * @date 2022/9/25
 */

import React from 'react'
import Spline from '@splinetool/react-spline'

const NameCubes = () => {
    return (
        <div>
            <div className="absolute -top-10 -left-20 md:top-0 md:left-6 lg:left-6 scale-[0.85] scale-[0.6] md:scale-90 lg:scale-125 xl:scale-150 hsm:scale-90 -rotate-[30deg]">
                <Spline scene="https://prod.spline.design/w-Szef4PquzPhaEj/scene.splinecode" />
            </div>
            <div className="absolute top-0 -right-16 md:-top-6 md:right-6 lg:-top-12 lg:right-36 scale-[0.6] md:scale-90 lg:scale-125 xl:scale-150 hsm:scale-90 rotate-45 lg:rotate-[50deg]">
                <Spline scene="https://prod.spline.design/kft8aJWWcGn5tkFp/scene.splinecode" />
            </div>
            <div className="absolute bottom-5 -right-12 md:right-0 hsm:-bottom-8 lg:bottom-16 lg:right-16 xl:right-3 scale-[0.6] md:scale-90 lg:scale-125 hsm:scale-90 xl:scale-150 -rotate-[15deg]">
                <Spline scene="https://prod.spline.design/LZkTasidQmVj6e3l/scene.splinecode" />
            </div>
        </div>
    )
}

export default NameCubes