/**
 * @Description useDebounce Component
 * @author Shy
 * @date 2022/9/24
 */

/* Execute the callback after the event has been triggered for n seconds,
 * and if it is invoked again within those n seconds, re-time it
 * */

export const useDebounce = (func, milliseconds) => {
    const time = milliseconds || 300
    let timer
    
    return (event) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(func, time, event)
    }
}