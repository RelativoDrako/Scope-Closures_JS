///npm init -y
/*Closure es la propiedad que permite 
acceder al ámbito de una funcion exterior
desde una función interior
Las clausuras se crean cuando se crea una función
*/
const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){ //función interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }    
    return parent();
}
myFunction();

/*
En este desafío recibirás dos números aleatorios por parámetros.

Usando las closures deberás crear una función a la cual se pueda llamar en primer lugar con un solo número y secuencialmente volver a llamarla para completar la suma con el siguiente número:

La solución deberá tener un input y output como la siguiente, en algunos casos puede que no se mande el segundo número por lo que deberás pensar en como manejar ese tipo de casos.

Input:

sumWithClosure(2)(3);

Output:

5

Input:

sumWithClosure(90)();

Output:

90
*/

export function sumWithClosure(firstNum) {
    // Tu código aquí 👈
      let a = firstNum;
      return function (secondNum) {
        let b = secondNum;
        if (!b) {
          return a;
        } else {
          return a + b;
        }
      }
    }
  