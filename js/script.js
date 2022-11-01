
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

const birthday = new Date("August 29, 1975 23:15:30"); 
const dayOfweek = birthday.getDay()
console.log("🚀 ~ file: script.js ~ line 41 ~ dayOfweek", dayOfweek)
switch (dayOfweek) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  default:
    console.log("thats a incorrect number");
    break;
}