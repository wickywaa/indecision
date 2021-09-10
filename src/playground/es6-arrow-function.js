const square = function(x){
    return x*x
};


console.log(square(5))


const squareArrow = (x)=>{
    return x *x 

}

console.log(squareArrow(5))

const squareArrow1 =(x)=>  x*x

console.log(squareArrow1(6))



const fullName = "Gavin Newton"

const getFirstName = (name)=>{
    return name.split(' ')[0]
}

const getFirstname2 = (name)=>name.split(' ')[0]



console.log(getFirstName(fullName))
console.log(getFirstname2(fullName))



//arguments object no longer bound with arrow functions

// this keyword no longer bound with arrow functions

const add = (a,b)=>{
    
    return a+b
}


console.log(add(50,5,1,4,5,5))



const user ={
    name:"Gav",
    cities:['Leicester','Perth','Berlin'],
    printPlacesLived(){
        
        return  this.cities.map((city)=>this.name + ' has lived in ' + city)

    }
    }
        // this.cities.forEach((city)=>{
        //     console.log(this.name+ ' has lived in '+city)
        // });
        
    



console.log(user.printPlacesLived())


const multiplier = {
    numbers: [1,2,3,4,5,6,7],
    mutiplyBy: 3,
    multiply(){
        return this.numbers.map((number)=> this.mutiplyBy * number)
    }
}

console.log(multiplier.multiply())