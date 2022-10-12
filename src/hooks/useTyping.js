/**
 * @Description useTyping Component
 * @author Shy
 * @date 2022/9/24
 */

import { useCallback, useEffect, useReducer, useRef } from 'react'
import typeReducer from '../stores/reducers/typeReducer'
import {
    TYPE_SPEED,
    DELETE_SPEED,
    WAIT_DURATION,
    DISPLAY_DURATION,
    TYPE,
    DELETE,
    WAIT_TO_TYPE,
    WAIT_TO_DELETE
} from '../stores/contants/constants'

// initial words to type
const sentences = [
    "Web Developer",
    "Front-end",
    "Full Stack"
]

// custom hook for typing words animation
export const useTyping = (words = sentences) => {
    /* States needed to be managed
     * whether is typing, set as false when rendering.
     * current sentence to store the state of words...
     * speed sets the delay time in milliseconds......
     **/
    const initState = {
        isTyping: false,
        currSentence:words[0],
        speed: WAIT_DURATION
    }
    
    // invoke the useReducer to manage complicated states
    const [{isTyping, currSentence, speed}, dispatch] = useReducer(typeReducer, initState)
    
    // ref for loop number, used to show the next sentence in array
    const loopNum = useRef(0)
    
    // handler for typing animation as a callback function
    const handler = useCallback(()=>{
        /* loop count number like 1000 mod(_sentence array's size) is the certain index */
        const index = loopNum.current  % words.length
        const fullText = words[index]   /* set a variable to store the entire current sentence */
        
        /* If is typing then add letters, if not then slice letters,
         * this will be handled every time according to the time duration.
         * */
        let updateText = isTyping ?
                            fullText.substring(0, currSentence.length + 1)
                                :
                            fullText.substring(0, currSentence.length - 1)
        
        /* There are 4 steps:
         * 1. First render the whole sentence, wait for a while, deleting the letters, for a quite quick speed...
         * 2. When finishing deleting, just wait for a while, and reload next sentence...
         * 3. After reloading, just typing the letters...
         * 4. Finishing typing the entire sentence, just wait for a while to delete...
         * */
        /* when is deleting */
        if(!isTyping) {
            /* dispatch DELETE: update new text in every DELETE_SPEED millisecond */
            dispatch({type:DELETE, payload:updateText, speed: DELETE_SPEED})
            if(updateText === '') {
                /* next turn loop for next given sentence*/
                loopNum.current += 1
                /* wait for a while, time define within the reducer */
                dispatch({type:WAIT_TO_TYPE, speed: WAIT_DURATION})
            }
        }
        /* when is typing */
        else {
            /* dispatch TYPE: update new text in every TYPE_SPEED millisecond */
            dispatch({type:TYPE, payload:updateText, speed: TYPE_SPEED})
            /* no need to give next sentence immediately here */
            if(updateText === fullText) dispatch({type:WAIT_TO_DELETE, speed:DISPLAY_DURATION})
        }
    },[currSentence, isTyping, words])
    
    /* using for time managing */
    useEffect(()=>{
        const typing = setInterval(handler, speed)

        return () => clearInterval(typing)
    }, [handler, speed])
    
    return currSentence
}
