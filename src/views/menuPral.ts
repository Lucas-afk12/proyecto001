import { leerTeclado } from './teclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- pasar a binario / hexadecimal / base cualquiera')
    console.log('2.- McM y McD')
    console.log('3.- calcula tu Edad')
    console.log("4.- Comprueba si un numero es primo")
    console.log("5.- Ordenar una serie de numeros")
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}