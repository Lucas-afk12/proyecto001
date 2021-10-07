import { menuPral } from './views/menuPral'
import { leerTeclado } from './views/teclado'

const main = async () => {
    let n: number
    let n1: number , n2: number ;
    let x: number;
    let d1: Date 

    do {

        n =  await menuPral() 
    
        switch(n){

            case 1:

                n1 = parseInt( await leerTeclado('Dame un número')) 

                console.log("1.- Binario");

                console.log("2.- Hexadecimal");

                console.log("3.- Seleccionar base")
                
                console.log("4.- Atras");

                x=parseInt( await leerTeclado('Elige una opcion:'))

                console.log( `la conversion seria igual a= ${await conversion(x, n1)}`)

                break

            case 2:

                n1 =  parseInt( await leerTeclado('Dame un número')) ;

                n2 =  parseInt( await leerTeclado('Dame otro número')) ;

                console.log( await mc(n1, n2)) ;

                break

            case 3:
                

                d1 = new Date( await leerTeclado('Introduce la fecha de tu cumpleaños'))

                console.log(`tienes: ${await edad(d1)} años`)
                
                break
            
            case 4:

                n1 =  parseInt( await leerTeclado('Dame un número')) ;

                console.log( await primo(n1) )

            break

        case 5: 
                
        console.log( await ordenar())

            break
        case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}


const conversion = async (x:number , n1:number) => {

    let n:number
         
    if (x == 1){
  
      return n1.toString(2)  
  
    }
  
    else if (x==2) {
  
      return n1.toString(16)  
  
    }else if(x==3){

        n = parseInt (await leerTeclado("Indica a que base quieres pasar el numero"))

        return n1.toString(n)

    }else if (x!= 1 && x!=2 && x!=3) {
        console.log("adios")
     }}
     
const mc = async (n1: number, n2: number) => {
    let n3: any
    let temporal; 
    let n4 = n2
    let n5 = n1
    while (n2 != 0) {
      
        temporal = n2;
        n2 = n1 % n2;
        n1 = temporal;
    }

    let final = `el mcm es= ${n1} y el mcd es= ${(n4*n5)/n1}`
    return final  


    //Para practicar un poco saque tambien el resultado desde un objeto, aunque no sea lo mas eficiente ya que se puede realizar en menos pasos

    // interface Resultado{
       
    //     mcm: number;
    //     mcd: number;
    // }
    
    // let resultado: Resultado = {
      
    //    mcm: n1,
    //    mcd : (n4*n5)/n1
    // };
    
    // let final = `el mcm es= ${resulado.mcm} y el mcd es= ${resultado.mcd}`
    //     return final
      
}

const edad = async (d1:Date) => {

    let edad : number
    let d2 : Date
    let falta : number

    d2 = new Date()

    let resta = d2.getTime() - d1.getTime()

    return(Math.round(resta / (1000*60*60*24)/365))

}

const primo = async (n1:number) => {

    for (var i = 2; i < n1; i++) {
        if (n1%i==0){
            return `el numero ${n1} no es primo`;
        }
    };
    return `el numero ${n1}  es primo`;
}

const ordenar = async () => {
    console.log("introduce los numeros que quieras ordenar cuando quieras parar de agregar numeros introduce el valor 0")
                
    let n3 : number 
    let numero = [] 
    n3= 2

    while (n3!=0){

        n3 =  parseInt( await leerTeclado('Dame un número')) 

        numero.push(n3)
    }

    console.log("1.-para ordenarlo de menor a mayor")

    console.log("2.-para ordenarlo de mayor a menor")

    let orden =  parseInt( await leerTeclado('Elige 1  o 2 para ordenarloe de mayor a menor'))

    if (orden == 1){

        numero.pop()

        return(numero.sort(function(a, b){return a-b}))

    } else if (orden == 2){

        numero.pop()
        
        return(numero.sort(function(a, b){return b-a}))
    
    } else if (orden != 1 && orden != 2) {
        
        console.log("Ingresa un valor correcto")
    } 
}



main()
