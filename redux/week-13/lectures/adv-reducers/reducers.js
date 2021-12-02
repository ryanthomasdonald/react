// let state = {
//     house: {
//         name: "Ravenclaw",
//         points: 17
//     }
// }

// let newState = {
//     ...state,
//     house: {
//         ...state.house,
//         points: state.house.points + 5
//     }
// }

// --------------------------

// let state = {
//     school: {
//         name: "Hogwarts",
//         house: {
//             name: "Ravenclaw",
//             points: 17
//         }
//     }
// }

// let newState = {
//     ...state,
//     school: {
//         ...state.school,
//         house: {
//             ...state.school.house,
//             points: state.school.house.points + 2
//         }
//     }
// }

// --------------------------------

// const keyName = "ravenclaw"

// const state = {
//     houses: {
//         gryffindor: {
//             points: 15
//         },
//         ravenclaw: {
//             points: 18
//         },
//         hufflepuff: {
//             points: 7
//         },
//         slytherin: {
//             points: 5
//         }
//     }
// }

// let newState = {
//     ...state,
//     houses: {
//         ...state.houses,
//         [keyName]: {
//             ...state.houses[keyName],
//             points: state.houses[keyName].points + 3
//         } 
//     }
// }

// ------------------------

// let state = [1, 2, 3]

// let newItem = 9
// let newState = [newItem, ...state, ...state, newItem + 7]

// ---------------------------

// let state = [1, 2, 3]

// let newItem = 4

// // let newState = state.concat(newItem)

// let newState = [...state, newItem]

// ------------------------------

// let state = [1, 2, "X", 4]

// let newState = state.map(item => {
//     if(item === "X"){
//         return 3
//     }
//     return item
// })

// -------------------------------

// let state = [
//     {
//         id: 1,
//         email: 'jen@reynholmindustries.com'
//     },
//     {
//         id: 2,
//         email: 'peter@initech.com'
//     }
// ]

// let action = {
//     type: "CHANGE",
//     data: {
//         id: 2,
//         email: "peter@construction.com"
//     }
// }
// let newState = state.map(item => {
//     if(item.id === action.data.id){
//         return {
//             ...item,
//             email: action.data.email
//         }

//     }
//     return item
// })

// --------------------------

// let state = [1, 2, 3, 5, 6]

// let newItem = 4

// let newState = state.slice()

// newState.splice(3, 0, newItem)

// -------------------------------

// let state = [1, 2, 3, 5, 6]

// let newItem = 4

// let newState = [...state.slice(0, 3), newItem, ...state.slice(3)]

// ---------------------------------

// let state = [1, 2, "X", 4]

// let newState = state.map((item, index) => {
//     if(index === 2){
//         return 3
//     }
//     return item
// })

// --------------------------------

let state = [1, 2, "X", 4]

let newState = state.filter(item => {
    if(item === "X"){
        return false
    }
    return true
})

console.log(state)
console.log(newState)