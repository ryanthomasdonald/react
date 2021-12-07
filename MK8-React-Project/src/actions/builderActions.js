import {UPDATE_DRIVER} from "./types"
import {UPDATE_KART} from "./types"
import {UPDATE_TIRE} from "./types"
import {UPDATE_GLIDER} from "./types"
import {LOAD_INIT} from "./types"
// import {LOAD_MKDATA} from "./types"
import MKData from "../assets/MK8-data.js"

// export const loadMKData = () => {
//     return {
//         type: LOAD_MKDATA,
//         MKData: MKData
//     }
// }

export const loadInit = () => {
    return {
        type: LOAD_INIT,
        initState: {
            driver: MKData[40],
            kart: MKData[0],
            tire: MKData[83],
            glider: MKData[104],
            combo: []
        }
    }
}

export const updateDriver = (driverID) => {
    return {
        type: UPDATE_DRIVER,
        driverID: driverID
    }
}

export const updateKart = (kartID) => {
    return {
        type: UPDATE_KART,
        kartID: kartID
    }
}

export const updateTire = (tireID) => {
    return {
        type: UPDATE_TIRE,
        tireID: tireID
    }
}

export const updateGlider = (gliderID) => {
    return {
        type: UPDATE_GLIDER,
        gliderID: gliderID
    }
}