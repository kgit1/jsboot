
var userName = prompt("what is your name");
alert("Hello "+userName+", from a js file");
console.log("Hello "+userName+", in the console from a js file");
var userLastName = prompt("What is your last name?");
var userAge = prompt("How old are you?");
console.log("User profile\nName: " + userName + "\nLastName: " + userLastName 
	+ "\nAge: " + userAge + "\n" + userAge + " years = " + userAge*365.25 + " days");

console.log("-------------------------------------------");

if(userAge<=0){
	console.log("Error, age can\'t be negative");
}
if(Number(userAge)===21){
	console.log("Happy 21st bithday!");
}
if(userAge%2!==0){
	console.log("Your age is odd");
}
if(Math.sqrt(userAge)%1===0){
	console.log("Perfect square!");
}

var allData=userName+" "+userLastName+" "+userAge;
var count=0;
while(count<allData.length){
	console.log(allData[count]);
	count++;
}

allData="";
count =-10;
while(count<=19){
	allData+=" "+count;
	count++;
}
console.log(allData);

allData="";
count =10;
while(count<=40){
	// if(count%2===0){
	// 	allData+=" "+count;
	// }
	// count++;
	allData+=" "+count;
	count+=2;
}
console.log(allData);

allData="";
count =300;
while(count<=333){
	if(count%2!==0){
		allData+=" "+count;
	}
	count++;
}
console.log(allData);

allData="";
count =5;
while(count<=50){
	if(count%5===0 && count%3===0){
		allData+=" "+count;
	} 
	count++;
}
console.log(allData);

var count=0;
var exp =10;
var number=2;
var result=1;
console.log("While_______________________________");
while(count<exp){
	result*=number;
	console.log(count+": " +result);
	count++;
}

console.log("For_______________________________");
result=1;
for(var i=0;i<exp;i++){
	result*=number;
	console.log(i+": "+result);
}

console.log("Do While_______________________________")
result=1;
count=20;
exp=19;
do{
	result*=number;
	console.log(count+": "+result);
}while(count<exp);

var answer="stop";
var input="";
do{
	input=prompt("Say stop");
	console.log("Say stop: - "+input);
}while(input!=answer);