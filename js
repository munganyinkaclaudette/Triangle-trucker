function getResult(){
var firstside= parseFloat(prompt("first side"));
var secondside = parseFloat(prompt("second side"));
var thirdside= parseFloat(prompt("third side"));
/* var determine = function(first side,second side, third side){
if (first side===  second side=== second side === adjacent){
alert("Equilateral");
}
else if ((hypotenuse === opposite && opposite === adjacent) (hypotenuse != adjacent && opposite !== adjacent));
alert("Isosceles");
}
determine(); */


if(hypotenuse === opposite && hypotenuse === hypotenuse && opposite === adjacent){
alert("Equilateral");
}
else if(hypotenuse === opposite || hypotenuse === adjacent || opposite === adjacent){
alert("Isosceles");
}
else if((hypotenuse + opposite) <= adjacent || (hypotenuse + adjacent) <= opposite || (opposite + adjacent) <= hypotenuse) {
alert("Not a definite triangle");
}
else{
alert("Scalene");
}
}
