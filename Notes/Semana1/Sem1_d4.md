# 🙋🏻 Mis Apuntes 📝

* HTML entities
> https://jsfiddle.net/
* CSS -> Colores: Forma corta #FFF
* Se puede abreviar a #F00
* PLUGIN COLORCITOS:  pigments
* Ni CSS ni HTML son lenguajes de programación
* SASS sí es un lenguaje (puede hacer declaraciones, ciclos...)
CSS ruler:

    selector <- Body{ Propiedad <- Color: #FOO; -> valor }

* Selectores de tags -> h1{ } (sin el puntito al comienzo y me pinta tooodos los títulos)
PIXELES:
* se recomienda en TEXTO: 14px
* em: relativo al texto que tengo -> HEREDA DEL PADRE (dentro de donde esté)
* rem: ROOT
* mirar cómo poner iconos en los ítems de una lista
* calcu()
* Siempre se sobreescribe con la ultima lìnea que se haga…
* BLOCK AND INLINE ELEMENT
* H1 y p -> funcionan como bloques… se ponen uno debajo del otro (VERTICALES - BLOCK - OCUPA TODO EL ESPACIO DEL NAVEGADOR - SE LES PUEDE PONER BORDERS)
* Em -> se ponen uno al lado del otro
* INLINE: tamaño del texto
* BLOCK: tamaño del papá
* Border: width, style, color -> border: 1px dashed black
* UN SOLO DIV: http://a.singlediv.com/
* selector  * -> resetea los estilos, le quita el padding por defecto, o el margin por defecto, etc… que es lo que le pone el navegador
```
{
	Box-sizzing: border-box;
}
```
* Con esto no se suma la margen, ni el padding, ni el border y deja trabajar con las dimensiones que uno le ponga a las propiedades
* Selector descendiente
* Div > span -> para que sea papá inmediato
* ESPECIFICIDAD:
> http://specificity.keegan.st/
* NO USAR ID EN CSS POR LA ESPECIFICIDAD
!important -> tiene la máxima especificidad -> LOS ÚLTIMOS SERÁN LOS PRIMEROS
> http://apuntesalmargen.com/jugando-piedra-papel-o-tijera-con-css.html
