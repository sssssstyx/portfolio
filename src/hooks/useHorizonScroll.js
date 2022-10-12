/**
 * @Description useHorizonScroll Component
 * @author Shy
 * @date 2022/9/22
 */

import { useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import { useDebounce } from './index'

// using a custom hook to control the page to scroll horizontally
export const useHorizonScroll = (propsRef) => {
    /* basic function for scrolling horizontally */
    const scrollHandler = (e) => {
        e.preventDefault()
        propsRef.current.scrollBy({
            left: e.deltaY < 0 ? -350 : 350,
            behavior: 'smooth'
        })
    }
    
    /* adding useDebounce to avoid too much re-rendering */
    const scrollWithDebounce = useDebounce((e) => scrollHandler(e), 200)
    
    /* event listener to "wheel" event */
    useEffect(() => {
        if (isMobile || window.innerWidth < 769) {
            return
        }
        window.addEventListener("wheel", scrollWithDebounce, {
            // default true
            passive: false,
        })
        return () => window.removeEventListener("wheel", scrollWithDebounce, {
            // default true
            passive: false,
        })
    }, [propsRef, scrollWithDebounce])
}