// function sayHello(){
// 	console.log("Hello world!");
// }

function sayHello(name){
	//to prevent undefined name
	//if name undefined(undefined = false),
	//than second part assign "Guest" to name var
	name = name || "Guest";
	print("Hello " +name + "!");
}

sayHello();
sayHello();
sayHello(prompt("What is your name"));