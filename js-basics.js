//js is dynamic, automatically considers what to assigns and is single threaded

// const a = 1
// var b = 2  /* block scoped */
// let c = 3  /* braces/fxn scoped */

// let d   //undefined value, if not initialised

//null -> empty value
//undefined -> no value is assigned

// console.table([a, b, c, d])
// console.log(typeof null); // -> object type
// console.log(typeof undefined); // -> undefined


//-----------------------Conversions----------------

// "22" -> 22
// "22asdf" -> NaN -> typeof mein prints number 



//----------------- Data types ----------------

// primitive -> value is passed and changes are made in new copy
// String, Number, Boolean, null, undefined, BigInt, symbol;


//Non-primitive or Reference -> direct reference is passed
// Objects, arrays, fxns
//return an object

// stack -> primitive
// heap -> non primitive

//eg:

// let userOne = {
//     name: "user",
//     email: "test@user.com"
// }

// let userTwo = userOne;
// userTwo.email = "test@username.com"; // it changes values in both objects, as same memory is being referenced

//-------------------- Strings ------------------------

// let name = "Anurag";
// let str = `My name is ${name}`; //modern way of defining strings
// console.log(str);

// let subName = name.substring(0,2); // dosen't takes -ve values
//string is an object

// name.slice(-8,0) --> takes -ve value as well
//name.trim() -> removes white spaces
//name.replace(oldVal, newVal) -> replaces oldVal with newVal

//name.includes("anu") --> gives true/false
//name.split(deliminator) --> splits based on deliminators

// let min = 10;
// let max = 20;
//console.log(Math.floor(Math.random() * (max-min+1)) + min)

//-------------------------Dates --------------------------------

// date are objects
// console.log(Math.floor(Date.now()/1000)) // --> gives current time in seconds

// let newDate = new Date();
// newDate.toLocaleString('default', {
//     weekday: "long"
// })


//---------------------------- Arrays--------------------------------------

// copy created is shallow copy, i.e. same memory is being referenced

// let arr = [1,2,3,4,5,6,7]
// console.log("A", arr);

// let newArr = arr.slice(1,3)
// console.log(newArr);
// console.log("B", arr);


// let newSpliceArr = arr.splice(1,3)
// console.log(newSpliceArr);
// console.log("C", arr);

//splice includes ranges mentioned from start to end, slice includes from start to end-1
//splice modifies (removes the range mentioned from) the orignal array, but slice dosen't


// let newArrFinal = [...newArr, ...newSpliceArr] //-> used to concat two or more arrays

// console.log(Array.isArray("Anurag"));
// console.log(Array.from("Anurag"));
// console.log(Array.from({name: "Anurag"})); --? return empty array, as unable to create an array out of it

// let score1 = 100
// let score2 = 200

// console.log(Array.of(score1, score2));

//------------------- Objects-----------------------------------------

// constructors always creates singleton objects
// Object.create()

// const mySym = Symbol("key1"); 

// let myObj = {
//     name: "Anurag",
//     "full-name": "Anurag Tiwari", 
//     age: 18,
//     email:"anu@test.com",
//     [mySym]: "mykey"
// }

// console.log(myObj.age)
// console.log(myObj["age"]) both are same, as js treats key as strings
// console.log(myObj["full-name"])
// console.log(myObj[mySym]) --> syntax for accessing symbols

// Object.freeze(myObj) //--> treats the objects as const, so no change is psible, also no error

// const obj3 = {...obj1, ...obj2};
// Object.keys(obj1)  OR  Object.values(obj2) --> gives all the keys/values of the specified Object, as an array

//Destructuring

//  const myObj1 = {
//     name: "Anurag",
//     age: 18,
//     email: "abc@gmail.com"
//  }
// const {name: Fname} = myObj1; --> extracts name from myObj1 and stores in Fname.


//-----------------------------Functions---------------------------------

// function test(user){
//     return `${user} just logged in`
// }
// console.log(test()); //-> since no i/p was given, so gives undefined as output


// function calculatePrice(val1, val2, ...num1){ // ...num1 -> rest operation, accepts all the left over values.
//     return num1;
// }
// console.log(calculatePrice(100, 200, 300, 400));

//browser mein this ki value -> global object, i.e windows
//node me this ki value -> empty object
//fxn ke andr this -> undefined

//--------------- IIFE (Immediately Invoked Fxn Expression)------------------------
//Used for handling pollutions of global scoped items 

// (Fxn defination)(For fxn execution);  ()();--> semicolon for ending 

// eg:
// (function connection(){
    // console.log(`DB Connected`);
// })()

//false, 0, -0, bigint 0n, null, undefined, NaN --> falsy

//----------- Nullish Coalescing Operator ---------------------------------
//val1 = null ?? 10 ?? 20 --> whatever value is recieved first will be assigned, here 10


// ------------------ for of loops --------------------------

//mostly used to iterate in arrays
//for (const i of arr){
    // console.log(i) --> directly gives the values inside arr
// }

// it can also iterate over map: , but not over objects

// for(const [key, val] of myMap){
    // console.log(key, ": ", val);
// }

// --------------------- for in loop -----------------------------

//can iterate over objects: but not over maps

// for(const key in myObj){
    // console.log(`${key} : ${myObj[key]}`);
// }

// for(const i in arr){
    // console.log(arr[i]); --> here same like in for loops
// }

// ---------------------- for each loop --------------------------

// const arr = ["js", "python", "cpp", "java", "ruby"]

// arr.forEach( (item)=>{
//     console.log(item);
// } );

// accessing objects inside arrays: [{}, {}, {}]

// const myObject = [
//     {
//         name: "Anurag",
//         age: 18
//     },
//     {
//         name: "Anand",
//         age: 17
//     },
//     {
//         name: "Arun",
//         age: 20
//     }
// ]

// myObject.forEach( (item) =>{
//     console.log(`${item.name} is ${item.age} years old`)
// } )

// --------------- filters ---------------------------
// working is same as forEach loops, just supports return 
// const myNums = [1, 2, 3 ,4, 5, 6, 7, 8, 9, 10]

// const retVal = myNums.filter( (num)=>(num > 4) )

// const retVal = myNums.filter( (num)=>{
//     return (num > 4)} ) -->  need to use return explicitly
// console.log(retVal)

// filters allows to pass only those values which satisfies the conditions

// -------------------- Maps -------------------------------------------

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const retVal = myNums.map((num) => num * 12)
// const retVal = myNums
                        // .map((num)=> num*12)
                        // .map((num)=> num/5)
                        // .filter((num) => (num>10));

// Every chained method will get the value passed from its previous method

// --------------------------- Reduce -----------------------------------

// const myNums = [1, 2, 3]
// const initialVal = 0

// const myTot = myNums.reduce( (acc, curr) => {
    // `Val of acc is: ${acc}, and val of curr is: ${curr}`
    // return (acc * curr)}, initialVal);

// initially, accumulator accepts the initial val specified, but afterwards, it accepts the further values which gets calculated.

// const shopCart = [
// {
//     course: "Cyber Security", 
//     price: 1000
// },
// {
//     course: "Data Science", 
//     price: 900
// },
// {
//     course: "Full Stack Development", 
//     price: 800
// }]

// const priceToPay = shopCart.reduce( (acc, item) => (acc + item.price), 0)
// console.log(priceToPay);

// -------------------- DOM ----------------------------------

//let titile = document.getElementById('id_name')
// title.innerHtml() --> gives the inner Html tags along with value 
// title.innerText() --> gives the visible text 
// title.textContent --> gives the entire text (visible + invisible)

// document.querySelector('ul') --> gives the first matching ul
// document.querySelectorAll('ul') --> gives all the ul in the page in the form of Nodelist

// Nodelist are similar to array, but not exactly like array, as they dosen't have the map property but has forEach loop

// eg: 
// let myH1 = document.querySelectorAll('h1')
//  myH1[0].style.color = 'green' --> this is correct syntax.

// let myArr = Array.from(myH1) --> Converts Nodelist -> Array

// ---------------- Events -------------------

/* document.getElementById('id_name').onclick = ()=>{} --> gives less features.

Use eventListener instead:

document.getElementById('id_name').addEventListener('click', (events)=>{ alert('Clicked')}, false)

Third parameter used above is for eventPropogation, by default false.

event Propogation (false)--> bubling of events, means whenever we listen to any event on the web page, it bubbles up, i.e. first the child element invokes, then the upper parents invokes.
*/
// eg:
{/* <ul id='ul'>
    <li id='one'>One</li>
    <li id='two'>Two</li>
    <li id='three'>Three</li>
</ul> */}

// document.getElementById('ul').addEventListener('click', (events)=>{ alert(`Clicked ul `)}, false)

// document.getElementById('two').addEventListener('click', (events)=>{ alert(`Clicked id `)}, false)

/*
Here, if we will click on Two, then first it will print Clicked id and then in the next line, it will show Clicked ul. Goes from bottom to top.

But, if we will set eventPropogation as true (it is in catching mode), it will show just opposite, from top to bottom.

use e.stopPropogation() --> to prevent these
*/



// Read about events:

// type, timestamp, defaultPrevented, target, toElement, srcElement, currentTarget, clientX, clientY, screenX, screenY, other position related events, keyCodes

// --------------------- Async Code ----------------------

// Memory -> Call Stack -> Web Api/Node Api -> Task Queue -> Waits to clear the call stack -> Gets Loaded into call stack & executes -> 

// Promises -> own task queue -> higher priority than noramal async fxns like setTimeOut() 


/* ---------------------- setTimeout() & clearTimeout()--------------------

const changeText = function(){
    document.querySelector('h1').innerHtml = "Learning JS";
}
const changeMe = setTimeout(changeText, 5000);

const fxn = ()=> {
    clearTimeout(changeMe)
}

document.querySelector('#id').addEventListener('click', fxn, 2000) --> applied on a button so that one can stop execution of setTimeout within given time interval





*/