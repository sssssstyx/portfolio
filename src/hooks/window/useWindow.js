/**
 * @Description useWindow Component
 * @author Shy
 * @date 2022/11/10
 */

import React, { useEffect, useState } from 'react'
import { useDebounce } from '../debounce/useDebounce'

export const useWindow = () => {
    // const {screenWidth} = useWindowSize()
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)   // Get screen width
    const [screenHeight, setScreenHeight] = useState(window.innerHeight)   // Get screen width
    
    // use debounce at this frequently rendering event listener
    const debounceSetScreen = useDebounce(() => {
        setScreenWidth(window.innerWidth)
        setScreenHeight(window.innerHeight)
    }, 75)
    
    // listening resize of window width
    useEffect(() => {
        window.addEventListener("resize", debounceSetScreen)
        return () => window.removeEventListener("resize", debounceSetScreen)
    }, [window, debounceSetScreen])
    
    return {screenWidth, screenHeight}
}