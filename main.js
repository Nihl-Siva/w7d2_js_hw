//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFoods(person) {
    for (let i in Object.keys(person)){
        if (typeof(Object.values(person)[i]) === 'string'){
            console.log(`${Object.keys(person)[i]}: ${Object.values(person)[i]}`)
        } else if (Array.isArray(Object.values(person)[i])){
            for (let j in Object.values(person)[i]){
                if (typeof(Object.values(person)[i][j]) === 'string'){
                        console.log(`${Object.keys(person)[i]}: ${Object.values(person)[i][j]}`)
                } else {
                    for (let k in Object.keys(Object.values(person)[i][j])){
                        console.log(`${Object.keys(person)[i]}: ${Object.keys(Object.values(person)[i][j])[k]} - ${Object.values(Object.values(person)[i][j])[k]}`)
                    }
                }
            }
        }
    }
}
favoriteFoods(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`Name: ${this.name}\nAge: ${this.age}`)
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    this.addAge = ageAdded => {
        this.age = age += ageAdded
    }
}

let person1 = new Person('Rafi', 40)
person1.printInfo()

let person2 = new Person('Ruxin', 38)
person2.printInfo()

person1.addAge(1)
person1.printInfo()
person1.addAge(1)
person1.printInfo()
person1.addAge(1)
person1.printInfo()



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const overTen = string =>{
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve(string)
        }else{
            reject(string)
        }
    })
    .then((result) => {
        console.log(`Big word`)
    })
    .catch((error) => {
        console.log(`Small Number`)
    })
}

overTen('Hello World!')
overTen('Oh, hi!')