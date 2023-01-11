// array trouver moi la voiture..

const Cars = ["Honda", "Mazda", "Toyota", "Suzuki", "Yamaha", "Nissan"]; //(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)(13)
var word = "Meir Sabbah"                              //(9)(10)(11)(12)(13)
//var question = prompt( "what car would you like to know if I own in my collection").toLowerCase   ();                                                  //honda -- HONDA  (1)(2)(3)
// var question = prompt(
    // "what car would you like to know if I own in my collection"
// );                                                  //(4)
//var result = word.split(" ")                             //['meir , "Sabbah" , "is" , ] (11)
//var result = word.split("")                         //[m,e,i,r,s,](12)
result = result.reverse()                           // (13)
// var result = Cars.includes(question)             //true-false  (2)
//var result = Cars.indexOf(question)               //savoir ou il est placer l'object. (3)
// var result = Cars.join(" ;)\n")    //(",") //                  // il prent tous les voiture et il nous donne tous les object et les colle ensemble. (4)
//Cars.pop()                                   //enlever le dernier element. (5)
// Cars.sort()                                    //met les object en ordre alphabetique. (6)
// Cars.reverse()                                 //met les object a l'enver.(7)
// alert(Cars.slice(1,3))                            //sa donne une tranche du array ex:(1 , 3)le 3 il ne donne pas il donne le 1 et le 2.(8)
//alert(Cars.toUppercase()); //(4)
//alert(word[word.length - 1])                        //il donne la position par raport au letre du nom. (9)
alert(word.indexOf("a"))                       // il donne par rapor a la letre qui est entre paranteze. (10)(11)
alert(result.join(""))                         //(13)
// var result = "non";                             //(1)
// for (let i = 0; i < Cars.length; i++) {            
// if (Cars[i].toLowerCase() === question) {
// result = "oui";
// break;
// }
// }
//alert(result);    //(1)(2)






// array..

// const Cars = [];
// while(!qty){ var qty = parseInt(prompt("How many cars do you have?"));         //4
// }
// for (let i = 0; i < qty; i++){
    // const car = prompt("please enter your car #" + (i + 1));                 // Ferrari, Porche, BMW
    // Cars.push(car);
// }

// console.log(Cars);



// const ..

// const car = {make: "Honda" , model: "Civic"};
// car.model = "accord";                          //on peut modifier la constance le model ex: civic=accord.changer son nom.

///////////////
// const titi = 5;                                //constance bloque la valeur. on peut pas l'ecraser .
// sa ne change jamais



// fullname (object)..

// var fName = "Meir";
// var lName = "Sabbah";
// var age = 87;
// var married = true;


// const prof = {
    // fullName: {fName: "Meir" , lName: "Sabbah"},
    // age: 87,
    // married: true,
// };

// window.alert(prof.fullName);// object Object




// boucle for (fromage ou gateaux)..

//  for(let i = 0; i < 10; i++){                         //let block le i ou toute letre   var on peut reutiliser la letre  .
// console.log("this is my" + (i + 1) + "time in the loop")
// }

// console.log("on commence bientot...");




// boucle le chifre 26..

// for (let i = 0; i < 10; i++) {
    // var num = parseInt(prompt("enter a number"));
    // console.log((i + 1) + ") -  " + num);
    // if (!num || num < 0) {
        // continue;
    // }
    // var sum = 0;
    // while (num != 0) {
        // var last = num % 10;
        // sum += last;
        // num = Math.floor(num / 10);
    // }
    // console.log("the sum of prompt #" + (i + 1) + "is" + sum);
    // if (sum === 26) {
        // console.log("magic number found!!!");
        // break;
    // }
// }
// console.log("on a fini");




//ex: eyesblue 1..

// var qty = 0;
// do {
    // qty++;
    // var fName = prompt("enter your name").toUpperCase();
    // if (fName === "DAVID") {
        // if (confirm("please press OK if your eyes are blue.") === false); {
            // fName = "";
        // }
    // }
// } while (fName != "DAVID");

// alert("it took" + qty + "tries until we found him!");




// ex: eyesblue 2..

//var qty = 0;
// var fName = "";
// var blue = false;
// while(fName != "DAVID"){
// qyy++
// fName = prompt("Enter your name").toUpperCase();

// if (fName === "DAVID"){
// blue = confirm("please press OK if your eyes are blue.");

// if(blue === true){
// break;
// }
// fName = "";
// }
// }

// alert("it took" + qty + "tries until we found him!");