import {combineReducers} from "redux"
import builderReducer from "./builderReducer"

// access using state.templateReducer.count
const rootReducer = combineReducers({
    builderReducer: builderReducer
})

export default rootReducer