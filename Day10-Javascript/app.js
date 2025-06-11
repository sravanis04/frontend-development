console.log("Hello, Javascript")
console.log("This is my first program")

// Creating Variables
let userName="Sravani";
let userAge="20";

console.log("My name is",userName," and my age is",userAge)

//Two types of variables  1.Primitive Datatype 2.Non-Primitive
//Primitive datatypes are 5 basically 1.String 2.Number 3.Boolean 4.Null 5.Undefined

let stuName="John"
let age=25
let isStudent=false
let phnNum
let lastName=null
console.log(stuName)
console.log(age)
console.log(isStudent)
console.log(phnNum)
console.log(lastName)

//Understanding Scopes-where i can use this variable
//Global Scope(Everone can access)---Local Scope(only people inside can access)---Block Scope(Even more private)
let myWebsite="My App"
function global(){
    console.log("welcome to",myWebsite)
}
global();

function local(){
    let name="sin"
    console.log(name)
}
local();

function block(){
    let userName="user@gmail.com"
    console.log(userName)
}
block()


//Real-Time example : Zomato Login System

//step-1 user enters login page
let userEmail=""
let userPassword=""
let isLoggedIn  =false

//sstep-2  user enter credentials

userEmail="user@gmail.com"
userPassword="password@123"
console.log("user entered email:",userEmail)
console.log("user entered password: ","***hidden***")

//step-3  validate credentials
let storedEmail="user@gmail.com"
let storedPassword="password@123"
 
if(storedEmail===userEmail && storedPassword===userPassword){
    console.log("Login Successfully")
    console.log("welcome",userEmail)
}
else{
    console.log("Login Failed")
    console.log("Try Again")
}