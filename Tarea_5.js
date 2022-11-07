//TAREA 5
//Autor: Carlos Retamales A
//Fecha: 2022-06-11

/* Solicitado */
/*
1. Mostrar en consola la secuencia de Fibonacci:
    a. Entre los números 0 y 1000.
    b. Números pares entre 0 y 1000.
    c. Números impares entre 0 y 1000.
2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo
fuego.
*/

/* Desarrollo */
// 1. Mostrar en consola la secuencia de Fibonacci:
//     a. Entre los números 0 y 1000.
//     b. Números pares entre 0 y 1000.
//     c. Números impares entre 0 y 1000.

console.log("1.")

//Función para mostrar la secuencia de Fibonacci de manera recursiva
//Entrada: Número
//Salida: Secuencia de Fibonacci
function fibonacci(numero){
    //Variable para el resultado
    var resultado = 0;
    //Se verifica si el número es 0 o 1 (Casos base)
    if (numero == 0 || numero == 1){
        //Se retorna el número
        return numero;
    }
    //Se llama a la función recursiva
    //dado la fórmula de Fibonacci F(n) = F(n-1) + F(n-2)
    resultado = fibonacci(numero - 1) + fibonacci(numero - 2);
    //Se retorna el resultado
    return resultado;
}


// a. Entre los números 0 y 1000.
//Función para mostrar la secuencia de Fibonacci entre 0 y 1000
//Entrada: Número
//Salida: Secuencia de Fibonacci entre 0 y 1000
function fibonacci_a(numero){
    //Se llama a la función fibonacci anterior
    var resultado = fibonacci(numero);
    //Si el resultado es menor a 1000
    if (resultado < 1000){
        //Se muestra el resultado por consola
        console.log(resultado);
        //Se llama a la función recursiva
        fibonacci_a(numero + 1);
    }
}

// Llamado a la función fibonacci_0_1000
console.log("a.")
fibonacci_a(0);

// b. Números pares entre 0 y 1000.
//Función para mostrar la secuencia de Fibonacci entre 0 y 1000 para números pares
//Entrada: Número
//Salida: Secuencia de Fibonacci entre 0 y 1000 de 2 en 2
function fibonacci_b(numero){
    //Se llama a la función fibonacci anterior
    var resultado = fibonacci(numero);
    //Si el resultado es menor a 1000
    if (resultado < 1000){
        //Si el resultado es par, se asume que el 0 es par, si no tendria que anidarse otra condición
        if (resultado % 2 == 0){ 
            //Se muestra el resultado por consola
            console.log(resultado);
        }
        //Se llama a la función recursiva
        fibonacci_b(numero + 1);
    }
}

// Llamado a la función fibonacci_0_1000_pares
console.log("\nb.")
fibonacci_b(0);

// c. Números impares entre 0 y 1000.
//Función para mostrar la secuencia de Fibonacci entre 0 y 1000 para números impares
//Entrada: Número
//Salida: Secuencia de Fibonacci entre 0 y 1000 para números impares
function fibonacci_c(numero){
    //Se llama a la función fibonacci anterior
    var resultado = fibonacci(numero);
    //Si el resultado es menor a 1000
    if (resultado < 1000){
        //Si el resultado es impar
        if (resultado % 2 != 0){
            //Se muestra el resultado por consola
            console.log(resultado);
        }
        //Se llama a la función recursiva
        fibonacci_c(numero + 1);
    }
}

// Llamado a la función fibonacci_0_1000_impares
console.log("\nc.")
fibonacci_c(0);

console.log("\n2.")

// 2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
//Arreglo de strings
let pokeones =
[
 'Pikachu',
 'Charmander',
 'Bulbasaur',
 'Squirtle'
]

//Función para pasar todo a mayúsculas
//Entrada: Arreglo de strings
//Salida: Arreglo de strings en mayúsculas
function pokeones_a_mayusculas(arreglo){
    //Se recorre el arreglo
    for (var i = 0; i < arreglo.length; i++){
        //Se pasa a mayúsculas
        arreglo[i] = arreglo[i].toUpperCase();
    }
    //Se retorna el arreglo
    return arreglo;
}

// Llamado a la función mayusculas
const pokeones_mayusculas = pokeones_a_mayusculas(pokeones);
//Se muestra el resultado por consola
console.log(pokeones_mayusculas);

console.log("\n3.")

// 3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.
//Arreglo de objetos
let pokemones = [
    {
    nombre: 'Pikachu',
    tipo: 'Electrico'
    },
    {
    nombre: 'Charmander',
    tipo: 'Fuego',
    },
    {
    nombre: 'Bulbasaur',
    tipo: 'Planta'
    },
    {
    nombre: 'Squirtle',
    tipo: 'Agua'
    },
    {
    nombre: 'Charmeleon',
    tipo: 'Fuego'
    },
    {
    nombre: 'Weedle',
    tipo: 'bicho'
    },
    {
    nombre: 'Charizard',
    tipo: 'Fuego'
    }
]
   
//Función para retornar los pokemones tipo fuego
//Entrada: Arreglo de objetos
//Salida: Arreglo de objetos tipo fuego / arreglo de strings(pokemones tipo fuego)
function pokemones_tipo_fuego(arreglo){
    //Arreglo para guardar los pokemones tipo fuego
    var pokemones_fuego = [];
    //*En caso de que solo se necesite del nombre, es decir, pokemones tipo fuego
    var pokemones_fuego_nombre = [];
    //Se recorre el arreglo
    for (var i = 0; i < arreglo.length; i++){
        //Si el tipo es fuego
        if (arreglo[i].tipo == "Fuego"){
            //Se guarda en el arreglo
            pokemones_fuego.push(arreglo[i]);
            //*Se guarda solo el nombre en el arreglo
            pokemones_fuego_nombre.push(arreglo[i].nombre);
        }
    }
    //Se retorna el arreglo dependiendo de lo que se necesite (descomentar)
    return pokemones_fuego;
    //return pokemones_fuego_nombre;
}

// Llamado a la función pokemones_tipo_fuego
const pokemones_fuego = pokemones_tipo_fuego(pokemones);
//Se muestra el resultado por consola
console.log(pokemones_fuego);

