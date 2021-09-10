class Person {

    constructor(name = 'Anonymous',age =0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return ` Hi I am ${this.name}`
    }
    getDescription(){
        return ` ${this.name} is ${this.age} year(s) old. `
    }

}


class Student extends Person{
    constructor(name='Anonymous',age=0,major){
        super(name,age);
        this.major= major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description +=  ` Their major is  ${this.major}`
        }
        return description
    }
    
}

class Traveller extends Person{

    constructor(name ='Anonymous',age=0,homeLocation){
        super(name,age)
        this.homeLocation=homeLocation
    }
   
    getGreeting(){
        let greeting = super.getGreeting();
        if (this.homeLocation){
            greeting += ` I am visiting from ${this.homeLocation}`
        }
        return greeting

    }


}

// const me = new Student('Gavin Newton',33,'Computer Science');


// console.log(me.getDescription())

// const other = new Student();
// console.log(other.getDescription())

const me = new Traveller('Gavin Newton',33,'Leicester');

console.log(me.getGreeting());


const other = new Traveller();
console.log(other.getGreeting());