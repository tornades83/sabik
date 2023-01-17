const Students = [];
const Results = [];
const Passed = [];
var avgPassed = 0;
var avgFailed = 0;
// while(!qty) var qty = parseInt(prompt("how many students?"));  //NaN
var qty = parseInt(prompt("how many students ?" ));

for (let i = 0; i < qty; i++) {
    var fName = prompt("enter the student's name.");
    var note = parseInt(prompt("enter the Student's result"));
    Students.push(fName);
    Results.push(note);
    if (note >= 70) {
        Passed.push(fName);
        avgPassed += note;
        // continue;
        // break;
     }else {
        avgFailed += note;
    }
}


alert(Passed);  //[meir ,jimmy,pascal]

// var last = Passed.pop();     //[meir, jimmy, pascal]

var last = Passed.unshift("Pascal");  //[pascal.meir,jinny,pascal]

//  console.log(Passed);

Passed.sort();

//  console.log(Passed);

alert(Passed);

alert(
    "the students who passed are :" + Passed.join(",") + ".\nthw average of theur results is:" +
    avgPassed / Passed.length + "\nthe average of the students who failed is: " +
    avgFailed / (qty - Passed.length)
 );

