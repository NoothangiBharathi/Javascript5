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
// let younger = confirm("Are you below 18");

// if(elder) {
//     let name = prompt("Please enter your name");
//     document.write("Youy are" + name +  "eligible for vote");
    
// }
// else{
//     let name = prompt("please enter your name");
//     document.write("you are "   +    name +    "not eligble for vote");
// }




//Type Conversion
// var a="55";

// var b=10;

// document.write(typeof a );
// document.write(typeof b);





//switch case statement


// switch(true){
//     case 10>20:
//          answer = "redColor";
//         break;
        
//         case 10<5:
//              answer = "green color";
//             break;

//             case 10==5:
//                  answer = " Yello Color";
//                 break;
//                 default:
//                      answer = "none of the above";
//                     break;
// }
// document.write( answer);






//Write switch case program with coverd topics



// var name = prompt("Enter your name");

// var marks = prompt("Enter your Marks");

// switch(true){
//     case marks>90 && marks <= 100:
//         result="great you are the topper";
//         break;
//         case marks>65 && marks <= 90:
//             result= "Congratulation you got first grade";
//             break;
//             case marks>30 && marks <= 65:
//                 result= "You got second grade";
//                 break;
//                 case marks>10 && marks <= 30:
//                     result= "sorry you are failed";
//                     break;
//                     default:
//                         result="Enter your marks";
//                         break;
// }
// document.write(result);








// switch(true){
//     case age>90 && age <= 100:
//         result = "You are older";
//         break;
//         case age > 60 && age <=90:
//             result = " you are senior citizen";
//             break;

//             case age > 20 && age <= 40:
//                 result = " you are youth ";
//                 break;

//                 case age>18 && age <= 20:
//                     result = " you are major";
//                     break;

//                     case age>10 && age<=18:
//                         result="you are kid";
//                         break;

//                         default:
//                             result:"Please enter your age";
//                             break;
// }

// document.write("Hello"+"<h1>"  + name + "</h1>"+ result);





// Functions


// function course(){
//     document.write("FrondEnd Development");
// }
// course();



// function apple(){
//     document.write("Apple colour is red" + "<br>");
// }
// apple();
// apple();
// apple();
// apple();
// apple();
// apple();
// apple();
// apple();
// apple();
// apple();
// apple();
// apple();
// apple();
// apple();
// apple();





//Methods


//let collections = ["akash", 55 true, {name: "Prathap"}]

//Push() = ("Adds one more elements to the end of an array and returns the new lenght")




// let sports = ["cricket", "football"]


// sports.push("socker", 687)



// document.write(sports + "<br>")
// document.write(sports.length + "<br>")




//Pop()


// let books = ["Maths", "Physics", "Chemistry"];

// let someResult = books.pop()



// document.write(books + "<br>")


// document.write("Deleted by pop method is " + someResult)





//shift()



// let states = ["Delhi", "Mumbai", "Hyderbad"];

// let newStates = states.shift()

// document.write(states + "<br>");

// document.write(states.length + "<br>")


// document.write(newStates + "<br>");







//unshift()

// let scores = [22, 56, 89, 105, "amar"];


// scores.unshift("suresh", 26);

// document.write(scores + "<br>")

// document.write(scores.length);




//contact()



// let scores = [11, 22, 33, 44];


// let players = ["amith", "suresh", "mahesh"]

// let newPlayers = scores.concat(players)

// document.write(newPlayers);




//join() = "create a new string by concatening all the elements of an array"



// var team =[10,20, 30, "sunil", "anil", "madhav"]

// var myTeam = team. join("****")

// document.write(myTeam);


// //slice() = "return a shallow copy of a portion of an array into a new array"


// let students = ["anil", "balu", "karthik", 10, 20, 30, 40, 50]

// let myStudents = students.slice(0, 3)


// document.write(myStudents)

// console.log(students)




//splice()



// let myNumbers = [0,1,2,3,4,5,6,7,8];


//  let myNumbers = myNumbers.splice(0,5);

//  document.write(myNumbers + "<br>");


//  document.write(myNumbers);








//indexOf()



// let students = ["Anil", "Banti", "Mahesh", "Girish"];


// var newStudent = students.indexOf("Satish");

// if (newStudent === -1){
//     students.push("Satish")
// }

// document.write(students);




//Arrorw functions


// var Frontend = "HTML & CSS";
// document.write("Developing website with" +  Frondend );


// var FrondEnd = "HTML & CSS";

// document.write(`Developing websites with ${FrondEnd}`);




// Function to square each number in an array
const squareNumbers = (numbers) => {
    return numbers.map(num => num * num);
};

// Example usage
const numbers = [1, 2, 3, 4, 5];
const squared = squareNumbers(numbers);

document.write(squared); 







