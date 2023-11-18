'use strcit'
//hacer una funcion que reciba dos parametros (miltiplicador y multiplicando)
//ejecute el bucle para realizar la suma necesaria
//para lograr la multiplicacion. al final returnamos la suma.


function multiplicacion(multiplicador, multiplicando) {
    let suma = 0;
    for (let i = 0; i < multiplicador; i++) {
        suma += multiplicando;
    }
    return suma;
}

// Ejemplo de uso:
let resultado = multiplicacion(4, 6); // Multiplicar 4 por 6
    alert("El resultado es:"+ resultado); // Esto imprimirá "El resultado es: 24"
 