//EJERCICIO VARIABLE-FUNCION-CONDICIONAL

let num1 = parseInt(prompt("Vamos a sumar dos números. Ingrese el primer número: "))
let num2 = parseInt(prompt("ingrese el segundo número: "))

function sumarNumeros(a, b) {
    let resultado = num1 + num2 
    alert("El resultado de la suma es...")
    return resultado
} 

alert(sumarNumeros(num1, num2))
let resultado = sumarNumeros(num1, num2)

let consulta = prompt('¿Desea multiplicar el resultado por otro número entero?. Responda "si" o "no"')
if (consulta == "si") {
    let multiplo = parseInt(prompt("Ingrese un número para multiplicar su resultado"))
    let resultadoMultiplicacion = resultado * multiplo
    alert("El resultado de la operación es: " + resultadoMultiplicacion)
} else {
    alert("Hasta la próxima")
}





