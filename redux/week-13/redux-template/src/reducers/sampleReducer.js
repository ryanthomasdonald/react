import {INCREMENT} from "../actions/types"

const initialState = {
    count: 0
}

const sampleReducer = (state=initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.data    // referencing templateActions.js
            }
        default:
            return state
    }
}

export default sampleReducer