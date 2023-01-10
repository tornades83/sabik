var fName = "";
var blue = false;
var index = 0;
while (fName !== "david" ) {
index++;
fName = prompt("what is your name?");
if(fName ==="david"){
    blue = confirm("please press ok if your eyes are blue");
if (blue === false){
   fName = "";
}
}
}
alert("it took" + index + "tries until we found him!!" );