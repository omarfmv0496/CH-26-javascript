console.log("Sesion Js03");

// ----- Declaración de bloque --------------------

{
    /*
    Las variables declaradas con let y const
    solo tendrán alcance(scope) dentro del bloque
    o bloques anidados.

    */
 let nombre = "Sergio";
 const apellido = "Torres";
 let edadSergio = 39, edadLuis = 25; 
 // let edadSergio = 39;
 // let edadLuis = 25;
 let numCohorteSergio = numCohorteLuis = 26;

   {
    /*
     bloque anidado
     Si una variable local tiene el mismo nombre de
     una varible global o de bloque superior, la varible
     local oculta las otras variables, para que la variable
     local sea usada.
     */
    let nombre = "Luis";
    const apellido = "SP";  
    console.log(`Me llamo ${nombre} ${apellido}`);
    console.log(`Sergio: ${edadSergio} años`); // 39
    console.log(`Luis ${edadLuis} años`) // 25
    console.log(`Sergio cohorte: ${numCohorteSergio} `); // 26
    console.log(`Luis cohorte ${numCohorteLuis} `) // 26

}
console.log(`Me llamo ${nombre} ${apellido}`);
console.log(`Sergio: ${edadSergio} años`); // 39
console.log(`Luis ${edadLuis} años`) // 25
console.log(`Sergio cohorte: ${numCohorteSergio} `); // 26
console.log(`Luis cohorte ${numCohorteLuis} `) // 26
}
//console.log(`Me llamo ${nombre} ${apellido}`); Las variables no estaán definidas
//console.log(`Sergio: ${edadSergio} años`); // Las variables no estaán definidas
//console.log(`Luis ${edadLuis} años`) // Las variables no estaán definidas
console.log(`Luis cohorte ${numCohorteLuis} `) // 
//console.log(`Sergio cohorte: ${numCohorteSergio} `); // 





const temperatura = 100;
let mensaje;

/* if (temperatura === 21) mensaje = `Temperatura ideal ${temperatura}`;
else mensaje = `${temperatura} grados no es ideal `; */

if (temperatura === 21) 
  mensaje = `Temperatura ideal ${temperatura}`; 
else if( temperatura>21 >40) 
  mensaje = `Temperatura de ${temperatura} grados es caliente`;
else if( temperatura<21) 
  mensaje = `Temperatura de ${temperatura} grados es fría`;
else 
  mensaje = `Temperatura de ${temperatura} grados no existe`;

console.log(mensaje);

/* ---------------Ejercicio ---------------
 preguntar por el num de mes, del 1 al 12 (prompt o DOM)
 de acuerdo al mes desplegar en un alert (o DOM) la estacion del año.

 mes 12, 1, 2 = invierno
 mes 3, 4, 5 = primavera
 mes 6, 7, 8 = verano
 mes 9, 10, 11 = otoño
 
 Usar if-else
 */

 const getEstacion = ()=>{
    const refMes = document.getElementById("mes");
    console.log(refMes.value); 
 }

 //------------------------switch-------------------
 /* 
 La instruccion switch evalua una expresion y se compara con 
 el valor de cada instancia en `case` y se ejecuta las sentencias
  asociadas a ese `case` hasta que se encuentre la sentencia `break`.

  Sintaxis:
        switch (expresion){
            case valor1:
                sentencias;
                break;
            case valor 2:
                sentencias;
                break;
            case valor n:
                sentencias;
                break;
            default:
                sentencias;
                break;
        }
 */


const setVelocidadVentilador= ( velocidad) => {
    let msj;
     switch (velocidad){
        case 0:
            msj = "Apagado";
            break;
        case 1:
            msj = "Velocidad baja";
            break;
        case 2:
            msj = "Velocidad media";
            break;
        case 3:
            msj = "Velocidad alta";
            break;
        case 4: 
        case 5:
            msj = "Velocidad super alta";
            break;
        default:
            msj = "el nivel no existe";
            break;
    }
    return msj;
 }

console.log(`El ventilador esta en ${setVelocidadVentilador(2)}`);


//--------------Practica-----------------------
// Refactorizar el ejercicio anterior

const month = parseInt(prompt("Ingresa un número de mes del 1 al 12:"));

switch (month) {
  case 12:
  case 1:
  case 2:
    alert("Es invierno.");
    break;
  case 3:
  case 4:
  case 5:
    alert("Es primavera.");
    break;
  case 6:
  case 7:
  case 8:
    alert("Es verano.");
    break;
  case 9:
  case 10:
  case 11:
    alert("Es otoño.");
    break;
  default:
    alert("Número de mes no válido.");
    break;

    
}

console.log(month);


//-----------------Operador condicional ternario----------------

/* 
Es el unico operador de JavaScript que tiene 3 operandos. Generalmente se usa
como opcion a la sentencia if-else.

Sintaxis:

condicion ? expresionSiCondicionEsVerdadera : expresionSiCondicionEsFalsa;


*/

const subtotal = 1_000;
const pagoTarjetaCredito = true;
/* let msj;
if(pagoTarjetaCredito) msj= subtotal*1.025;
else msj = subtotal* 1; */

console.log(`La cuenta es de ${pagoTarjetaCredito ? subtotal*1.025 : subtotal*1} pesos` );


const edad = 18;
// Se permite el acceso al antro de mala muerte?
console.log(`Acceso ${ edad>= 18? "Permitido": "Denegado"}`);


// ------------ Practica ---------------------------------
// Refactorizar el ejercicio con un operador ternario
/*
Saludo 1
Saludo 2
Saludo 3
 ...
Saludo 10

saludo(10);
*/

/* function saludo(numero) {
    if (numero > 1) {
      saludo(numero - 1);
    }
    console.log("Saludo " + numero);
  }
  
  saludo(10); */

  function saludo(cantidad){
    if(cantidad == 0){
      return;
    }
    else{
      saludo(cantidad-1);
    }
    console.log(`Saludo ${cantidad}`);
  }
  
  saludo(10);


  const printGreetings = number => {
    let result = (number > 1) ? printGreetings(number-1) : number;
    console.log("Greeting", result);
    return number+1;
};
printGreetings(10);
