import {combineReducers} from "redux"
import builderReducer from "./builderReducer"
// import cartReducer from "./cartReducer"

const rootReducer = combineReducers({
    builderReducer: builderReducer,
    // cartReducer: cartReducer,
})

export default rootReducer