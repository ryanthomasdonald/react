// // ghost in the machine
// const add = () => {
//     let x = 1
//     let y = 2

//     const sum = () => {
//         setTimeout(() => {
//             console.log(x + y)
//         }, 5000)
//     }
//     sum()
//     console.log("Sum function has completed.")
//     return
// }

// add()

let $ = (() => {
    const pi = 3.14
    const val = 567

    function add(x){
        return x + val
    }

    function multPi(mul){
        return pi * mul
    }

    let jQuery = {
        pi: multPi,
        add: add
    }

    return jQuery
})()

let result = $.add(45)
console.log(result)