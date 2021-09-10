var nameVar = "gavin"
console.log('namevar = '+nameVar)

let nameLet = "Finley"
console.log('nameLet='+nameLet)


const nameConst = "Connor"
console.log('nameConst='+nameConst)



function getPetName(){
    let petName= "Hal"
    return petName
}

console.log(getPetName())



//block scoping


var fullName = "Gavin Newton";
let firstName;
if (fullName){

     firstName = fullName.split(' ')
    console.log(firstName[0])
    console.log(firstName[1])
}

console.log(firstName)
