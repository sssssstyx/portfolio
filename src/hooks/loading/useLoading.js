/**
 * @Description custom useLoading Hook
 * @author Shy
 * @date 2022/11/10
 */

import React, { useEffect, useState } from 'react'

export const useLoading = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(()=> setIsLoading(false), 3000)
        
        return ()=> clearTimeout(timer)
    }, [])
    return isLoading
}