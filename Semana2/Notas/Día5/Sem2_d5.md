# 🙋🏻 Mis Apuntes 📝

* Repaso HTML semantic - storytelling
* FORMULARIOS
 * Flex -> display flex - maquetado - layout
 * Etiqueta form
 * Action: si es vacío, envía los datos a esta misma página
 * METODOS IDEMPOTENTES
 > https://otroespacioblog.wordpress.com/2013/05/22/conoce-un-poco-sobre-los-metodos-http-en-rest/

    * GET - QUERY
	* POST - modificar algo
* Method:
* input
	* Label: entrada de texto
* MOVILE FIRST -> pensar en la vista móvil primero
  Primero piense para movil y luego para web: ej: primero label y luego input
NORMALICE
700 px
Expresiones regulares: escribir una búsqueda REGEX  
> http://html5pattern.com/Colors
* Pseudo selectores: hover, visit -> estados
 * Email input fields:
 * Rendimiento de la página LIGHTHOUE
* RADIO BUTTON:
 * Fieldset -> campo para agrupar
 * Con el for hago referencia a mi input
 * Label for -> que al dar click en el nombre se me seleccione el campo del control
 * Propiedad checked -> que esté seleccionado - manda el valor el que está checkeado
* REALIZAR LOS STILOS PARA MOVIL Y PARA WEB INDEPENDIENTE
 `@media` -> regla de responsive
Ctrl + shift + flecha arriba y abajo
Placeholder “ingrese su nombre”
* CONTROL SELECT
 * Prefit:  propiedades “propias” del navegador
 * -webkit: none
 * Propiedades experimentales - “flag”
* TEXT AREA
 * No se le puede poner un “value” para el valor por defecto
 * Se pone form-text-row: text area
 * Cambios requeridos -> solo poner
* CHECKBOX
 * Pseudoselector
>https://tympanus.net/codrops/?s=checkbox&search-type=posts
* A/B testing -> para saber qué diseño es mejor
>https://browserdiet.com/es/
* SUBMIT
 * Enviar correo desps de poner los datos en el formulario

 > https://www.mailgun.com/

## TAREAS:
- CV semántica -> que tenga un formulario de contacto (en la misma hoja en otra parte, que te dirija a otro lado para llenar el formulario)
- hacer una webtask URL -> poner en form”action” el webtask y mandarle los datos, recibir los datos del frontend (context data.query)
En webtaxt, colocar en el context el query -> cd (null, ctx.data)
Poner esa url del webtask en el html en la parte del form en action=“”
Mandar un email con esos datos
Hacer ajax para que no se tenga que salir de la página
