# 🙋🏻 Mis Apuntes 📝

* BÁSICOS DE JAVASCRIPT: Libro kyle simpson up and going pdf
* pseudocódigo: código que se puede escribir en palabras
* no lenguaje tipado
* LENGUAJE COMPILADO vs LENGUAJE INTERPRETADO
	- compilado: más rápido
	- interpretado: línea por línea
		- Reverse Polish notation +xy -> hay lenguajes así
		- Infija -> la que nosotros hacemos
STATEMENTS / DECLARACIONES
- (.) -> expresión
* COHESION: ===
LOGICAL OPERATOR JS: (por los FALSY VALIUS)
True && true && true && “la casa de pepito” -> return “la casa de pepito”
* SCOPE: hasta donde yo existo
* Ejercicio:

```
function imprimirBalance(balance) {
  // Imprimir balance
}

function retirarDinero(dinero) {
    // Solo puede retirar dinero si es menor que el balance
}

function transferir (balance, balance2) {    
    // transferir balance a otro balance2
}


function imprimirBalance2 (balance2) {
 // Imprimir el balance2
}
function retirarTodoMiDinero() { /* Retirar de 100 en 100 */ }

```

> https://github.com/getify/You-Dont-Know-JS LIBROS


* MUTABILIDAD
* Objetos -> se pasa la referencia
* PASAR POR REFERENCIA

```
var Persona = Object.assign( {nombre:”Estefany”, apellido:”Aguilar”})
Object.assign( {}, {nombre:”Estefany”}, {apellido:”Aguilar”})
```

* Aquí se pregunta si n existe con esta comparación

```
if( n && n.length){}
```

* ESTO NO FUNCIONA EN EL NAVEGADOR, PERO EN TEORÍA, DEBERÍA

  DOM
&0.innerText = “Hola”
CLOSURES (página 54)

* setTimeOut -> CLOSURE
* Los closures recuerdan el valor
