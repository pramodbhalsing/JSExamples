name=prompt("Enter your name please !");
var nameWithSlice= name.slice(0,1);
var namecaptilize= nameWithSlice.toUpperCase();
var nameWithRemaining= name.slice(1,(name.length+1));

var rightName= namecaptilize+nameWithRemaining;
alert(rightName);
