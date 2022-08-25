import { SAVE_COMMENT } from "actions/types"

function a(state=[], action) {
    switch(action.type) {
        case SAVE_COMMENT: 
            return [...state, action.payload]
        default: return state
    }
}

export default a