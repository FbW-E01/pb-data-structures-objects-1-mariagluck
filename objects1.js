// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object. 

const person = {
    firstName: "Maria",
    lastName: "Martinez Santos",
    job: "student",
    school: "DCI",
}

const keys = Object.keys(person);
console.log(person);
// it prints:
// {
//     firstName: 'Maria',
//     lastName: 'Martinez Santos',
//     job: 'student',
//     school: 'DCI'
//   }


// **2. Get Values.** 
// Create a function that returns an array of all **values** of an object's properties. 
// * Examples:
// ```javascript
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// ```
// * Expected output: 
// ```javascript
// ["tea", "coffee", "milk"] 
// ```

const breakTimeDrink = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}

function getObjectValues() {
    const values = Object.values(breakTimeDrink);//returns an array of values
    console.log(values);
};

getObjectValues();//it prints : [ 'tea', 'coffee', 'milk' ]



// **3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string. 

const person2 = {
      firstName: "Robert",
      lastName: "Smith", 
      job: "singer",
      band: "The Cure",
      age: 100, 
      city: "London",
      description: function() {console.log(`${this.firstName} ${this.lastName} is the ${this.age} years old ${this.job} of ${this.band} in ${this.city}. `)}
    }

person2.description();//it prints "Robert Smith is the 100 years old singer of The Cure in London. "

// ## Bonus Questions

// **1. Convert keys and values into an array.** 
// Create a function that converts an object into an array of keys and values. 

const rainForestAnimals = {
    animal1: "Monkeys",
    animal2: "Snakes",
    animal3: "Crocodriles",
    animal4: "Panther",
}
const animals = Object.entries(rainForestAnimals ); //returns an array of the key-value pairs
console.log(animals); 
//it prints [
//     [ 'animal1', 'Monkeys' ],
//     [ 'animal2', 'Snakes' ],
//     [ 'animal3', 'Crocodriles' ],
//     [ 'animal4', 'Panther' ]
//   ]



// **2. List Properties.**
// Create a function that returns an array of **properties** of a javascript object. 
// * Example
// ```javascript
// let student = {
//   name: "Mike", 
//   class: "4A" 
//   course: "English"
// }
// ```
// * Expected output: 
// ```javascript
// ["name", "class", "course"]
// ```

let student = {
      name: "Mike", 
      class: "4A", 
      course: "English"
    }

    const properties = Object.keys(student);
    console.log(properties); //prints: [ 'name', 'class', 'course' ]

// **3. Merge.**
// Create a function that takes two objects as its parameters and merges them together into a new object. 
// * Example
// ```javascript
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// ```
// * Expected output:
// ```javascript
// {firstName: "John", lastName: "Smith"}


let first = {firstName: "John"};
let last = {lastName: "Smith"};

const mergedFirstLast = Object.assign(first, last);

console.log(first);//it prints : { firstName: 'John', lastName: 'Smith' }
console.log(mergedFirstLast); //it also prints : { firstName: 'John', lastName: 'Smith' }


// ```
// **Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

// ANSWER: if both objects has same key, it simply merge the last objects value and have only one key value. If the have the same key and value it simply prints it once. example follows:
const AA = { a: 1, b: 2 };
const BB = { a: 1, b: 5 };

const mergedAABB = Object.assign(AA, BB);

console.log(AA);
console.log(BB);
// both print: { a: 1, b: 5 }

console.log(mergedAABB);
// { a: 1, b: 5 }



// **4. Switch Keys and Values.**
// Create a function to get a copy of an object. The copy must switch the keys and values.

let person3 = {
      name: "John", 
      job: "teacher"
    }


    let newObj = {};
    Object.keys(person3).forEach( (key) => {
    newObj[person3[key]] = key;
    }) 
    
    console.log(newObj);// this is one way: prints { John: 'name', teacher: 'job' }
    
    
    function invert(person3) {
        const newObj2 = {};
      
        for (const keyName in person3) {
          if (person3.hasOwnProperty(keyName)) {
            newObj2[person3[keyName]] = keyName;
          }
        }
      
        return newObj2;
      }
    
console.log(invert(person3));// this is another way: prints { John: 'name', teacher: 'job' }


// **5. Return Keys and Values.**
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// * Examples:
// ```javascript
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
// ```

const fruits = {
    fruit1: "orange",
    fruit2: "banana",
    fruit3: "melon",
}


function fruitsArrays(object1, object2) {
    const fruit = Object.keys(fruits);
    const Fruit = Object.values(fruits);
    console.log(fruit, ",", Fruit);
}

fruitsArrays(); 
//it prints: [ 'fruit1', 'fruit2', 'fruit3' ] , [ 'orange', 'banana', 'melon' ]
