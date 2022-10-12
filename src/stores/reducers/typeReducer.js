import { DELETE, WAIT_TO_DELETE, WAIT_TO_TYPE, TYPE } from '../contants/constants'

export default function typeReducer  (state, action) {
    switch (action.type) {
        case DELETE:
            return {
                isTyping: false,
                speed: action.speed,
                currSentence: action.payload
            }
        case TYPE:
            return {
                isTyping: true,
                speed: action.speed,
                currSentence: action.payload
            }
        case WAIT_TO_TYPE:
            return {
                isTyping: true,
                speed: action.speed,
                currSentence: state.currSentence
            }
        case WAIT_TO_DELETE:
            return {
                isTyping: false,
                speed: action.speed,
                currSentence: state.currSentence
            }
        default:
            return state
    }
}

/**
 * @Description typeReducer
 * @author Shy
 * @date 24.09.2022
*/