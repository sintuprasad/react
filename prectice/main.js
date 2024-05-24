//data type
/* String()
Number()
Boolean()
undefined
null
NaN
 */
/*
let string = "hii"
let numString = Number(string)
let bool2 = null;

let number = 45
let string2 = Boolean(number)
let num2 = number = 100;
console.log(num2)
num2 = 60;
console.table(number, string2, num2)


// console.log(typeof string3, string3)
let boolean = {
    name: "sintu",
    name: "24",
    sms: string,
    number: number,

}
bool2 = boolean.age = "raju";
console.log(boolean)
*/
// STRING METHOD
/* let name = "   sintu    ";
let newName = new String(name);
let newName2 = new String('raju'); */

// NUMBERS
/*
let number = 121.56
let number2 = 1.0
let numLength = String(number2).length
let num = new Number(number2)
let k;
// console.log(num.toString().length);
// console.log(number.toLocaleString('en-in'));
// console.log(number.toFixed(2));
// console.log(num.toExponential(1))

/* if(numLength>=4 && num <= 1099){
    k =     slice(0, 1)
    console.log(k + "k views")
}

let min = (10, 20, 30, 40)
let max = 39304
*/
// let ran = Math.floor(Math.random()*(max-min+1)+min);
// let ran2 = Math.floor(Math.random()*6)+95
// console.log(Math.round(max));
// console.log(Math.ceil(max));
// console.log(Math.max(min));
// console.log(Math.cbrt(max))
// console.log(Math.pow(2,5))

// DATES AND TIME
/* 
let myDate = new Date()
let createDate = new Date("01-01-2000")
let timeStamp = Math.floor(Date.now() / 1000 / 60 / 60)
let oldDate = new Date("07,03,2024").getMilliseconds()
// console.log(timeStamp, oldDate.toLocaleString())
let myDates = new Date() */

// console.log(myDates.toLocaleString());

// console.log((((nowDate/1000)/60)/60/24).toFixed(2)) /* total days from 1970 to Now */

// console.log((myDates.getTime()/1000/60/60/24).toFixed(0))
// console.log(nowDate)
// let nowDate = new Date()
// const birthday = new Date(7,3,2000);
// let result = nowDate.setTime(birthday.getTime())

// TIME COMPLAXCITY
/* 
let start = new Date().getTime();
for(let i=1; i<11;i++){
    console.log(i)
}
let end = new Date().getTime();
console.log(`Operation took ${end-start} millisecond`);
 */
// let newD = new Date()
// let obj = newD.toLocaleString('default',{
//     weekday:"long",

// })
// console.log(obj)

// let array = [5, 8, 1, 5, 6, 4]
// let newArray = [0, 1, 2, 3, 4, 5]
// let plus = [1, 2, 3, [12, 11, [22, 33, 44, [140, 150, [33, 66, 99], 160, 170], 55, 66], 10, 20, 30], 1, 7, 85, 6, 55]
// let jo = array.join(" /")
// console.log(Array.from(array))
// console.log(Array.of(array,newArray))
// Array.from(array)
// let concate = array.concat(newArray)
// console.log(concate)
// console.log(Array.from({name:"Sintu"}))
// console.log(Array.isArray(array))
// let all = plus.flat(Infinity)
// console.log(plus.includes(1))
// console.log(all)
// let pus = arrayTo.push(52)
// console.log(arrayTo.pop())
// console.log(array.unshift(45))
// console.log(array.shift())
// console.log(array.slice(1,3))
// console.log(array.splice(1,2,44,55,66,77))
// console.log(array.reverse())

// OBJECT 
// let mySym = Symbol("key1")
// let obj = {
//     name: "Sintu",
//     age: 24,
//     logedIn: false,
//     [mySym]: "key2",
//     locale: Symbol("mySym"),
//     "full name": "Sintu Prasad",
//     email: "sintuprasad1234@gmail.com"

// }
// obj.email = "baklol@google.com"
// Object.freeze(obj)
// obj.email = "lalu@yahoo.com"
// console.log(Object.entries(obj))
// console.log(Object.isFrozen(obj)) // true

// console.log(obj.email)
// console.log(obj[mySym])

// console.log(obj["full name"])
/* obj.func = function(){
   console.log(`hello javascript user ${this.name}`)
} */

// console.log(obj.func())
// console.log(obj)

// let tinderUser  = new Object() // singleton  
// let tinderUser = {
//     id: 1,
//     loggedIn: true,
//     email: "sintuprasad792@gmail.com"
// }
// object in object
// const regularUser = {
//     email: "baklolwala@gmail.com",
//     fullName: {
//         firstName: "Sintu",
//         lastName: "Prasad",

//     }
// }
// console.log(regularUser.fullName.firstName)

// object marge
// const obj1 = { 1: "a", 2: "b", 3: "c" }
// const obj2 = { 4: "d", 5: "e", 6: "f" }
// const obj3 = Object.assign({}, obj1, obj2) //(target,source)
// const obj4 = { ...obj1, ...obj2 }
// console.log(Object.values(obj4))

// accepting DataBase /api value
// const user1 = [
//     {
//         id: 1,
//         email: "sintuprasad1234@gmail.com"
//     },
//     {
//         id: 2,
//         email: "sintuprasad792@gmail.com"
//     },
//     {
//         id: 3,
//         email: "rajbharsintu2@gmail.com"
//     },
// ]
// console.log(user1[1].email)

// DESTRUCTURING

// const object = {
//     email: "email@gamil.com",
//     name: "sintu prasad",
//     course: "free",
//     courseInstructor: "hitesh sir"

// }
// const { courseInstructor: teacher } = object
// console.log(teacher)

/* const Navabr = ({company}) =>{
}
Navabr(company="sintu") */ // react  props / destructuring
/* 
function noa(obj){
console.log(obj.name)
}
noa(object)
//  */
// const symbol = Symbol("key1")
// const obje = {
//     name: "sintu prasad",
//     email: "sintuprasad@gmail.com",
//     id: 1,
//     [symbol]: "key2"
// }
// obje.functi = function () {
//     console.log(this.name)
// }
// console.log(obje.functi())

// obje.email = "baklolraha@gmail.com"
// Object.freeze(obje)
// obje.email = "raha@gmail.com"
// let objj = {
//     id: 1,
//     email: "firstemail@email.com",
//     fullName: {
//         firstName: "seth",
//         lastName: "prasad",
//         hobbie: {
//             first: "melting",
//             second: "incharging"
//         }
//     }
// }

// let arrayObject = [
//     {
//         id: 1,
//         email: "email 1"
//     },
//     {
//         id: 2,
//         email: "email 1"
//     },
//     {
//         id: 3,
//         email: "email 1"
//     }
// ]

// const objec1 = { 1: "a", 2: "b", 3: "c" }
// const objec2 = { 4: "d", 5: "e", 6: "f" }
// let store = Object.assign({}, objec1, objec2)
// const { fullName: fN } = objj
// console.log(fN)
// console.log(Object.values(store))
// console.log(arrayObject[0].id)
// console.log(objj.fullName.hobbie.second)

// FUNCTION
// console.log(add(5))     
// const az = function bb(a = 5, b = 1) {
//     return a + b
// }
// console.log(az()) 
// console.log(az())
// function add(num) {

//     return num + 1
// }
// closers

// function a() {
//     let name2 = "Sintu Prasad"
//     function b() {
//         let name1 = "Seth Prasad"
//         console.log(`${name1}         ${name2}`)
//     }
//     b()
//     // console.log(name2)

// }
// a()

// this keyword
// const this_obj = {
//     userName: "Seth prasad",
//     email: "sethprasad1234@gmail.com",

//     massege: function () {
//         console.log(this.userName)
//     }
// }
// console.log(this_obj.massege())

// const this_obj2 = {
//     userName: "Seth prasad",
//     email: "sethprasad1234@gmail.com",

//     massege: () => this.userName

// }
// console.log(this_obj.massege())


// arrow function ()=>{} Explicity
// const func = () => {
//     return `hello world (Explicity)`
// }
// console.log(func())
// arrow function ()=>() Emplicity
// const func2 = () => (`hello world (Emplicity)`)
// console.log(func2())
// console.log(this)
// function this_ref() {
// console.log(this)
// }
// this_ref()
// const this_ref2 = () => { console.log(this) }
// console.log(this_ref2())

// iife named-iife
// (function chai() {
// console.log(`named-iife`)
// })();
// ((val) => {
// console.log(`simple iife ${val}`)
// })("sintu")
// let ans = (function () {
//     let value = 10
//     return {
//         getter: function () { return value },
//         setter: function (val) { value = val }
//     }
// }
// )();
// // console.log(ans.getter())

// let ans2 = (()=>{
//     let privateNumber = 100
//     return{
//         get:()=>privateNumber,
//         set:(val)=>(privateNumber = val)
//     }
// })();

// console.log(ans2.get())
// console.log(ans2.set(2))
// console.log(ans2.get())
/* 
switchCase statement
let val = 2;
switch (val) {
    case 1:
        console.log(`value ${val}`)
        break;

    case 2:
        console.log(`value ${val}`)
        break;

    case 3:
        console.log(`value ${val}`)
        break;

    default:
        console.log("invalid")
        break;
}
 */

// for loop
/* for (let i = 1; i <= 5; i++) {
    const element =i;
    console.log(element)
} */

/* for (let i = 1; i <=10; i++) {
    const element = i;
    if(element == 5){
        console.log(`${element} is didected`);
        break;
    }
    console.log(element);
    for (let j = 11; j <=20; j++) {
        const element = j;
        if(element ==15){
            console.log(`${element} is didected`);
            break;
        }
        console.log(element);
        
    }
    
}
 */
/* let arr = ['value','index','array']
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
} */

// while loop
/*let val = 11
 while (val <=10) {
    console.log(val);
    val=val+1;
} */
/* do {
    console.log(`value is ${val}`);
    val++;
} while (val<=10); */

/* let arr = ['value','index','array']
let val = 0;
while(val<arr.length){
    const element = arr[val]
    console.log(element);
    val++;
} */
/* let arr = ['value','index','array']

let i = 0;
 do {
    if(arr[i] == undefined){
        console.log(`value of array is ${arr[i]}`)
        break;
    }
    console.log(`value of array is ${arr[i]}`)
    i++;
 } while (i<arr.length); */


/* 
let arr = ['value', 'index', 'array']
for (const key of arr) {
    //  console.log(key)   
}
 */

// higher order loop

/* 
let obj = {
    name: "sintu",
    title: "prasad",
    age: 24
} */
/* 
let map = new Map();
map.set("name", "sintu")
map.set("title", "prasad")
map.set("age", "24")
map.set("name", "sintu")  //double entry hide

for (const [key, value] of map) {
    // console.log(key,"is",value);
}
 */
/* const game = {
    ff: "free fire",
    bgmi: "pubg",
    ld: "ludo"
}
for (const key in game) {
    // console.log(`${key} mean ${game[key]}`)
} */
/* 
const lang = ["js", "python", "ruby", "c++"]
lang.forEach(function (key) {
    console.log(key)
}); */

/* function items(item){
    console.log(item)
}
lang.forEach(items) */

/* lang.forEach((val, index, arr) => {
    // console.log(val,index,arr)
}) */

/*
const myCoding = [
    {
        languageName: "javascript",
        extantion: "js"
    },
    {
        languageName: "java",
        extantion: "java"
    },
    {
        languageName: "python",
        extantion: "py"
    }
] */

/* const storeData = [1,2,3,4,5]
let store = myCoding.forEach(function (val, index) {
    console.log(val.extantion)
    let data = val.extantion
    // storeData.push(data)
    return val //undefined
})
let data2 = storeData.map(function(items){
    return items+10
})
console.log(data2)
console.log(storeData) */

// Map,fillter,reduse
// filter
/*
const books = [
    { genre: "History", publish: 1998 },
    { genre: "Math", publish: 2009 },
    { genre: "History", publish: 1991 },
    { genre: "Geography", publish: 1998 },
    { genre: "English", publish: 2015 },
    { genre: "English", publish: 1985 },
    { genre: "Hindi", publish: 2000 },
    { genre: "History", publish: 2014 },
    { genre: "Math", publish: 2004 },
    { genre: "History", publish: 1991 },
    { genre: "Geography", publish: 1998 },
    { genre: "Hindi", publish: 1993 },
    { genre: "Science", publish: 2000 },
    { genre: "biology", publish: 2024 }
]

let result = books.filter(function (item) {
    return item.genre == "Hindi" && item.publish == 2000

})
result = books.filter((items) => items.genre == "History" && items.publish > 1990) */
// console.log(result)

// MAP
/* const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNums = myNumbers.map((items) => items + 10)

let chaningMap = myNumbers
    .map((items) => items * 10)
    .map((val) => val + 1)
    .filter((items) => items >= 40) */

// console.log(chaningMap)
// REDUSE
/* let newReduse = [1, 9, 3]
let reduseVal = newReduse.reduce(
    function (acc, currVal) {
        // console.log(`accumulator value ${acc} curentValue ${currVal}`)
        return acc + currVal
    }, 10)

const shoppingCart = [
    {
        courseName: "Java Script",
        price: 2999
    },
    {
        courseName: "Java",
        price: 8999
    },
    {
        courseName: "Python",
        price: 1499
    },
    {
        courseName: "Android",
        price: 8999
    },
    {
        courseName: "Data Science",
        price: 12999
    },
]
let gst = 5
const shoppingResult = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(shoppingResult)  */

// API / async
/* const url = 'http://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
       const data = JSON.parse(xhr.responseText)
        console.log(data)
        console.log(typeof data)
    }
}
xhr.send()

*/
//promise fetch, then and catch;

// promise One

/*const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    },1000)
})
promiseOne.then(function(res){
    console.log('promise consumed')
})
console.log(promiseOne); */

//promiseTWO  without variable
/*
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2 complet')
        resolve()
    },1000)
}).then(function(res){
    console.log('task two consumed')
}) */

// promise three
/*
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        // pass any type of value in resolve parameter
        // resolve({user:'sintu', email:'sintu@code.com'})
        // resolve([1,2,3,4,5])
        resolve('resolve parameter')
    },1000)
})
promiseThree.then(function(obj){
    console.log(obj)
}) */

// promise four

/* const promiseFour = new Promise(function(resolve,rejcet){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({name:'sintu', email:'sintu@code.com'})
        }
        else{
            rejcet('ERROR! somthing went wrong')
        }
    },1000)
})
promiseFour.then(function(user){
    return user.name
}).then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error)
}).finally(function(){ // this is default and exicute either resolved or rejected
    console.log('The promise is either resolved or rejected')
}) */

// promise Five
// consume async await and try{}and catch{};
/*
 const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (error) {
            resolve({ name: 'Sintu', email: 'sintu@gmail.com' })
        }
        else {
            reject('somthing went wrong javascript')
        }
    }, 1000)
})
//this is new async function
async function consumePromiseFive(){
    // if condition is true then resolev and condition is false then no any error thow
    //  use try{} and catch{} method
    try {
        const response = await promiseFive
    console.log(response.name)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()
 */

// Promise Six call api using async await

/* async function getAllUser() {
   try {
       const response = await fetch('http://api.github.com/users/hiteshchoudhary')
       const data = await response.json()
       console.log(data)
   }
   catch (error) {
       console.log('ERROR : ', error);
   }
}

getAllUser() */

// Promise seven
/*
fetch('http://api.github.com/users/hiteshchoudhary')
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data.name)
    }).catch(function (error) {
        console.log('ERROR', error)
    })
 */
// promise eight

/* function getApi(url) {
    fetch(url)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data.name)
        }).catch(function (error) {
            console.log('ERROR', error)
        })
}
getApi('http://api.github.com/users/hiteshchoudhary')
 */
// prototype in javascript

/* const creatUsers = function (user, email, age) {
    this.ss = user
    this.email = email
    this.age = age
}
creatUsers.prototype.printMe = function () {
    console.log(this.ss)
}
const user1 = new creatUsers('sintu', '@gmail.com', 24)
const user2 = new creatUsers('rahul', '@gmail.com', 22)

// user1.printMe();
 */
/*
const myName = 'Sintu      '
const yourName = 'Rahul prasad    '
// console.log(myName.length)
String.prototype.trueLength = function () {
    console.log(this.trim().length)
}
yourName.trueLength()
 */
// prototypal inheritence
/*
const User = {
    name: 'chai '
}
const TeachingSupport = {
    isAvailable: false
}
const TaSupport = {
    makeAssingment: 'javascript',
    fullTime: true,
    __proto__: TeachingSupport
}
// console.log(TaSupport.isAvailable)

// Modern Syntax
Object.setPrototypeOf(User,TeachingSupport)
console.log(User.isAvailable)
*/

// call
/*
function setUsername(username) {
    this.userName = username
}
function user(username, email) {
    setUsername.call(this,username)
    this.email = email

}
const user1 = new user('sintu','gmail.com')
console.log(user1);
 */
/*
class user {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
encryptPassword() {
        return `${this.password}abc`
    }
    capital() {
        return this.username.toUpperCase()
    }
}
const chai = new user('sintu', 123)
console.log(chai.capital())
 */
// INHERITANCE in class constructor
/*
class user {
    constructor(username) {
        this.username = username
    }
  static  student() {  // not inherit to teacher method
        return `${this.username}`
    }
}
class teacher extends user {
    constructor(username, email, password) {
        super(username) //inherite form extends
        this.email = email
        this.password = password
    }
    logme() {
        return `A new Course was add by ${this.username}`
    }
}
const teacher1 = new teacher('sintu', 'sintu@fb.com', 123)
console.log(teacher1.student())
 */

// BIND

/* class clicked {
    constructor() {
        this.library = 'react'
        this.server = 'https://localhost:3000'
        document.getElementById('button').addEventListener('click', this.handleClick.bind(this))
    }
    handleClick() {
        console.log('button clicked')
        console.log(this.server)
    }
}
const btn = new clicked()
 */

// advanced object

/* const ownProparty = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(ownProparty)

const myObj = {
    name: 'sintu',
    email: 'sintu@gmail.com',
    age: 24
}
Object.defineProperty(myObj, 'name', {
    writable: false,
    enumerable: false,
})
Object.getOwnPropertyDescriptor(myObj, 'name')

for (const [key,value] of Object.entries(myObj)) {
    console.log(key,value)
}
const demo = Object.getOwnPropertyDescriptors(Math)
console.log(demo)
*/

// class based getor and setor

/* class obj{
    constructor(username,password){
        this.username = username
        this.password = password
        return username,password
    }
    get username(){
        return this._username
    }
    set username(value){
        this._username = `${value}bulbul`   // _username variable is privat
    }
    get password(){
        return this._password  //password variable is privat
    }
    set password(value){
        this._password=value+'abc'
    }

const myObj 
console.log(myObj.username);
 */

// function based getor and setors 
/* 
function user(email,password){
    this.email = email
    this.password = password
    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email = email.toUpperCase()
        },
        set: function(value){
            this._email = `${value}123`
        }
    })
    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password = password.toUpperCase()
        },
        set: function(value){
            this._password = `${value}123`
        }
    })
}
const user1 = new user('sintu@gmail.com','abc')
console.log(user1.password)
 */

// lexical scope 

/* function user(){
    let name  = 'sintu'
    //console.log(name,title) //not defined
    function inner(){
        let title = 'prasad'
        console.log(name);
    }
    function innerTwo(){
        let cast = 'prasad'
        // console.log(name,title) //not defined
    }
    inner()
    innerTwo()
}
user() */

// CLOSURES

/* function outer(){
    const name = 'sintu prasad'
   return function(){
        console.log(name)
    }   
   
}
 const myFunc = outer()
 myFunc()
*/
/* function clickHandler(color) {
    return  function(){
        document.body.style.backgroundColor = color
    }
}
document.getElementById('yellow').onclick= clickHandler('yellow')
document.getElementById('green').onclick =clickHandler('green')
 */

// Advance Array

// Custom React

function app(element, render) {
    const elementType = document.createElement(element.type)
    elementType.setAttribute('href', element.prop.href)
    elementType.setAttribute('target', element.prop.target)
    elementType.innerHTML = element.text
    render.appendChild(elementType)
    console.log(elementType)
}
function ReactApp(element, render) {
    const elementType = document.createElement(element.type)
     for (const [key,val] of Object.entries(element.prop)) {
         elementType.setAttribute(key,val)
     }
     elementType.innerHTML = element.text
     render.appendChild(elementType)
    // console.log(elementType)
}
const creatElement = {
    type: 'a',
    prop: {
        href: "https://google.com",
        target: "_blank"
    },
    text: 'Google.com'
}
const renderELement = document.getElementById('root')
ReactApp(creatElement, renderELement)











































