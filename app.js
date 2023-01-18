//   //es-6 stands for ECMA Script Launch In 2016

//   //===== var,let,const =====


//  // ====var====
//  // var is "redeclarable"(y) and RE-Assignable
//  // block Scop(n)
//  // Hoist hojata hai

//  //====let====
//  // let is "NON-redeclarable"(y) RE-Assignable
//  // block Scop(y)

//   //====const====
//  // const is "NON-redeclarable"(y) and non-Reassignable
//  // block Scop(y)


//  //code in curly bracket and depend on another code is Scop opening and Closing
//  //types of scopes 2
//  // 1 Local
// // 2 global


// //var used to create variable
// //function used to create function

// if(true) {
//   var a = "ABC";
// }
// console.log(a);

//   var a = "ABC";
//   var a = 123;
//   console.log(a);

// abc();
// function abc() {
//   console.log("ABC");
// }
// /// CONSOLE CHAL JAYE GA..

// // BROWSER PR SB SE PEHLAY JAVA SCRIPT READ HOTI HAI PHR TAG K HISAB SE CHLTI HAI

// // =====Template Literals =======

// var name = Ayan;
// var a = `my name is ${name}`;
// console.log(a);

// //=====Ternary Operators====

// var mark = 60;

// if(mark < 70) {   /// its called Condition
//   console.log("DHULAI"); /// Its CALLED ACTION
// }
// else{ /// ITS CALLED REACTION
//   console.log("Bachat")
// }

// mark < 70 ? console.log("DHULAI") : console.log("Bachat");

// var mark = 40;

// if(mark > 70) {  
//   console.log("Mithai"); 
// }
// else if(mark > 50){
//   console.log("Amma Se Bachat");
// }
// else{ 
//   console.log("Bachat")
// }
  
// //Condition    first action
// mark >  70 ? console.log("Mithai") :
// //2nd Action
// mark > 50 ? console.log("Amma Se Bachat"):
// //reaction
// console.log("Dhulai");




//====== Circuits =======
//circuit works on True or False

// or operator || main dono main se koi ek true hona chahiye

// let num = "ab"*5;

// // agr Number hai to number show kare wrna 0

// let total = num || 0;
// console.log(total);

// and operator && main dono true hona chahiye


// let bool = true;

// let total = bool && "ABC";

// console.log(total);


// ======= Object Methods =======


// let obj = {
//   id:1,
//   name:"ABC",
//   category:"A"
// };

// let arr = Object.keys(obj);
// let arr1 =Object.values(obj);
// let arr = Object.entries(obj);

// Object.freeze(obj);// freez main kuch bhi change nhi ho skta

// obj.category = "C";

// console.log(obj.category);

let arr = [
  {
    id:1,
    name:"Abc",
    category:"A",
    city:"Karachi"
  },
  {
    id:2,
    name:"bcd",
    category:"B",
    city:"Lahor"
  },
  {
    id:3,
    name:"eed",
    category:"C",
    city:"islamabad"
  },
  {
    id:4,
    name:"Abc",
    category:"D",
    city:"Peshawar"
  },
  {
    id:5,
    name:"ttt",
    category:"E",
    city:"KH"
  },

];

let labels = Object.keys(arr[0]);
let a = document.getElementsByid('heading');
let b = document.getElementsByid('body');

for(let i = 0;i < keys.length;i++){
  a.innerHTML +=``
}







let arr = [
  {
      id: 1,
      name: "Haroon",
      category: "A+",
      city: "karachi"
  },
  {
      id: 2,
      name: "rafay",
      category: "A+",
      city: "karachi"
  },
  {
      id: 3,
      name: "ahsan",
      category: "A+",
      city: "karachi"
  },
  {
      id: 4,
      name: "ahmed",
      category: "B+",
      city: "karachi"
  },
  {
      id: 5,
      name: "arsalan",
      category: "C+",
      city: "karachi"
  },
  {
      id: 6,
      name: "Shafay",
      category: "D+",
      city: "karachi"
  }
]

// for keys of array 
let valuesOfArray = Object.values(arr);
console.log(valuesOfArray); // [ { id: 1, name: 'rafay', category: 'A+', city: 'karachi' }, { id: 1, name: 'rafay', category: 'A+', city: 'karachi' }, { id: 1, name: 'rafay', category: 'A+', city: 'karachi' }, { id: 1, name: 'rafay', category: 'A+', city: 'karachi' }, { id: 1, name: 'rafay', category: 'A+', city: 'karachi' }, { id: 1, name: 'rafay', category: 'A+', city: 'karachi' } ]

// // for keys of array 
let keysOfArray = Object.keys(arr[0]);
// console.log(keysOfArray); // [ 'id', 'name', 'category', 'city' ]

// .map() is a method which is used to iterate over an array
// for (let i = 0; i < valuesOfArray.length; i++) {
//     document.getElementById("table").innerHTML = `${keysOfArray.map((key) => `<th>${key}</th>`).join("")}`;
//     document.getElementById("table").innerHTML += `${valuesOfArray.map((value) => `<tr>${keysOfArray.map((key) => `<td>${value[key]}</td>`).join("")}</tr>`).join("")}`;
// }


// Solution of sir

let labels = Object.keys(arr[0]);

let htmlHeader = document.getElementById("header");
let htmlBody = document.getElementById("body");

for (let i = 0; i < labels.length; i++) {
  htmlHeader.innerHTML += `<th>${labels[i]}</th>`;
}

for (let i = 0; i < arr.length; i++) {
  let x = arr[i];
  htmlBody.innerHTML += `<tr>
  <td>${x.id}</td>
  <td>${x.name}</td>
  <td>${x.category}</td>
  <td>${x.city}</td>
  </tr>`
}