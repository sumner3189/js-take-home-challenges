//Day 2
// const currentDate = new Date();
// const getCurrentDay = currentDate.getDay();
// switch (getCurrentDay) {
//   case 0:
//     console.log("sunday");
//     break;
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   default:
//     console.log("thats a incorrect number");
//     break;
// }

//Day3
// const colorOne = prompt("First Fav Color");
// const colorTwo = prompt("second fav color");

// const result = colorOne === 'blue'&& colorTwo==="grey"?"You chose my fav color": "try again"
// console.log("🚀 ~ file: script.js ~ line 37 ~ result", result)

// const birthday = new Date("August 29, 1975 23:15:30");
// const dayOfweek = birthday.getDay()
// console.log("🚀 ~ file: script.js ~ line 41 ~ dayOfweek", dayOfweek)
// switch (dayOfweek) {
//   case 0:
//     console.log("sunday");
//     break;
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   default:
//     console.log("thats a incorrect number");
//     break;
// }

//day 4
// if(condition){

//   //do something
// }else{
//   //do something else
// }
// function password(str){
//   return "this is a return" + str
// }
// const password = (str) =>{

//   const lengthOfPassword = str.length
//   const onlyLetters = /^[a-zA-Z]+$/;
//   const firstLetterOfString = str.charAt(0)
//   console.log(firstLetterOfString)
//   if(lengthOfPassword>=6 && lengthOfPassword<=20){
//     //do something
//         if (onlyLetters.test(firstLetterOfString)) {
//           alert("this is a valid password")

//         } else {
//   alert("The first character of the password needs to be a letter")
//         }
//   }else{
// alert("this is an invalid password because it needs to be greater than 6 or less than 20")
//   }

// }
// greater than or equal to 6 AND less than or equal 20
//must contain 6 -20 length of string
//must contain letter as first character in the password
// alert the user of password validation

// password("fadsjkfdsa;ljk")
// const password => ("password") ("password,5 to 10 character")'? password accected': 'incorrect password';
// result('password')
// console.log("🚀 ~ file: script.js ~ line 73 ~ result('password')", result('password'))

// Bonus:
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// const math = (operation, value1, value2) => {

//   if ( "+" === operation) {
//     return value1 + value2
//   }
//   esle if "-" === operation {
//     return value1 - value2
//   }
//   esle if( "*" === operation ){
//     return value1 * value2
//   }
//   esle if ("/" === operation)
//   return value1 / value2

//   console.log("🚀 ~ file: script.js ~ line 132 ~ math ~ return value1 / value2", return value1 / value2)

// console.log("🚀 ~ file: script.js ~ line 136 ~ math ~ math", math)
// console.log("🚀 ~ file: script.js ~ line 136 ~ math ~ math", math)
// console.log("🚀 ~ file: script.js ~ line 136 ~ math ~ math", math)

//Read the Pokemon API
// Create an async function that:
// Makes a request to the Pokemon API using fetch. Fetch a specific Pokemon other than Ditto
// Stores this request into a variable
// Makes sure we use .json()
// Display the name of the Pokemon that you chose in an alert
// Watch these videos to go over some of the concepts that we learned today:
// Promises
// Async/Await
// Fetch API
// JSON

// async function getPokemon(){
//   const getData = await fetch ("https://pokeapi.co/api/v2/pokemon/tangrowth")
//   const myPokemon = await getData.json()
//   alert(myPokemon.name)
// }
// getPokemon()

// const functio1n = () => {
//   //do something
// };

// const printWord = (word)=>{

//   console.log(word)
// }

// printWord("Hellow world")
// printWord("Somethingthing")

// const printWelcomeFirstNameLastName = (firstName,lastName) => {
//   console.log(`Welcome, ${firstName} ${lastName}`);
// };
// printWelcomeFirstNameLastName("Doni", "Summers");

// "welcome, doni last name"

// if(condition){
// //do something
// }else{
//   //do something else
// }

// const firstAndlastName = (FirstName,LastName) =>{
//   if(FirstName==="don"   LastName== "user"){console.log(`Welcome, ${FirstName} ${LastName}`)}
//   else{console.log("invalid user")}
//   }
// firstAndlastName("vic", "sauceda")

// const pathdirection = (direction) =>{
//   If(direction==="Forward"){console.log("keep in this path")}
//   else{console.log("your going the wrong way")}
// }

// Building on your day 5 take home challenge:
// Use javascript to create and append the following to your HTML:
// Create a button with text that says: Click me to see me
// Now add the following functionality:
// If you haven't already, create a function that will make the API request
// Add an event listener to your button
// When your button is clicked, it should make the API request and append the pokemon name to the DOM using an h1. It should also render an image using Picsum. You will have to create a new html element and append it to the DOM

async function getPokemon() {
  const getData = await fetch("https://pokeapi.co/api/v2/pokemon/tangrowth");
  const myPokemon = await getData.json();
  alert(myPokemon.name);
  const Pokemon = document.createElement("h1");
  Pokemon.innerHTML = myPokemon.name;
  const image = document.createElement("img");
  image.src = "https://picsum.photos/id/1020/600/400";
  document.body.appendChild(Pokemon);
  document.body.appendChild(image);
}
// getPokemon();

const para = document.createElement("button");
para.innerHTML = `click me`;
document.body.appendChild(para);
// document.getElementByTagName("button").addEventListener("click", getPokemon());
document.getElementById("test").addEventListener("click", () => getPokemon());
