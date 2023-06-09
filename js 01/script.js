console.log("Sesion JS01");

// Son 7 datos primitivos:
// String: "Hola"
console.log("Tipo de dato String: ", "Hola");

// Number: 12, -45, 367.12, +Infinity, -Infinity, NaN
// Los numéricos usan 64 bits para almacenar, pero solo se usan 53 bits
// para representar el número.
console.log("Tipo de dato Number: ", 12, -45, 367.12, 45/0, -56/0, 56*"hola");
console.log("Valor máximo: ", Number.MAX_VALUE);
console.log("Valor seguro: ", Number.MAX_SAFE_INTEGER);

// BigInt
// Sirven para representar valor numéricos enteros, de los que el tipo number
// no puedo representar o no es seguro.
console.log("MAX_SAFE_INTEGER + 1 : ", Number.MAX_SAFE_INTEGER + 1);
console.log("MAX_SAFE_INTEGER + 2 : ", Number.MAX_SAFE_INTEGER + 2); //No representa el valor
let myBigInt = 9007199254740991n; // se agrega la letra n al final
console.log("Valor de dato BigInt: ", myBigInt);
console.log("MAX_SAFE_INTEGER + 1n", myBigInt + 1n );
console.log("MAX_SAFE_INTEGER + 1n", myBigInt + 2n );

// Boolean
// Tenemos solo 2 estados: true/false
console.log("Tipo de dato boolean: ", true);
console.log("Tipo de dato boolean: ", false);

// Undefined
// Un dato que es declarado, pero no definido en el tipo
let myVar; // solo se declara
console.log("Tipo de dato undefined: ", myVar);

// null
// Intensionalmente se borra el tipo de dato
let myVarNull; // solo se declara
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) ); // undefined
myVarNull = "Saludos Sr. PP"; // se asigna un dato string
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) ); // string
myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) ); // object

// symbol
// crea propiedades privadas en los objetos.

// -----------------------------------------------------------
// Tipos de datos Object
// Object:
const misDatosDePerfil = {
    // clave: valor
    nombre: "Omar",
    apellido: "Michaca",
    edad: 27,
    isBelicoso: false,
    musicaPreferidaPorGenero: {
        rock: "La celula que explota",
        corridosTumbados: "Ella baila sola"
    },
    nombreCompleto: function fullName(){
        //return misDatosDePerfil.nombre +" " + misDatosDePerfil.apellido + ", soy el belicón";
        return this.nombre +" " + this.apellido + ", soy el belicón";
    }
}

const miInstagram = {
    // clave: valor
    nombre: "El Belicoso",
    apellido: "666",
    edad: null,
    isBelicoso: true,
    musicaPreferidaPorGenero: {
        corridosTumbados: "El belicoso"
    },
    nombreCompleto: function fullName(){
        //return misDatosDePerfil.nombre +" " + misDatosDePerfil.apellido + ", soy el belicón";
        return this.nombre +" " + this.apellido + ", soy el belicón";
    }
}

console.log("Datos completos: ", misDatosDePerfil );
console.log("Nombre: ", misDatosDePerfil.nombre );
console.log("Música de fin de semana: ", misDatosDePerfil.musicaPreferidaPorGenero.corridosTumbados);

console.log("Nombre completo: ", misDatosDePerfil.nombreCompleto() );
console.log("Nombre completo: ", miInstagram.nombreCompleto() );

// Array
// Almacena difentes tipos de datos, su primer elemento es el indice 0

const cancionesPP = [ 
    "Soy el Belicón",
    "El azul",
    "El Tsurito",
    "AMG",
    {
      2020: 5,
      2021: 30,
      2022: 56,
      total: 91
    }
];

console.log("Canción con color: ", cancionesPP[1]);
console.log("Canciones hechas en el año 2021: ", cancionesPP[4].total );
console.log("Canciones hechas en el año 2021: ", cancionesPP[4]["total"] );
console.log("Canciones hechas en el año 2021: ", cancionesPP[4][2021] );
console.log("Canciones hechas en el año 2021: ", cancionesPP[4]["2021"] );

console.log("Num total de elementos", cancionesPP.length);
console.log("Contiene la canción AMG: ", cancionesPP.indexOf("AMG")>-1 );

// -------------------------------------------------
//conversion de datos
const myNumber = 420; // Minutos en la sesion JS 01
console.log("Num. minutos en la sesion:" + myNumber);
//toString
const myNumberTxt = String(myNumber);
console.log("Num. minutos en la sesion:" + myNumberTxt);

//toNumber
const myString = "420";
const sumatoria = 80 + Number(myString);
console.log("Valor de sumatoria: " + sumatoria); // 500

//toParseInt
const myStringInteger = "420.5768";
const sumatoriaEntera = 80 + parseInt(myString);
console.log("Valor de sumatoria entera: " + sumatoriaEntera);// 500

//ToBoolean
const isBelicoso = "false"
console.log( typeof isBelicoso);
console.log( Boolean (isBelicoso));

if (isBelicoso === "false" )
    console.log("Denle su belikin");
else
    console.log("Abra paso a la barredora")

//boolean
//para que sea false, debe ser: "", 0, null, undefined
//number
//[] = 0, [30] = 30, [3,1] = Nan, false = 0, true=1
//String
//[]= "", [1,2] = "1,2", function()() = function(){}, {} = [object]

























