function convertertButton() {
 let dollar = document.getElementById("myText").value;

 //let dollarToNumber = input convert to number;

 dollar = parseInt(dollar);
 let value = 10470.13;
 let convert = dollar * value;
 // 12345.12
 let roundNum = Math.round(convert, 2)


 document.getElementById("demo").innerHTML = roundNum + " UZS";




} 