import {INCREMENT} from "./types"

export const sampleAction = (sampleData) => {
    return {
        type: INCREMENT,
        data: sampleData
    }
}