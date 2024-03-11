"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayNames = exports.addName = exports.loopDogs = exports.addDog = exports.testFunction = void 0;
const testFunction = () => {
    console.log("First Hello from Typescript update3");
};
exports.testFunction = testFunction;
(0, exports.testFunction)();
// variable with any
// var parent:any
// parent = 'abc'
// parent = 7
var x = 10;
var y = "test";
var z = false;
let k = "mystring";
// example of function
function add(x, y) {
    return x + y;
}
let sum = add(3, 4);
// type assertions
x = k.length;
// array
let stringArray = [];
let myArray = new Array(10);
stringArray.push("Jake");
myArray.push("Jose Guzman");
// enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 333] = "Up";
    Direction[Direction["Down"] = 334] = "Down";
    Direction[Direction["Left"] = 335] = "Left";
    Direction[Direction["Right"] = 336] = "Right";
})(Direction || (Direction = {}));
class Dog {
    constructor(name, breed) {
        this.eat = (food) => {
            // console.log(this.name + " of breed " + this.breed + " is eating " + food);
            console.log(`${this.name} of breed ${this.breed} is eating ${food}`);
        };
        this.name = name;
        this.breed = breed;
    }
}
// export const exampleIf = () => {
//     var cond = true
//     // if(cond === true) {
//     // }
//     if(cond) {
//     } else if(cond === '') {
//     }
// }
// export const exampleCase = (value: string) => {
//   switch (value) {
//     case "firstCase":
//       break;
//     case "secondCase":
//       break;
//     default:
//   }
// };
const dog = new Dog("Buddy", "Labrador");
// dog.eat("kibble");
const dog2 = {
    name: "Scooby Doo",
    breed: "Great Dane",
};
const dog3 = new Dog("Snoopy", "Beagle");
let dogArray = [];
const addDog = (data) => {
    dogArray.push(data);
};
exports.addDog = addDog;
(0, exports.addDog)({
    name: "Barney",
    breed: "Sheepdog",
});
dogArray.push(dog);
dogArray.push(dog3);
const loopDogs = () => {
    // for loop
    //   for (let i = 0; i < dogArray.length; i++) {
    //     console.log(dogArray[i]);
    //   }
    // for (shorthand)
    //   for (let data of dogArray) {
    //     console.log(data);
    //   }
    // for (index)
    //   for (let data in dogArray) {
    //     console.log(`${data}`, dogArray[data]);
    //   }
    // while
    //   let i = 0;
    //   console.log("while");
    //   while (i < dogArray.length) {
    //     console.log(dogArray[i]);
    //     i++;
    //   }
    //   // forEach
    //   console.log("forEach");
    //   dogArray.forEach((data: DogInterface) => {
    //     console.log(data);
    //   });
    // map
    //   dogArray = dogArray.map((data: DogInterface) => {
    //     data.breed = "morph";
    //     return data;
    //   });
};
exports.loopDogs = loopDogs;
// loopDogs();
// tuple
// var tuple:(number|string)[] = ['myString', 700, 'anotherString']
var names = [];
const addName = (data) => {
    names.push(data);
    (0, exports.displayNames)();
};
exports.addName = addName;
const displayNames = () => {
    let list = document.getElementById("myList");
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    names.forEach((element) => {
        let li = document.createElement("li");
        li.innerText = element;
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.displayNames = displayNames;
