//1- STRINGS
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
let myNewString = "hello this is a difficult to read sentence";
console.log(myNewString);

//ARRAYS
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0,'meerkat');
console.log("The new value of the array will be ['blowfish', 'meerkat, 'capricorn', 'giraffe', 'turtle']");
console.log(favoriteAnimals);
console.log("The array has a length of: ", favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
let meerkatIndex= favoriteAnimals.indexOf("meerkat");
favoriteAnimals.splice(meerkatIndex,1);
console.log(favoriteAnimals);
console.log("The item you are looking for is at index: ", meerkatIndex);

//MORE JAVASCRIPT
//1
function sumOfNumbers(number1, number2, number3){
    let sum=number1+number2+number3;
    return sum;
}

//2
function colorCar(color){
    console.log("a", color, "car.");
}
colorCar("red");

//3
let person ={                 
    name: "John",                       //key: value,
    age: 30,                            //key: value,
    address: "somewhere",               //key: value,
    isOverAge: true                     //key: value,
};
function printObjectProperties(object){
    
        console.log(object);
 /*    for (const key in object){
        console.log(object[key]);
    } */
}
printObjectProperties(person);

//4
function vehicleType(color, code){
    if(code==1)
    console.log('A', color, 'car');
    else
    console.log('A', color, 'Motorbike');
}
vehicleType("blue", 2);

//5
/* if (3 === 3) {
    console.log("yes");
  } else {
    console.log("no");
  } */
  console.log(3===3? "yes":"no");

  //6
  function vehicle(color, code, age){
    if(code==1|| code==2){
        if(code==1&&age==0)
    console.log('A', color, 'new car');
    else if (code==1&&age>0)
    console.log('A', color, 'used car');
    else if(code==2&&age==0)
    console.log('A', color, ' new motorbike');
    else
    console.log('A', color, 'used motorbike');
    }else 
    console.log("Enter 1 for car or 2 for motorbike");
  }
  vehicle("Blue",1,4);

  //7
  let myVehicle=["car", "motorbike", "caravan", "bike"];

  //8 GET THE THIRD ELEMENT IN THE LIST:
  console.log(myVehicle[2]);

  //9
  function vehicle(color, array, age){
      for (let i=0;i<array.length;i++){
          if(age==0)
          console.log("A", color, "new", array[i]);
          else
          console.log("A", color, "used", array[i]);
      }
    }
  vehicle("Blue",myVehicle,4);


  //12
  let myEmptyObject={};
  console.log(myEmptyObject);
  //13
  let myTeachers={
      module1 :{
        teacherName: "Josef"
      },
      module2 :{
          teacherName: "Seif"
      },
    }
    console.log(myTeachers.module1);
    //14
    /* for (const key in myTeachers){
        myTeachers[key].language=" "; */
        /* myTeachers.module1.language="HTML-CSS";
        myTeachers[module2].language="JavaScript"; */
        myTeachers.module1.language="HTML-CSS";
        myTeachers.module2.language="JavaScript";
    console.log(myTeachers);
    //15
    let x=[1,2,3];
    let y=[1,2,3];
    let z=y;
    console.log(x);
    console.log(y);
    console.log(z);
    function isEqual(array1, array2){
        return array1==array2? "Yes": "No";
    }
    function isStrictEqual(array1,array2){
        return array1===array2? "Yes":"No";
    }
    console.log(isEqual(x,y));
    console.log(isEqual(z,y));
    console.log(isEqual(z,x));
    console.log(isStrictEqual(x,y));
    /* console.log(isStrictEqual(z,y));
    console.log(isStrictEqual(z,x)); */
    //console.log(answer);


    //16
    let o1 = { foo: "bar" };
    let o2 = { foo: "bar" };
    let o3 = o2;
    o2=o3;
    console.log(o2);
    console.log(o3);
    o1={foo:"Hi"};
    o2={foo:"Hello"};
    console.log(o1);
    console.log(o2);
    console.log(o3);    //Changing o1 and o2 didn't change o3       

    //17
    let bar = 42;
    console.log(typeof typeof bar);         //this will print string
    console.log("String will be printed because type of bar is number and typeof number is string");

    let c=199;
    let k=199;
    console.log(c===k? "YES": "NO");