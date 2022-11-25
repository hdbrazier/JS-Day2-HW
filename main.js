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

function fav_foods(person3){
    for(let[key, value] of Object.entries(person3)){
        console.log(key, value)
    }
}

console.log(fav_foods(person3))


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
class Person {
    constructor (name, age) {
    this.name = name;
    this.age  = age;

    this.addAge = function addAge() {
        this.age++;
    };

    this.addAge3 = function addAge() {
        this.age = age + 3
    }

    this.printInfo = function printInfo() {
        console.log(this.name + " is " + this.age + " years old");
    };
}}

let helen = new Person('Helen', 34);
let joe = new Person('Joe', 37)
helen.printInfo();
helen.addAge();
helen.printInfo();
joe.printInfo();
joe.addAge3();
joe.printInfo();





// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkLength(str) {
    return new Promise( (resolve) => {
            if (str.length > 10)
                console.log("Big word");
            else (str.length < 10)
                console.log("Small Number");
            resolve();
        }
    )
}

checkLength('Bye')
checkLength('Checkmate')
checkLength('Scrumpciously')