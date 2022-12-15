// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimo = array.pop()
  return ultimo
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  
  var largo= array.length
  return largo

}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var enteromasuno=[]
  for (var i=0; i<array.length; i++){
    enteromasuno.push(array[i]+1)
  }
return enteromasuno
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push (elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift (elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = ""
  var i;
  for (i=0;i<palabras.length-1;i++) {
     frase = frase + palabras[i]+ " "
  }
  frase = frase + palabras[i]
  return frase
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (i=0;i<array.length;i++) {
    if (array[i]==elemento){
      return true
    }
  }
  return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0
  for (i=0;i<numeros.length;i++) {
    suma=numeros[i]+suma
  }
  return suma
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0
  for (i=0;i<resultadosTest.length;i++) {
    suma = suma + resultadosTest[i]
  }
  return suma / resultadosTest.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeroMayor = 0
  for (i=0; i<numeros.length; i++) {
    if (numeros[i] > numeroMayor) {
      numeroMayor = numeros[i]
    }
  }
  return numeroMayor
  

}

var resultadoCero = multiplicarArgumentos();
var resultadoQuince = multiplicarArgumentos(15);
var resultadoDos = multiplicarArgumentos(2, 1);
var resultadoCuatro = multiplicarArgumentos(2, 1, 2);
var resultadoDoce = multiplicarArgumentos(2, 1, 2, 3);

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var resultado=1
  if (arguments.length==0){
    return 0
  }else if (arguments.length ==1){
    return arguments[0]
  }else {
    for (i=0;i<arguments.length;i++){
      resultado=resultado*arguments[i]
    }
    return resultado
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var numerosMayor18=[]
  for (i=0;i<arreglo.length;i++) {
    if (arreglo[i] >18) {
      numerosMayor18.push(arreglo[i])
    }
  }
  return numerosMayor18.length
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia==1 || numeroDeDia==7){
    return "Es fin de semana"
  }
  return "Es dia Laboral"
  }
 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (n==9 || n>=90 && n<100 ){
    return true
  }
  return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
var numero=arreglo[0]
for (i=1;i<arreglo.length;i++){
  if (numero!=arreglo[1]){
    return false
  }
  return true
}
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var tresmeses= []
  var Enero= false
  var Marzo= false
  var Noviembre=false
  for (i=0;i<array.length;i++){
    if (array[i]=="Enero"){
      Enero = true
      tresmeses.push("Enero")
    }else if (array[i]=="Marzo"){
      Marzo = true
      tresmeses.push("Marzo")
    }else if (array[i]=="Noviembre"){
      Noviembre = true
      tresmeses.push("Noviembre")
    }
  }
  if (Enero==true && Marzo==true && Noviembre==true) {
    return tresmeses
  }
  else {
    return "No se encontraron los meses pedidos"
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoarray=[]
  for (i=0; i<array.length; i++){
    if (array[i]>100){
      nuevoarray.push(array[i])
    }
  }
  return nuevoarray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoarray=[]
  var nuevonumero=numero
  for (i=0; i<10; i++){
    nuevonumero=nuevonumero+2
    if (i==nuevonumero){
      return "Se interrumpió la ejecución"
    }else{
      nuevoarray.push(nuevonumero)
    }
  }
  return nuevoarray
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoarray=[]
  var nuevonumero=numero
  for (i=0; i<10; i++){
    if (i==5) {
      continue
    }
    else {
      nuevonumero=nuevonumero+2
      nuevoarray.push(nuevonumero)
    }
  }
  return nuevoarray
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
