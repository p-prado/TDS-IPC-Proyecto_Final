//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%


//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0


//Realizar el siguiente código mientras el usuario no ingrese "SALIR" en el último prompt.
var user_decision
while (user_decision != "SALIR") {

//Mensajes de alerta para ingresar datos
var nombre = prompt("Por favor, ingrese su nombre.")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números.")
var casado = prompt("¿Está casado actualmente?", "Si/No")

//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge a números, si está casado
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?", "Si/No")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if ("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("¿Cuántos hijos e hijas tiene?")
}
//1. Convirtiendo la cantidad de hijos a número.
var cantidad_hijos_numero = parseInt(cantidad_hijos)

//Preguntar la cantidad de propiedades
var cantidad_propiedades = prompt("¿Cuántas propiedades posée? Ingrese solo números.")
//Convertir la respuesta a un número
var cantidad_propiedades_numero = parseInt(cantidad_propiedades)


//Preguntar el salario
var salario = prompt("¿Cuál es su salario? Ingrese solo números.")
//Convertir la respuesta a número
var salario_numero = parseInt(salario)


//Calcular el recargo total basado en las respuestas ingresadas.

//Recargo por edad del asegurado
if(edad_numero>=18 && edad_numero<25){
  recargo = precio_base * edad_18
  recargo_total = recargo_total + recargo
} else if (edad_numero >= 25 && edad_numero < 50){
  recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo
} else if (edad_numero >= 50){
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo
}

//2. Recargo por la edad del conyuge
if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
  recargo = precio_base * casado_18
  recargo_total = recargo_total + recargo
} else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
  recargo = precio_base * casado_25
  recargo_total = recargo_total + recargo
} else if (edad_conyuge_numero >= 50) {
  recargo = precio_base * casado_50
  recargo_total = recargo_total + recargo
}

//3. Recargo por la cantidad de hijos
if (cantidad_hijos_numero > 0) {
  recargo = precio_base * (cantidad_hijos_numero * 0.2) //Recargo de %20 del precio base por cada hijo.
  recargo_total = recargo_total + recargo
}

//Recargo por la cantidad de propiedades
if (cantidad_propiedades_numero > 0){
  recargo = precio_base * (cantidad_propiedades_numero * 0.35)
  recargo_total = recargo_total + recargo
}

//Recargo por los ingresos
if (salario_numero) {
  recargo = salario_numero * 0.05
  recargo_total = recargo_total + recargo
}

precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo adicional será de: "+recargo_total)
alert ("El precio total será de: "+precio_final)

//Prompt preguntando al usuario si quiere generar otra cotización o SALIR.
user_decision = prompt("¿Desea generar otra cotización? Si quiere salir, ingrese 'SALIR'", "SALIR")
user_decision = user_decision.toUpperCase()
} //while