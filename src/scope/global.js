//variables

var a; //declarando variable
var b = 'b'; //declaración / asignación
b = 'bb'; //reasignación

// Global scope
var fruit = 'Apple';//variable global
console.log(fruit);

function bestFruit()
{
    console.log(fruit);
}

bestFruit();


function countries()
{
    country= 'Colombia';    //global
    console.log(country);
}

countries();
console.log(country);
