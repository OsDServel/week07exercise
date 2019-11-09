// var myH1 = document.getElementById("Orale");
//    myH1.innerText = " No Mames!";


// var click = document.getElementById("myInput") ;


// function click() {
// 	var myInput = document.getElementById("myInput").Value;
// 	// var myInputValue = myInput.Value;
// }

var myH1= document.getElementById('popcorn');
myH1.innerText= "orange"

otherH1= document.getElementById('stress')

function myFunction(){
	var monkeyVal= document.getElementById('monkey').value;
	console.log(monkeyVal);
	// NOTE: if your gonna console.log something, it has to be inside of the function because it cannot reach outside of itself.
	// NOTE: if you search, "monkeyVal" it will come back as undefined inside of the console, however, the value is still there.
	otherH1.innerText= monkeyVal;
}

var myMind= ['Health', 'Music', 'Spirit', 'Soul', '3rd Eye']

for(i= 0; i< myMind.length; i++){
	console.log(myMind[0]);
	// console.log(myMind[1]);
	// console.log(myMind[2]);
	// console.log(myMind[3]);
	// console.log(myMind[4]);
	//NOTE: do not forget to add a 'break' is a loop, otherwise it will continue to go around and around
	break;

}

// 11.
var pumpkin= [
	{
		name: 'Antonio',
		city: 'Oakland',
		color: 'black'
	},
	{
		name: 'Mayra',
		city: 'San Jose',
		color: 'Orange'
	},
	{
		name: 'Juan',
		city: 'Milpitas',
		color: 'Red'
	}]

// Console logging var pumpkin, at 0 index
	console.log(pumpkin[0]);
// Console logging var pumpkin, at 0 index, property city 
	console.log(pumpkin[0].city);

	console.log(pumpkin[1]);
	console.log(pumpkin[1].color);

	console.log(pumpkin[2]);
	console.log(pumpkin[2].name);

//12.

//13.
// grabbing the element, and storing in variable
var one= document.getElementById('juan');
var two= document.getElementById('foo');
var three= document.getElementById('breathe')

//pushing object values into element variables innertext
one.innerText= pumpkin[0].city;
two.innerText= pumpkin[1].color;
three.innerText= pumpkin[2].name;

//14.
var octopus= [
{
	age: 27,
	name: 'Oscar',
	job: true
},
{
	age: 28,
	name: 'Irvin',
	job: false
},
{
	age: 32,
	name: 'Juan Carlos',
	job: true
}]

for(i= 0; i< octopus.length; i++){
	console.log(octopus[0]);
	console.log(octopus[1]);
	console.log(octopus[2]);
	break;

}

//15. changing color of the body text in Javascript
// var str= document.body;
// document.write(str.fontcolor('red'));

document.body.style.color= 'red';