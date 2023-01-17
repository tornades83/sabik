//corection ex2//


// const Students = [];
// while(!qty) var qty = parseInt(prompt("how many students?"));
// for (let i = 0; i < qty; i++) {
//     var fName = prompt("enter the student's name.");
//     Students.push(fName);
// }
// Students.sort();
// alert("the students are :" + Students.join(","));

// push               true
// includes
// indexOf
//sort                true
// join    vs  split
// reverse            true
// pop                true
// shift              true
// unshift            true
// slice  (index, qty)  

//slice//

// var x = "Hello, World!" ;
// var world = x.slice(7,12); //World 

//splice//

// var cars = ["Honda" ,"Toyota" ,"Mazda" ,"BMW" ,"Nissan", "Suzuki"];
// cars.splice(3, 1, "Yamaha" , "kia" , "Hyundai");


// Ask for a brand.
// if the brand exists in the array, ask for a new brand.
// remove the first one, and replace with the new.

// otherwise, just add the brand to the array.

//solution 1//

// var cars = ["Honda" ,"Toyota" ,"Mazda" ,"BMW" ,"Nissan", "Suzuki"];
// var brand = prompt("enter a brand"); //bmw

// var index = cars.indexOf(brand); //3
// if(index > -1){
// cars.slice(index, 1, prompt("enter a new car brand."));
// } else {
//     cars.push(brand);
// }

//solution 2//

// var cars = ["Honda" ,"Toyota" ,"Mazda" ,"BMW" ,"Nissan", "Suzuki"];
// var brand = prompt("enter a brand"); //bmw

// var index = cars.indexOf(brand); //3
// if(index > -1){
// cars[index] = prompt("enter a new car brand.");
// } else {
//     cars.push(brand);
// }
// cars[52] = "ferrari" //rajoute la voiture dans le groupe et luis donne la place 52!!!!!

// console.log(cars);

//transformer un titre en array//

// var str = "Hello, World!";

// var arr = str.split(",") //["HELLO"," wORLD!"]

// const student = {
//     fName: "Anna",
//     lName: "Beniard",
//     age: 87,
// };

// const myBrands = {
//     cars: ["Honda", "Ferrari"],
//     fashion: ["Gucci", "Prada"],
// };



// const obj = {}
// const arr = []
// arr[5] = "hello";

// obj.fName = "Noa";
// obj.iNme = "Partouche";
// obj["age"];
// console.log(obj);


//extraction des element et object d'une url//


//https://www.yad2.co.il/vehicles/cars?manufacturer=1,53,96,76&model=5,4,1687,1593,1270,1,1792,6,1522,1795,2854,982,3083&price=1000-500000&area=100&hand=1--1&ownerID=1,2,3,5&seats=7,8,9&engineType=9,8,7,6,5,4,3,2,1&group_color=7,9,10,1&gearBox=1//
// const obj = {}

// var query = prompt("Enter a URL").split("?")[1]; //"manufacturer=..."
// var props = query.split("&"); //["manufacturer=245,116,285,110","year=2018-2023"]
// for (let i = 0; i < props.length; i++) {
//     const elem = props[i].split("=");  //["manufacturer","245,116,285,110"]
//     //var key = elem[0];
//     var val = elem[1];


//     if (val.includes(",")) {
//         val = val.split(",")
//     }
//      obj[elem[0]] = elem[1];
//    // obj[key = val];

// }


// console.log(obj);


//ecraser un mots par un autre //


// var str ="Hello, world, this is the Sabik class of Webschool Tel Aviv, 2023!"
// str = str.replace("Sabik", "haim");
// //il ramplace que le premier mot et il ce casse//
// var str ="hey Sabik fans this is the Sabik class of Webschool Tel Aviv, 2023!"
// str = str.replace("Sabik", "haim");
//il remplace tous les mots indiquer//
//var str ="hey Sabik fans this is the Sabik class of Webschool Tel Aviv, 2023!"
//str = str.replaceAll("Sabik", "haim");



//console.log(str.replace);
//console.log(str);


//les fonction//

//fonction falafel //

function falafel(){
    var bread = "pita";
    var qty = 6;
    var hummus = true;
    var str = "Don't worry, I did not add you hummus.";
    if (hummus) {
        str = " I put you a lot of hummus.";
    }
    return "Here is your " + bread + " with " + qty + " balls of falafel." + str;
}
var myOrder = falafel();

alert(myOrder);
console.log(myOrder);

//fonction falafel 2//

function falafelProdMassive(){
    return "Here is your  pita  with  6  balls of falafel. don't worry, Idid not add you hummus" ;
}
alert(falafelProdMassive);

// fonction falafel 3//

function falafelPerso(bread, qty, hummus){
    var str = "Don't worry, I did not add you hummus.";
    if (hummus) {
        str = " I put you a lot of hummus.";
    } 
    return "Here is your " + bread + " with " + qty + " balls of falafel." + str;
}
alert(falafelPerso("lafa" , 10 , true));
alert(falafelPerso("lbaguette" , 3 , true));


// fonction falafel4//

function falafelPerso(bread, qty, hummus, toppings){
    var str = "Don't worry, I did not add you hummus.";
    if (hummus) {
        str = " I put you a lot of hummus.";
    } 
    if (toppings && toppings.length > 0 && typeof toppings=="object") {
        str += "I added you " + toppings.join(",") + ".";
    }
    str += "Iadded you "+ toppings.join(",") + ".";
    return "Here is your " + bread + " with " + qty + " balls of falafel." + str;
}
alert(falafelPerso("lafa" , 10 , true,["olives" ,"piments fort", "onion"]));
alert(falafelPerso("lbaguette" , 3 , true,"salad, onion"));










