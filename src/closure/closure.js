function greeting(){
    let userName= 'Daniel';

    function displayUserName(){
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greeting();

console.log(g); //retorna la funcion 
console.log(g()); //retorna el resultado de la función
