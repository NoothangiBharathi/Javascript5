// var game="Cricket";

// let caption= "Dhoni";


// if (game == "Cricket") {

//     document.write("Cricket is good");
// }
// else{
//     document.write("Cricket is good game for youngsters");
// }



// window.alert("welcome to javascript world");




// var game = "Cricket";
// let captain = "Dhoni";


// const tennis = "Sania";


// if(game == "someting"){
//     document.write("Match Captain is", captain)
// }
// else if(tennis == "Sania"){
//     document.write("Correct")
// }




//operators are using in conditional statements.



// let x = 100;
// let y = 200;
// let z = 300;


// if(x < y){
//     document.write("red");
// }
// else if(x>y){
//     document.write("blue");
// }
// else if(y>z){
//     document.write("yellow");
// }
// else{
//     document.write("All are wrongStatements");
// }


// " && " AND operators are used in condition statements
// var x=100;
// var y=200;
// var z=300;

// if(x==y && y==z){
//     document.write("yellow is printed");
// }
// else{
//     document.write("Green color is printed");
// }

// if(x !== y && y > z){
//     document.write( "yes Correct answer");

// }
// else{
//     document.write("yes Wrong answer");
// }




//" || "  OR operators are used in condition


// // conditional statements


// var game = "Cricket";
// let captain = "Dhoni";
// const tennis = "Sania";


// if(game == "cricket"){
//     document.write("Contion is true");
// }
// else if(tennis == "sania"){
//     document.write("Condition is true");
// }
// else{
//     document.write("Green color is printed");
// }





//Ternary Operator



// document.write( 2+7==9 ? "Yes condition is true" : "No Condition is wrong");


// 


//Dialogue box

// alert("Are you ready for coding");
// prompt("Please enter your name......");
// confirm("are you sure");






// if(women){
//     let type=prompt("please enter your name");
//     document.write("Hello medam" + type + "Welcome to my world");
// }
// else{
//     let type=prompt("please enter your name");
//     document.write("Hello mr" + type + "Welcome to my page");
// }

// var women=confirm("Are you a woman");


// if(women){
//     let name = prompt("Please enter your name");
//     document.write("Hellomedam " + name + "Welcome to my world");
// }
// else {
//     let name = prompt("Please enter your name");
//     document.write("Hello mr." + name + "welcome to my world");
// }




// var women=confirm("are you a Women");

// if(women){
//     let name = prompt("Please enter your name");
//     document.write("Hello Princess" + name + "welcome to my world");
// }
// else{
//     let name = prompt("Please Enter your name");
//     document.write("Hello Prince" + name + "Welcome to my world");
// }





// let elder = confirm("Are you sure you above 18+");
let younger = confirm("Are you below 18");

if(elder) {
    let name = prompt("Please enter your name");
    document.write("Youy are" + name +  "eligible for vote");
    
}
else{
    let name = prompt("please enter your name");
    document.write("you are "   +    name +    "not eligble for vote");
}