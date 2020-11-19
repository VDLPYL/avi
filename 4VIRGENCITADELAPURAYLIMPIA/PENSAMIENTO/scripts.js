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
































