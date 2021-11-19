// let age = 16;

// if(age < 18){
//     console.log("Too young.")
// }
// else{
//     console.log("Old enough.")
// }

// // Same as above
// let legalVoter = (age < 18) ? "Too young." : "Old enough."

// console.log(legalVoter)

// let arrA = [1, 2, 3, 4, 5];
// let arrC = [8, 9, 10]
// // let arrB = arrA;            // pass by reference
// // let arrB = [...arrA]        // pass by value

// // arrB.push(99);

// // console.log(arrA, arrB);

// let result = [...arrA, 6, 7, ...arrC]

// console.log(result)

// const student = {
//     ID: '21',
//     name: 'John',
//     GPA: '3.0',
// };

// // const id = student.ID;
// // const name = student.name;

// const {ID, name:n, GPA} = student;

// console.log(ID, n, GPA)

// let arrA = [56, 7, 2, 98, 5];

// let [val1, val2] = arrA

// console.log(val1, val2)

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let filterNum = arr.filter(el => {
//     return el !== 4
// })

// console.log(filterNum)

// let newArr = arr.map(el => el * 2);  // implicit return

// console.log(newArr)

class Car {                // class construct
    constructor(name) {     // constructor (special method)
        this.name = name;  // instance variable
        // console.log(`Created ${name}.`)
    };
    printCarName() {
        console.log(`Created ${this.name}.`);
    };
};

class Hybrid extends Car {
    constructor(gasMileage, name) {
        super(name)                     // calling base/parent class constructor
        this.gasMileage = gasMileage;
    };

    printCarDetails() {
        console.log(`Created a ${this.name} with an MPG of ${this.gasMileage}.`)
    }
};

let prius = new Hybrid(40, "Prius")
let turtle = new Hybrid(50, "Turtle")
prius.printCarDetails()
turtle.printCarDetails()

// let car = new Car("Prius");
// car.printCarName();