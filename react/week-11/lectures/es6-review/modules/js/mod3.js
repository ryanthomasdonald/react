class Person{
    constructor(fName, lName){
        this.fName = fName;
        this.lName = lName
    }

    printName(){
        console.log(this.fName, this.lName)
    }
}

export default Person;