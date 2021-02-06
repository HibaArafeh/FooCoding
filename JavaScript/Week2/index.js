//1-
console.log("مرحبا");
console.log("Hello");
console.log("Hej");

//2-
console.log("I'm awesome");

//3-
let x;
console.log("The value of 'X' will be undefined.");
console.log(x);
x=3;
console.log("The value of 'X' will be '3'");
console.log(x);

//4-
let y="I like JavaScript.";
console.log("The value of 'Y' will be 'I like JavaScript.");
console.log(y);
y="I like the FooCoding course.";
console.log("The value of 'Y' will be 'I like FooCoding course.'");
console.log(y);

//5-
console.log(Math.floor(7.25));
let z=7.25;
console.log(z);
let a= Math.floor(z);
console.log(a);
function findHighestValue(number1, number2){
    let highestValue;
    if(number1>number2){
        highestValue=number1;
    }
    else if (number2>number1){
        highestValue=number2;        
    }
    else{
        console.log("number1 equal number2");
    }
    console.log("The highest value is: ",highestValue);
}
findHighestValue(7.25,7);

//6-Arrays:
let myArray=[];
console.log("The value will be an empty array.");
console.log(myArray);
let myAnimals=["Cat", "Dog", "Rabbit",];
console.log(myAnimals);
myAnimals.push("baby pig");
console.log(myAnimals);

//7- More strings
let myString= "This is a test";
console.log(myString);
console.log("The length of the string is: " + myString.length);

//8-
let myName="Hiba Arafeh";
let myAge=31;
let isStudent= true;
let myCourses=["Programming", "DataBase Management System", "Network Security"];
console.log("The value of myName is: " + myName);
console.log("The value of myAge is: " + myAge);
console.log("The value of isStudent is: " + isStudent);
console.log("The value of myCourses is: " + myCourses);
console.log("The type of myName is 'String.");
console.log("The type of myAge is 'Number.");
console.log("The type of isStudent is 'Boolean'");
console.log("The type of myCourses is 'Array object'");
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isStudent);
console.log(typeof myCourses);
let myInformation=[];
myInformation.push(myName);
myInformation.push(myAge);
myInformation.push(isStudent);
myInformation.push(myCourses);
console.log(myInformation);
for(let i=0; i<myInformation.length; i++){
    for(let j=i+1; j<myInformation.length; j++){
        if(typeof myInformation[i]==typeof myInformation[j]){
            console.log("SAME TYPE");
        }else{
            console.log("DIFFERET TYPE");
        }
       
    }
}

//9-
console.log("The % is one of the operators in JavaScript that returns remainder of two operands");
console.log("If the result of the division is not zero, then the result will be returned");
console.log("Otherwise zero will be returned");

//10-
let myTestArray=["Sam", 35];
let isMarried= true;
let childrenNames=["John", "Annie", "Lisa"];
myTestArray.push(isMarried);
myTestArray.push(childrenNames);
console.log(myTestArray);               //The array containes a string, a number, a boolean, and an array.
let x1=6/0;                             //the result will be infinity.
let y1=10/0;                            //the result will be infinity.
console.log(typeof x1);                 //the type will be number.
console.log(typeof y1);                 //the type will be number.
console.log("The comparison result will be true because both of them have the same type and the same result");
console.log(x1===y1);                   //true will be returned                  







