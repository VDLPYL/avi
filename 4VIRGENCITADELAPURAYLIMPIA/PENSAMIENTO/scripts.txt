// Esto es un comentario de una linea
/* Este es un comentario de varias lineas */

/**
* Este también es un comentario de bloque
* 
*/



/** TIPOS DE DATOS
* NUMBER  { console.log(typeof 50)} - Para todos los tipos de números. Enteros o decimales    
* STRING - Cadena de texto "VIRGENCITA DE LA PURA Y LIMPIA", se puede escribir con 'comillas simples' o "comillas dobles"       
* BOOLEAN - false, true { console.log(typeof true)}
* 
* 

** Colecciones de Datos (identificador) que tiene un identificador (0) y un valor ("José")    
// ARRAY (Arreglo) console.log (["José", "Juan", "Jean", "Oto"])   

// OBJETOS
* console.log (typeof {
               nombre: "Beto",
               apellido: "Quiroga"
              })

Dato-> // NULO -> null
               console.log (typeof null) { también me dice que este Tipo de Dato es un Objeto)    


// (typeof -> Es para ver, de que tipo son estos datos
*/


/*2.4- Declaración y Asignación
Tipo de Dato - No definido -> undefined {console.log (typeof undefined)}

Variable-> Las variables son espacios reservados en memoria para poder almacenar información -> para poder almacenar datos, en espacios reservados de memoria y luego posteriormente reutilizarlos he incluso reasignarlos.                                
// Declaración {de una variable} 
   {var alumno} {let alumno}
// Asignación 
   {alumno = "Beto Quiroga"}
// Declaración y Asignación
   let profesor = "Alexys Lozada"
       console.log (profesor)
// Reasignación -> Es darle un nuevo nombre a las variables.
   profesor = "Alvaro Felipe"

   console.log (profesor)
   console.log (typeof profesor)  {profesor=874} -> console number     
*/

/**
 * ASIGNACIÓN POR REFERENCIA
   let profesor = "Alexys"
   let alumno  =  profesor
   profesor  =  "Alvaro"
   alumno  =  "Beto"
   
   console.log ("profesor")
   vonsole.log ("alumno")
  */





/** 2.6 - Constantes -> Son valores que no cambian
  * 
     const NOMBRE_EMPRESA = "EDteam"
     const SITIO_WEB = "https://ed.team"
  */


/** 3.1- Operadores aritméticos {7:06m} básicas
         //   +   -   *   /   %
         //   % Este es el operador de residuo

Ejercicio 1   let operacion = 50 {+ - * / %} 60
              console.log (operacion)



Ejercicio 2   let numero1 = 10 - 5
              let numero2 =  4 / 2

              let operacion = numero1 + numero2
              console.log (operacion)   {7}
    */




/**  3.2- Operaciones de Asignacion {4:58m}
  *  =
      let a = 10
      let b =  4

      a = a + b   =>   a += b
                       a -= b
                       a *= b
                       a /= b
                       a %= b
      console.log (a)
         
          Operador aritmético de exponencial
          let a = 5
          let b = 3
          console.log (a**b)  {125} Es 5 elevado al cubo=>{3}

 - El operador aritmético de exponencial, también se puede utilizar en la asignación   
          let a = 5
          let b = 3

          a **= b
          console.log (a)

   */






/** 3.3- OPERADOR DE CONCATENACIÓN { + }
  *  (+)

     let nombre = "Beto"
     let apellido = "Quiroga"
 
     let nombreCompleto = nombre + " " + apellido
     console.log (nombreCompleto)   {Beto Quiroga}

     // Template String
     let nickname = `Mi nombre es ${nombre} y mi apellido es ${apellido}`
     console.log (nickname)
- Se puede hacer operaciones matemáticas ${20+10} ${20>10}
 - {``} Estos se llaman `backs sticks`, son como las tildes o acentos, pero invertidos
  */



/** 3.4- OPERADORES DE COMPARACIÓN 1
    // Es igüal == (Compara solo el valor)
    // Es estrictamente igüal === (Compara valor y tipo de dato)
    // Es diferente != {no es igüal} (Verifica que los valores sean diferentes)
    // Es estrictamente diferente !==
 - { Estos 4 operadores de comparación lo podemos hacer tanto con números, como con cadenas de texto y también incluso con buleanos }    

    let a = 50
    let b = "50"
1 * let resultado = a == b
    console.log (resultado)  {true}

2 * let resultado = a === b
    console.log (resultado)  {false}


3 * let a = 24
    let b = 6
    let resultado = a != b
    console.log (resultado)   {true}

  * let a = 24
    let b = 24
    let resultado = a != b
    console.log (resultado)   {false}

4 * let a = 24
    let b = "24"
    let resultado = a !== b
    console.log (resultado)  {true}

    let a = 10
    let b = 25
    let resultado = a !== b
    console.log (resultado)  {true}

    let a = "Alberto"
    let b = "Beto"
    let resultado = a !== b
    console.log (resultado)  {true}

    let a = "Alberto"
    let b = "Alberto"
    let resultado = a !== b
    console.log (resultado)  {false}

Ejemplo con buleano
    let a = true
    let b = false
    let resultado = a !== b
    console.log (resultado)  {true}
    */




/** 3.5- OPERADORES DE COMPARACIÓN 2  {2:27m}
  * Los siguientes operadores de comparación, son operadores estrictamente aritméticos
  // MAYOR QUE >
  // < menor que
  // Mayor o igüal que >=
  // <= menor o igüal que

 - Esto estrictamente estaríamos hablando de datos numéricos, porque no podemos comparar 2 cadenas de texto   
 - Bueno, tenemos nuestras variables que va ha ser 20 y b que va ha ser 10
 
   * let a = 20
     let b = 10
     console.log ( a > b )   { true }
                 ( a < b )   { false }

   * let a = 20
     let b = 20
     console.log ( a <= b )   { true }
   */



/** 3.6- Operadores Lógicos {7:03m}  

 - Los operadores lógicos simplemente son 2
   AND   ( && )   doble ampersam
    OR   ( || )   doble paint

 - Los operadores lógicos nos sirven para poder unir, para poder concatenar 2 validaciones, generalmente 2 operadores de comparación.

   let a = 10
   let b = 20
   let c = 30

 // Saber si b es mayor que a y si b es mayor que c  
   let resp = ( b > a )  &&  ( b > c )

 // Saber si b es menor que a  o  si b es menor que c 
   let resp = ( b < a )  ||  ( b < c )

 - Es buena práctica agrupar esto en (paréntesis), para que así estes següro de lo que estás escribiendo    
 - tengo entonces 2 comparaciones
    console.log (resp)  {false}
                        {true}

  let resp = (( b === a )  ||  ( b !== c ))  &&  ( 5 < 2 )   
  console.log (resp)  {false}

 - Si tú quieres repasar las tablas de verdad, para entender esta lógica, pues tienes que descempolvar tus libros del colegio. Y es buena hora para repasar esas tablas de verdad.
 - En programación todos los dias vas ha ver comparaciones, estas comparaciones las vas hacer absolutamente todos los dias
 */





/** 3.7- Operadores unarios y ternarios {5:50m}

         Operadores Unarios
         ¿Por qué se llaman operadores unarios? 
          Porque para funcionar como tal, no necesitan, sino de el mismo   
Ejemplo 1    let a = 10
             console.log (a) {10}
         ¿Qué pasaría, si yo por algún motivo quiero sumarle un dígito a mi letra "a", solo un valor.?
         - Entonces quiero que por aquí salga 11 ¿Cómo lo haría? El operador unario me permite hacer lo siguiente.
         - A mi variable "a" le voy a decir que se incremente en 1, con simplemente decirle más más, con más más le estoy diciendo que se incremente en 1, entonces "a" ya no va ha ser 10, "a" miren, ahora es 11.

             let a = 10
             a++
             console.log (a) {11}


Ejemplo 2    let a = 10
             a++
             a++
             a++
             a++
             console.log (a) {14}


Ejemplo 3    let a = 10
             a--
             console.log (a) {9}


         Operadores Ternarios {m2:14/5:50}
                    Terna = 3
Ejemplo 1    let a = 5
             let b = 8
             let c = b > a ? "ES VERDAD!!!" : "¡¡¡¡¡ESTO ES FALSO!!!!!"
             console.log (c)  {ES VERDAD!!!}

             let c = b < a ? "ES VERDAD!!!" : "¡¡¡¡¡ESTO ES FALSO!!!!!"
             console.log (c)  {¡¡¡¡¡ESTO ES FALSO!!!!!"}

 - Entonces tanto los operadores unarios, como los ternarios, son algo que ustedes van ha necesitar todos los dias, en su carrera como programador.
 */





/** 3.8- Type coercion {10:36m}

- Type coercion es la capacidad que tiene el lengüaje de programación, en este caso JavaScript, de poder convertir un o cualquier dato en otro tipo de dato.      
- Si una variable almacena un String, otra variable almacena un número, JavaScript puede decidir precísamente que tipo de dato va ha ser esa variable.        

     let a = 521
     let b = "422"
     let resp = a + b
     console.log (typeof resp)  {string}
     console.log (typeof a)     {number}
     console.log (typeof b)     {string}

  // NaN  =>  Not a number

     Falso = 0   false
 Verdadero = 1   true

        let a = true
        let b = true
        let resp = a + b
        console.log (typeof resp)  {number}
        console.log (resp)         { 2 }
  */



/** 4.1- Las condicionales  {9:08m}
Invitación a una fiesta
Si eres mayor de edad y menor de 65 años puedes venir a la fiesta.

     let persona = "Juan Alexis"
     let edad    =  25

     if (edad > 18  &&  edad < 65) {
        console.log (`${persona} puedes venir a la fiesta`)
     }
 - en la consola { Juan Alexis puedes venir a la fiesta          scripts.js:14 }
 */








/** 4.2- If Else  {4:06m}
 *-  Sino por favor quédate en casa
 L16   } else {
           console.log(`Por favor, quedate en casa ${persona}`)
       }
    */


/** 4.3- If Else If  {6:18m}
- Sino, si tienes permiso firmado de tus padres puedes venir
  let permiso = true
  } else if (permiso)    ------>    {(permiso === true)}  =>   } else if (permiso === true && edad < 18){
     console.log(Puedes venir, tienes permiso)
  } else {
  - el permiso solo es para menores de 18 años
  - en la consola  { Por favor quédate en casa Juan Alexis }
      // if
      // if else
      // if else if
      - estas son las 3 condiciones simples.
*/


/** 4.4-  Switch  {12:35m}    Condicionales Múltiples
- Los comentarios de bloque a sido de escribir {/***/}    */  y justo entre el segúndo y tercer asterisco hay que darle el salto de linea, con un Enter
/** ¿Qué personaje de dragon ball z eres?
Si eres fuerte y comelón eres Gokú
Si eres veloz y egoista eres Vegeta
Si eres pequeño y débil eres Krilin
Si eres travieso y juguetón eres trunks
Si no eres ningüno, eres una sabandija.



L14 let personalidad = "Pequeño y débil"
l16
l17  if (personalidad === "Fuerte y comelón") {
L18       console.log("Eres Gokú)
L19   } else if (personalidad === "Velóz y egoista") {
L20       console.log ("Eres Vegeta")
L21   } else if personalidad === "Pequeño y débil") {
L22       console.log ("Eres Krilin")
L23   } else if (personalidad === "Travieso y jugüetón") {
L24       console.log ("Eres Trunks")
L25   } else {
L26      console.log ("Eres una sabandija")
L27   }
L28



{m6:48/12:35}                   CONDICIONAL  MÚLTIPLE       {m10:49/12:35}

L15  let personalidad = "Pequeño y débil"
L16
L17  switch (personalidad) {
L18     case "Fuerte y comelón":
L19       console.log("Eres Gokú")
L20       break
L21     case "Veloz y egoista":
L22       console.log("Eres Vegeta")
L23       break
L24     case "Pequeño y débil":
L25       console.log("Eres Krilin")
L26       break
L27     case "Travieso y juguetón":
L28       console.log("Eres Trunks")
L29       break
L30    default:
L31       console.log("Eres una sabandija!!!")
L32  }
*/


/** 4.5- Ciclo for    {10:58m}
- Los CICLOS también son conocidos como BUCLES de código o LOOPS de código
- Son CICLOS o BLOQUES de código que se repiten hasta que nosotros lo detenemos
  // for   {es la palabra reservada} {todo lo que yo ponga dentro de este bloque de código, se va ha ejecutar muchas veces}
  
  
  for (valor de inicialización; condición; valor o incremento de valor) {
  
  }

Ejemplo 1  for (let i = 0; i < 10; i++) {
              console.log(i)
           }





/*
i => 0, i es menor que 10??  SI => console.log(i), i se incrementa y ahora vale 1
i vale 1, i es menor que 10??  SI => console.log(i), i se incrementa y ahora vale 2
i vale 2, i es menor que 10??  SI => console.log(i), i se incrementa y ahora vale 3
.......
i vale 9, i es menor que 10??  SI => console.log(i), i se incrementa y ahora vale 10
i vale 10, i es menor que 10?? NO.  ¡¡¡TERMINÉ!!!
*/
*/



/* 4.6- Ciclo con for  {7:04m}

// Dado un texto deseamos imprimir su contenido letra por letra

let texto = "betoquiroga"

//{console.log(texto[0])
console.log(texto[1])
console.log(texto[2])}

Ejemplos 1
for (let i = 0; i < texto.length; i++) {
   console.log(texto[i])
}

Ejemplo 2
for (let i = 0; i < 10; i++) {
   console.log(texto[i])
}
*/





/*  4.7- Ciclo While  {8:22m}  While en ingles significa ¡mientras!
// Regalar juguetes

let juguetes = 10

Ejemplo 1
while (juguetes > 0) {
   console.log(`Regalamos un juguete. Nos quedan ${juguetes-1}´)
   juguetes--
}


Ejemplo 1 mas optimizado
while (juguetes > 0) {
   juguetes--
   console.log(`Regalamos un juguete. Nos quedan ${juguetes-1}´)
}
*/




/*  5.1- Sintaxis básica  {8:51m}
  // Funciones son bloques de código que son reutilizables
  // Funciones son acciones
  
  
  
  // Declaración de mi función saludar
  funtion saludar() {
     console.log("Hola, muy buenos dias")
  }

// Llamado a la función saludar
  saludar()
*/



/*   5.2- Parámetro
 //Funciones y Parámetros
 
  funtion saludar(nombre) {
     console.log(typeof nombre)          {number}
     if (typeof nombre === "string") {
     console.log(`Hola ${nombre}, muy buenos dias`)
  } else {
     console.log("Escriba un nombre correcto")

// Llamado a la función saludar
  saludar("Alexys Lozada")
  - saludar(562)   {Hola 562, muy buenos dias}
  saludar(56.45)     {no paso nada}{Escriba un nombre correcto}
  
 */







/* 5.3- Valores de retorno {8:05m}

Ejemplo 1
 funtion obtenerNombreCompleto(nombre, apellido) {
    let nombreCompleto = `${nombre} ${apellidos}`
    
    return nombreCompleto
 }

obtenerNombreCompleto("Beto", "Quiroga M.")


Ejemplo 1 {de otra forma} - Las dos formas son completamente válidas {Ctrl + X} es para cortar y {Ctrl + V} es para pegar lo cortado
 funtion obtenerNombreCompleto(nombre, apellido) {
    return `${nombre} ${apellidos}`
 }

obtenerNombreCompleto("Beto", "Quiroga M.")

 ejemplo 1 solo voy a imprimir
 funtion obtenerNombreCompleto(nombre, apellido) {
    return `${nombre} ${apellidos}`
 }

console.log(obtenerNombreCompleto("Beto", "Quiroga M."))
console.error(obtenerNombreCompleto("Beto", "Quiroga M."))    {Aquí me sale Beto Quiroga M. pero en formatod de error}
*/






/* 5.4 - Funciones de primera clase {6:04m}

-En lengüaje de programación, los tipos de datos primitivos se consideran ciudadanos de primera clase,
entonces todo lo que puede ser almacenado dentro de una variable, precisamente son eso: ciudadanos
todo lo que se puede almacenar dentro de una variable, considerados ciudadanos de primera clase

funtion obtenerNombreCompleto(nombre, apellido) {
   return `${nombre} ${apellidos}`
}

let nombreCompleto = obtenerNombreCompleto("Beto", "Quiroga M.")

console.log(nombreCompleto)
*/
 
//L581  obtenerNombreCompleto      {si yo güardo sin los (paréntesis), lo que estoy güardando es la función
//L581  obtenerNombreCompleto()    {si yo güardo así, con los (paréntesis), yo lo que estoy güardando es la ejecución de la función






/* 5.5- Funciones anónimas  {7:30m}

let sumar = función(a, b, c) {
   return a+b+c
}



console.log(typeof sumar)

// sumar(2, 4, 5)      {esta va ha ser la función que se ejecute}
// este dato yo podría imprimir en consola así    - console.log(sumar(2, 4, 5))

// o podría almacenarla en otra variable   - let resultado = sumar(2, 4, 5)
// y yo recién puedo imprimir resultado    - console.log(resultado)      {11}



otro ejemplo - aquí estoy declarando la función y al mismo tiempo la estoy ejecutando
(funtion(a, b, c) {
   console.log(a+b+c)
}(10, 4, 5))                        en la consola {19}

*/



/*  5.6-  Funciones como constantes  {4:09m}

const saludar = function(nombre) {
   console.log(`Hola ${nombre}`)
}

console.log(saludar)      {aquí me va ha salir todas las lineas que estén almacenadas dentro de la función saludar}
console.log(saludar("Juan"))           {Hola Juan}


- const  - son para las funciones que no se van ha cambiar
- let    - son para las funciones o palabras reservadas que si se van ha cambiar
*/




/*    5.7 - Scope   {11:13m}
ejemplo 1
let nombre = "Alexis"
nombre = "Juan"

const saludar = funtion() {
   let nombre = "Beto Quiroga"
   console.log(`Hola ${nombre}
}

console.log(nombre)

saludar()



ejemplo 2
let nombre = "Alexis"
nombre = "Juan"

const saludar = funtion() {
  nombre = "Beto Quiroga"
  console.log(`Hola ${nombre}
}

saludar()
console.log(nombre)



ejemplo 3
const NOMBRE = "Alexis"

const saludar = funtion() {
   const NOMBRE = "juan"              {esta constante solo vive dentro de estas {llaves} y este es el SCOPE de esta variable}
  console.log(`Hola ${nombre}
}

saludar()
console.log(NOMBRE)
*/





/* 5.8 - Funciones flecha  {16:19m}   - arrow functions {=>}
ejemplo 1
const sumar = funcion(a, b, c) {
  return a+b
}

const restar = function(c, d) {
   return c-d
}

console.log(sumar(10, 5))     {15}
console.log(restar(5, 1))     {4}



ejemplo 1 con - arrow funtions {=>}

const sumar = (a, b) => a+b
const restar = (c, d) => c-d

console.log(sumar(71, 3))               en la consola 74
console.log(restar(10, 4))              en la consola 6


ejemplo 2
- regla:_ cuando tu función de flecha solamente reciba un parámetro, no le pongas (paréntesis)   {en (nombre) L710}
const saludar = (nombre) => `Hola ${nombre}, buenos dias`

console.log(saludar("Beto"))            en la consola Hola Beto, buenos dias



ejemplo 3
const saludar = nombre => {
   if(typeof nombre === "string") {
      console.log(`Hola ${nombre}`)
   }  else  {
      console.error("Tipo de dato equivocado!!!")
   }
}

saludar(6464)


ejemplo 3  solo es otro ejemplo didáctico
const saludar = nombre => {
   if(typeof nombre === "string") {
      return `Hola ${nombre}`
   }  else {
      console.error("Tipo de dato equivocado")
   }
}

console.log(saludar("Juan"))

nota:_ todo problema grande, debemos partir en funciones
*/







/*  6.1 - Métodos de Array  {9:40m}
ejemplo 1
let amigos = {"Pedro", "Gabriel", "Erick", "Daniel"}
 console.log(amigos)      en la consola ["Pedro", "Gabriel", "Erick", "Daniel"]

// Agregar elementos a mi array

amigos.push("Gastón")      {este Método .push nos sirve para agregarle un elemento al Areglo al array}
console.log(amigos)        en la consola ["Pedro", "Gabriel", "Erick", "Daniel", "Gastón"]


ejemplo 2
let amigos = {"Pedro", "Gabriel", "Erick", "Daniel"}

// Agregar elementos a mi array
let dato = amigos.push("Gastón")                  {se puede almacenar en una variable{L763 dato} y poder saber cuanto de tamaño tiene su areglo luego de ha ver ejecutado amigos.push}  

console.log(dato)          en la consola    5  
console.log(amigos)        en la consola ["Pedro", "Gabriel", "Erick", "Daniel", "Gastón"]
*/





/* 6.2 - Métodos que no modifican el array   {5:44m}
ejemplo 1   método pop()      - quita un elemento
let amigos = {"Pedro", "Gabriel", "Erick", "Daniel"}

// Agregar elementos a mi array
let dato = amigos.pop()                  {se puede almacenar en una variable{L763 dato} y poder saber cuanto de tamaño tiene su areglo luego de ha ver ejecutado amigos.push}  

console.log(dato)          en la consola    Daniel  
console.log(amigos)        en la consola ["Pedro", "Gabriel", "Erick"]






ejemplo 2   método slice()      - no modifica nada
let amigos = {"Pedro", "Gabriel", "Erick", "Daniel"}

// Agregar elementos a mi array
let dato = amigos.slice(0, 2)                  {se puede almacenar en una variable{L763 dato} y poder saber cuanto de tamaño tiene su areglo luego de ha ver ejecutado amigos.push}  

console.log(dato)       en la consola ["Pedro", "Gabriel"]   
console.log(amigos)        en la consola ["Pedro", "Gabriel", "Erick", "Daniel"]


//- en .slice()  le digo que parta desde mi posición 0, hasta antes de la posición 2 
*/




/* 6.3 - ForEach  {8:14m}

for (let i = 0; i < amigos.length; i++ {
   console.log(amigos[i])
}


en la consola
Pedro
Gabriel
Erick
Daniel


// Método for each    o   Foreach    {para cada}
ejemplo 1
let amigos = {"Pedro", "Gabriel", "Erick", "Daniel"}

amigos.forEach(funtion(amigo) {
   console.log(amigo)
})


ejemplo 1 pero optimizando con   arrow functions {=>}
let amigos = {"Pedro", "Gabriel", "Erick", "Daniel"}

amigos.forEach(amigo => {
   console.log(amigo)
})


ejemplo 1 optimizando más todavía con   arrow functions {=>}
let amigos = {"Pedro", "Gabriel", "Erick", "Daniel"}

amigos.forEach(amigo => console.log(amigo))




ejemplo 2

let amigos = {"Pedro", "Gabriel", "Erick", "Daniel"}

let dato = amigos.forEach(amigo => `Hola ${amigo}`)

console.log(amigos)

- en la consola  ["Pedro", "Gabriel", "Erick", "Daniel"]


ejemplo 2   completo

let amigos = {"Pedro", "Gabriel", "Erick", "Daniel"}

let dato = amigos.forEach(amigo => console.log(`Hola ${amigo}`))

console.log(amigos)

en la consola   
Hola Pedro
Hola Gabriel
Hola Erick
Hola Daniel
(4) ["Pedro", "Gabriel", "Erick", "Daniel"]
*/













/* 6.4 - ForEach vs Map   {4:39m}

//  Método .map()
- .map tiene la misma funcionalidad que forEach

ejemplo 1
let amigos = {"Pedro", "Gabriel", "Erick", "Daniel"}

let dato = amigos.map(amigo => console.log(`Hola ${amigo}`))

console.log(amigos)


ejemplo 2
let amigos = {"Pedro", "Gabriel", "Erick", "Daniel"}

let dato = amigos.map(amigo => `Hola ${amigo}`)

console.log(amigos)        en la consola  (4) ["Pedro", "Gabriel", "Erick", "Daniel"]
console.log(dato)          en la consola  (4) ["Hola Pedro", "Hola Gabriel", "Hola Erick", "Hola Daniel"]

- hoy en día el uso de forEach está bastante descontinuado
- en casi todos los desarrollos se utilizan .map
*/







/* 6.5 - Filter  {6:02m}   es para filtrar contenidos
ejemplo 1  con  .map
let numero = [10, 436, 45, 74, 33, 9, 2, 54]

let nuevoArray = []

numero.map(num => {
   if(num > 20) {
      nuevoArray.push(num)
   }
})

console.log(nuevoArray)
console.log(numeros)



ejemplo 2    con .filter
let numero = [10, 436, 45, 74, 33, 9, 2, 54]
let dato = numero.filter(num => num>20)         {solo los mayores> de 20}
console.log(dato)




ejemplo 3    con .filter
let numero = [10, 436, 45, 74, 33, 9, 2, 54]
let dato = numero.filter(num => num<20)         {solo los <menores de 20}
console.log(dato)
*/







/* 6.6 - Find includes some every      {7:11m}

//  Find, includes, some, every

ejemplo 1    con .find
let numero = [10, 436, 45, 74, 33, 9, 2, 54]
let dato = numero.find(num => num>39)         {solo los mayores> de 39}
console.log(dato)    {436} devuelve solo el 1er numero mayor a 39



ejemplo 2    con .find
let numero = [10, 436, 45, 74, 33, 9, 2, 54]
let dato = numero.find(num => num%2 === 1)         {aquí le digo que me devuelva el 1er número que su residuo sea 1}
console.log(dato)    {45} devuelve solo el 1er numero impar de esta secuencia





ejemplo 3    con .includes no hay comparación, es exactamente igüal
let numeros = [10, 436, 45, 74, 33, 9, 2, 54]
let dato = numeros.includes(33)         { true o false}  en este caso me esta devolviendo un buleano
console.log(dato)   {true}




ejemplo 4    con .some  - es si alguno de estos números incluye esta validación
let numeros = [10, 436, 45, -74, 33, 9, 2, 54]
let dato = numeros.some(num => num<0)        
console.log(dato)    {true}





ejemplo 5    con .some  - es si alguno de estos datos incluye esta validación
let numeros = [10, 436, 45, "beto", 33, 9, 2, 54]
let dato = numeros.some(num => typeof num === "string")        
console.log(dato)    {true}




ejemplo 6    con .every
- .every significa que voy a comparar o voy a validar si todos los elementos, absolutamente todos los elementos cumplen con una condición
let numeros = [10, 436, 45, "beto", 33, 9, 2, 54]
let dato = numeros.every(num => typeof num === "string")        
console.log(dato)    {false}



ejemplo 7    con .every
- .every significa que voy a comparar o voy a validar si todos los elementos, absolutamente todos los elementos cumplen con una condición
let numeros = [10, 436, 45, "beto", 33, 9, 2, 54]
let dato = numeros.every(num => typeof num === "number")        
console.log(dato)    {false}



ejemplo 8    con .every
- .every significa que voy a comparar o voy a validar si todos los elementos, absolutamente todos los elementos cumplen con una condición
let numeros = [10, 436, 45, 52, 33, 9, 2, 54]
let dato = numeros.every(num => typeof num === "number")        
console.log(dato)    {true}
*/













/* 6.7 - Manipulando strings   {12:19m}
ejemplo 1
let texto = "Alberto Junior Quiroga Muñoz"

let dato = texto.slice(3)
console.log(dato)      {erto Junior Quiroga Muñoz}



ejemplo 2
let texto = "erto Junior Quiroga Muñoz"

let dato = texto.slice(3, 10)
console.log(dato)      {o Junio}  - el 3 y el 10 elimina, pero primero cuenta de izquierda a derecha



ejemplo 3
let texto = "Alberto Junior Quiroga Muñoz"

let dato = texto.split(" ")
console.log(dato)      {(4) ["Alberto", "Junior", "Quiroga", "Muñoz"]} - me muestra todo como datos separados {ahora esto es una colección de datos}




ejemplo 4
let texto = "Alberto Junior Quiroga Muñoz"

let dato = texto.split("r")
console.log(dato)      {(4) ["Alber", "to Junio", " Qui", "oga Muñoz"]} - el caractér que yo elija, no incluye en la separación




ejemplo 5  - este es el método split
let texto = "Alberto Junior Quiroga Muñoz"

let dato = texto.split("")
console.log(dato)      {(28) ["A", "l", "b",            "z"]} - separada cada uno de los caracteres





ejemplo 5    método search
let texto = "Alberto Junior Quiroga Muñoz"

let dato = texto.search("")
console.log(dato)      





ejemplo 6
let texto = "Alberto Junior Quiroga Muñoz"

let dato = texto.toLocaleLoveCase()
console.log(dato)      {alberto junior quiroga muñoz}





ejemplo 7
let texto = "Alberto Junior Quiroga Muñoz"

let dato = texto.toUpperCase()
console.log(dato)      {ALBERTO JUNIOR QUIROGA MUÑOZ}



ejemplo 8
let texto = "Alberto"
let texto = "alberto"
let texto = "ALBERTO"

if (texto.toUpperCase === "ALBERTO") {
  // hacer algo
}

console.log(dato)
*/









/* 6.8 - Valores y atributos de los objetos    {5:26m}
  // Objetos
ejemplo 1
let alumno = {
   nombre: "Beto",
   edad: 21,
   suscriptor: false,
   ciudad: "Lima"
}

console.log(alumno)



ejemplo 2
let alumno = {
   nombre: "Beto",
   edad: 21,
   suscriptor: false,
   ciudad: "Lima"
}

console.log(alumno.ciudad)     {Lima}



ejemplo 3
let alumno = {
   nombre: "Beto",
   edad: 21,
   suscriptor: false,
   ciudad: "Lima"
}

console.log(alumno["edad"])      {21}



ejemplo 4
let alumno = {
   nombre: "Beto",
   edad: 21,
   suscriptor: false,
   ciudad: "Lima"
}

let valores = Object.values(alumno)

console.log(valores)





ejemplo 5
let alumno = {
   nombre: "Beto",
   edad: 21,
   suscriptor: false,
   ciudad: "Lima"
}

let valores = Object.keys(alumno)

console.log(valores)
*/


















/* 6.9 - Math date   {8:05m}
  //  Match nos permite obtener valores matemáticos
  y
  //  Date nos permite tener valores de fecha
  
  ejemplo 1
  const valor = Match.random()    {random() me permite obtener un número aleatorio entre 0 y 1}
  console.log(valor)
  
  
  
  ejemplo 2
- si yo quiero obtener un número aleatorio entre 0 y 10, entonces simplemente este random() lo voy a multiplicar por 10  
  
  const valor = Match.random()*10   
  console.log(valor)
  
  
  
  
  ejemplo 3  - voy a obtener el valor de PI
  
  const valor = Match.PI    
  console.log(valor)       en la consola   3.141592653589793

  
  
  
  ejemplo 4  - voy a obtener el cuadrado de 2
  
  const valor = Match.SQRT2    
  console.log(valor)       en la consola   1.4142
  
  
  
  ejemplo 5  - voy a obtener el logaritmo de 10
  
  const valor = Match.LOG10E  
  console.log(valor)       en la consola   0.43

  
  

  ejemplo 6  - max
  
  const valor = Match.max(50, 2, 26, 88)  
  console.log(valor)       en la consola  88
  
  
  
  ejemplo 7  - min
  
  const valor = Match.max(50, 2, 26, 88)  
  console.log(valor)       en la consola  2
  
  
  

  

  ejemplo 8   - Date
  
  const valor = new Date()  
  console.log(valor)       
    
  
  
  ejemplo 9   - voy a sacar el año utilizando una función
  
  const valor = new Date()  
  console.log(valor.getFullYear())         {2020}
    
  
  
  ejemplo 10   - voy a sacar el minuto utilizando una función
  
  const valor = new Date()  
  console.log(valor.getMinute())         {9}
    
  
  
  ejemplo 11   - voy a sacar el día utilizando una función
  
  const valor = new Date()  
  console.log(valor.getUTCDate())         {25} - dice que este día es 25 de agosto
    
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /* 7.1 - Requerimientos  {6:42m}
  
  - creo una nueva carpeta con el nombre:_ proyectofinal
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
