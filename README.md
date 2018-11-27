# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Resumen del proyecto

¿Qué tengo que hacer exactamente? En este proyecto crearás la primera aplicación web del _bootcamp_. Servirá para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (_offset_).

La temática es libre. Tú debes pensar en qué situaciones de la vida real se necesitaría cifrar un mensaje y pensar en cómo debe ser esa experiencia de uso (qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc. Algunas ideas de ejemplo:

- Crear claves seguras para el email.
- Encriptar/cifrar una tarjeta de crédito.
- Herramienta de mensajería interna de una organización de derechos humanos en una zona de conflicto.
- Mensajería secreta para parejas.

## Definicion del Producto

Quiénes son los principales usuarios de producto?

Mi producto va dirigido a los integrantes y/o personal de un Departamento de Investigaciones y criptografia, el cual pertenece a una Comandancia de Policia y Detectives.

Cuáles son los objetivos de estos usuarios en relación con tu producto?

En el año 1968, en San Francisco, aparecio un asesino en serie que se hizo famoso mundialmente como El Zodiaco, el enviaba mensajes encriptados a su manera para que asi supieran saber donde lo iban a atrapar y contra quien iba a atentar. Hasta el sol de hoy, no se ha atrapado porque no han podido descifrar sus mensajes.
En vista de esto, muchos asesinos alrededor del mundo han querido copiar la manera en que el Zodiaco escribia sus mensajes, de manera encriptada.
Este departamento necesita desencriptar y/o encriptar ciertos mensajes que algunos asesinos en serie y/o criminales envian, a traves de medios de comunicacion de la region o por distintos canales de comunicacion o ya sea por alguna investigacion exhaustiva de algun detective. El objetivo es saber que dice dicho mensaje cifrado, y no solo saberlo, sino determinarlo lo mas pronto posible o en corto tiempo para poder atrapar al enemigo en cuestion. En muchos casos, el enemigo se ha salido con la suya porque han demorado mucho en descifrar el mensaje (manualmente) y ya cuando lo han descifrado es demasiado tarde y se ha cobrado una victima mas.

¿Cómo crees que el producto que estás creando está resolviendo sus problemas?

Mi producto propone cifrar y descifrar esos mensajes en tiempo record para que asi el equipo de investigadores faciliten esta informacion a los detectives lo mas pronto posible para que atrapen al enemigo oportunamente.
