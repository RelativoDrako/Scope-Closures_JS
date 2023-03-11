// function moneyBox(coins){
//     let saveCoins =0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);    
// }

// moneyBox(5);
// moneyBox(15);

function moneyBox(){
    let saveCoins =0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(5);
moneyBoxAna(20);

///RETO
function pedido(alimentos){
    let savePedido =[];
    function listaPedido(lista){
        savePedido.push(lista);
        console.log(`Pedido: ${lista}`);
    }
    return listaPedido;
}

const miPedido = pedido();
miPedido("Cafe");
miPedido("Pan");
miPedido("Agua");


//Prueba
export function createPetList() {
    const petList = [];
    return function addPet(myPet) {
      if (myPet) {
        petList.push(myPet);
      }
      return petList;
    } 
  }

///Ejemplos
/*
const maestro = "Dios";

functioncrearFamilia() {
  const abuela = "carlina";

  functionhijosAbuela() {
    const hijoOne = "Martha";
    const hijoTwo = "Evelio";
    const hijoThree = "Rocio";

    functionhijosDeHijosAbuela() {
      const hijosRocio = [{ nombre: "juan" }, { nombre: "andrea" }];
      const hijosMatha = [{ nombre: "Fabian" }, { nombre: "Heidy" }];
      const hijosEvelio = [
        { nombre: "Nathy" },
        { nombre: "Juancho" },
        { nombre: "Santiago" },
      ];
      return {
        generacion: function () {
          console.log(`
${maestro} crea a mi abuela ${abuela}
la abuela tuvo 3 hijos ${hijoOne}${hijoTwo}${hijoThree}
los hijos de la abuela tienen hijos. Rocio: ${hijosRocio[0].nombre} y  ${hijosRocio[1].nombre}
Martha: ${hijosMatha[0].nombre} y  ${hijosMatha[1].nombre}
Evelio: ${hijosEvelio[0].nombre}${hijosEvelio[1].nombre} y ${hijosEvelio[2].nombre}
		`);
        },
      };
    }
    return hijosDeHijosAbuela();
  }
  return hijosAbuela();
}

const generar = crearFamilia();
console.log(generar.generacion());


///V2
const maestro = "Dios";

functioncrearFamilia() {
  const abuela = "carlina";

  functionhijosAbuela() {
    const hijoOne = "Martha";
    const hijoTwo = "Evelio";
    const hijoThree = "Rocio";

    functionhijosDeHijosAbuela() {
      const nietos = [
        {
          hijosRocio1: "juan",
          hijosRocio2: "andrea",
          hijosMatha1: "Fabian",
          hijosMatha2: "Heidy",
          hijosEvelio1: "Nathy",
          hijosEvelio2: "Juancho",
          hijosEvelio3: "Santiago",
        },
      ];
      return {
        generacion: function () {
          nietos.map((nieto) => {
            console.log(
              `${maestro} crea a mi abuela ${abuela}
              la abuela tuvo 3 hijos ${hijoOne}, ${hijoTwo}, ${hijoThree}
              los hijos de la abuela tienen hijos. Hijos de ${hijoThree}: ${nieto.hijosRocio1} y ${nieto.hijosRocio2}, 
              Los hijos de ${hijoOne}: ${nieto.hijosMatha1} y ${nieto.hijosMatha2} 
              y por ultimo tenemos a los hijos de ${hijoTwo} que son: ${nieto.hijosEvelio1}, ${nieto.hijosEvelio2} y ${nieto.hijosEvelio3}`
            );
          });
        },
      };
    }
    return hijosDeHijosAbuela();
  }
  return hijosAbuela();
}

const generar = crearFamilia();
console.log(generar.generacion());
*/