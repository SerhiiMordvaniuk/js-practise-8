"use strict"
// _.sum([2, 5])
//  console.log(_.sum([2, 5]));
 

//  const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
// };

// const lalala = JSON.stringify(dog)

// console.log(lalala);


// const jjss = lalala.pa


// const tututu = JSON.stringify(32);
// console.log(tututu);
// console.log(32);

// const lololo = {
//   name: "Mango",
//   age: 3,
//     isGoodBoy: true,
//     do: undefined,

//     user: "User",
    
//   bark() {
//     console.log("Woof!");
//   },
// };


// const ljjbojb = JSON.stringify(lololo)
// console.log(ljjbojb);



// try {
//     const sss = JSON.parse("Hello")
// }
// catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }
 

// let student = {
//   name: 'Іван',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//     spouse: null
//   toJ
// };

// let students = JSON.stringify(student);

// console.log(students);


// let user = {
//   name: "Іван Іванов",
//   age: 35
// };

// let userJson = JSON.stringify(user)
// console.log(userJson);

// let newUser = JSON.parse(userJson)
// console.log(newUser);



// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Конференція",
//   occupiedBy: [{name: "Іван"}, {name: "Аліса"}],
//   place: room
// };

// // циклічне посилання
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert( JSON.stringify(meetup, function replacer(key, value) {
//   /* ваш код */
// }));

const form = document.querySelector(".feedback-form");
let input = document.querySelector(".txtarea")

input.value = localStorage.getItem("key")

form.addEventListener("input", event => {
    localStorage.setItem("key", event.target.value)
})

form.addEventListener("submit", event => {
    event.preventDefault()
    console.log(event.target.elements.message.value);
    localStorage.removeItem("key")
    form.reset()
})
