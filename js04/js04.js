console.log("Sesion Js04 Areglos y ciclos");

// Declarar un array 
const nombresCh26 = ["Sofi", "Alejandro", "Ixchel", "Said"];
//Usando el constructor de arreglos
const apellidosCh26 = new Array("Montellano", "Torres", "Vazquez");
const numCajonesEstacionamiento = new Array(4);
const numCohortesActivas = new Array(26,27,28,29);


console.log("Apellido de Serigio "+ apellidosCh26[1] );

// Agregar un nuevo apellido al final del arreglo apellidos
apellidosCh26.push("Ruiz");
console.log(apellidosCh26);

/* 
Matrices (arreglos de 2 dimensiones)
Arrays anidados
[ [], [] , [] ]
*/

const personasEnCohorte = [ 
/* ch26 */    ["Arath" , "Jose" , "Karen" , "Sofi"],
/* ch27 */    ["Manuel" , "Maria" , "Francisco" , "Pablo" , "Pepe"],
/* ch28 */    ["Doris" , "Brendan" , "Lucas"]
];

console.log("Personas ch27: " + personasEnCohorte[1].join(", "));

//Accediento a Francisco
//const temporalch27 = ["Manuel" , "Maria" , "Francisco" , "Pablo" , "Pepe"];
const temporalch27 = personasEnCohorte[1];
const paco = temporalch27[2];
console.log("Extraer en pasos " + paco); // Francisco
console.log("Paco en ch27" + personasEnCohorte[1][2]  ); // Francisco
console.log("Lucas de ch28" + personasEnCohorte[2][2] );
console.log("Karen de ch26" + personasEnCohorte[0][2]);

personasEnCohorte[1][3] = "Juan";
console.log("Personas ch27: " + personasEnCohorte[1].join(", "));

// myArray3D = [[ [],[],[] ], [ [],[],[] ] ]; myArray3D[][][];
// Iterar todos los elements en un arreglo de 2 dimensiones.

for (let fila = 0; fila < personasEnCohorte.length; fila++) {
    console.log(`Indice ${fila}: ${personasEnCohorte[fila]}`)
    for (let columna = 0; columna < personasEnCohorte[fila].length; columna++) {
        console.log(`Nombre: ${personasEnCohorte[fila][columna]}`)
        
    }
}

// usando forEach
personasEnCohorte.forEach( fila => fila .forEach(columna => console.log(columna) ));


//For for
//Ejecuta sentencias por cada elemento de un objeto iterable(array, string y objetos)

const myName = "Omar"
for (let char of myName){
    console.log(char);
}

for(let fila of personasEnCohorte){
    for (let columna of fila){
        console.log(columna);
    }
}

//----------Consideraciones para el ciclo for--------------
/*  No es necesario indicar el inicio, la comparacion y la expresion final */

/* Sintaxis ciclo For:
    for (inicio; comparacion; expresionFinal ){
        sentencias;
    }
 */

// Break: Rompe con la iteracion en curso y sale del ciclo    
    let nIteracion = 0;
    for(/* inicio */; /* Comparacion */ ; /* ExpFinal */){
        console.log(nIteracion);
        if(nIteracion === 5) break;
        nIteracion++;
    }
//----------------------Ejercicio------------------
// Iterar y mostrar a las personas en personasEnCohote y detener cuando se encuentre a Maria
//Dejar de iterar
personas: //se usa un label para indicar en el break hacia que ciclo rompera

for(fila of personasEnCohorte){
    columna:
    for(columna of fila){
        console.log(columna);
        if(columna === "María") break personas; //Se indica el label que rompe
    }
    //if(columna == "María") break; si no se usa el label, se tiene que realizar esto
}

//Continue
/* 
Termina la ejecucion de la sentencia en la iteracion actual y continia la ejecucion del ciclo
con la proxima iteración (o en el label que se indique).
*/

console.log(`==== uso de continue=====`)
personas: 
for(fila of personasEnCohorte){
    for(columna of fila){
        if (columna === "María" || columna === "Maria" ) continue;

            const concatenacion = "Persona " + columna;
            console.log(concatenacion);
              
    }
}



//----------------- Ciclo While-------------------
/* 
Crea un bucle que ejecuta una sentencia mientras la condicion especificada sea verdadera
 Sintaxis:
 while( condicion)
 sentencias; */

 /* let counter = 0;
 while( confirm ("¿Quieres continuar?") ){
    console.log( `Has continuado ${++counter} ${counter>1? "Veces":"Vez"}`)
 } */

 const number = [9,5,6,7];
let i =0;
while(i<number.length){
    console.log(number[i],)
    i++;
}

//----------------Practica------------------
/* 

*/

//---------------- Ciclo do while ------------------
/* 
Crea un bucle que ejecute una sentencia hasta que la condicion de comprobacion se evalue
como falso. La condicion se evalua despues de ejecutar la sentencia, por lo que la sentencia
se ejecuta por lo menos una vez 

Sintaxis:

do{
    sentencias;
} while ( comprobacion) ;

*/

let iteration = 0;
/* do{
    iteration++;
    console.log("N. iteracion do-while: " + iteration);

} while(confirm("¿Deseas Continuar?") ); */


let valor = -2;
while (valor < 5){
    console.log("while " + valor);
    valor ++;
}

valor = 4;
do {
    console.log("Do-while " + valor);
    valor ++;
} while(valor < 5);

/* 
FIFO: first input, first output
LIFO: last input, first output
*/

const alimentos = [];

// Usar FIFO:
alimentos.push("Manzanas del lunes");
alimentos.push("Manzanas del miercoles");
console.log(alimentos);
// Sacar las manzanas
console.log("Sacando las manzanas antiguas: " + alimentos.shift() );
console.log(alimentos);
console.log("Sacando las manzanas antiguas: " + alimentos.shift() );
console.log(alimentos);

//Usar LIFO
const productos = [];

//Temporada"navideñaa
productos.push("Desarmadores");
productos.push("Luces de colores");
console.log(productos);
console.log("Sacando el producto reciente: " + productos.pop ());
console.log(productos);



