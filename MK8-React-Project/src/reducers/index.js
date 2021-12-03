import {combineReducers} from "redux"
import sampleReducer from "./sampleReducer"

// access using state.templateReducer.count
const rootReducer = combineReducers({
    templateReducer: sampleReducer
})

export default rootReducer