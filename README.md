# Markdown Links -

## Índice

* [1. Descripción](#1-descripción)
* [2. Instalación](#2-instalación)
* [3. Instrucciones de uso](#3-instrucciones-de-uso)


***

## 1. Descripción MD-links.
MD-links es una librería en Node.js que funciona como una herramienta para analizar links dentro de carpetas Markdown. Se encuentra disponible como módulo descargable de GitHub, el cual es posible  instalar e importar dentro de otros  repositorios, o puedes utilizarlo como una interfaz de línea de comandos (CLI), que te permitirá utilizarla desde la terminal. 
Esta librería contiene 3 archivos principales para su funcionamiento.

*function.js* : aquí se encuentran las funciones desarrolladas que permiten convertir rutas en absolutas, leer archivos, extraer links, validar links y además entregan una estadísticas. 

*index.js* : en este archivo se desarrolla la función MD-links, que devuelve una promesa, unificando todas las funciones necesarias para analizar los archivos Markdown.  

*CLI.js*: esta es la interfaz de línea de comando, que permite interactuar con los argumentos proporcionados por la usuaria,  que se ejecutan desde la terminal.


## 2. Instalación MD-links. 
Puedes instalarlo directamente desde GitHub con el siguiente comando

```bash
                   npm install Carolinava21/md-links
```


* Para poder leer un archivo markdown y extraer sus enlaces , se debe ejecutar el comando md-links junto con el nombre del archivo Markdown que quieras verificar 
```bash
                           md-links archivo.md
```

* Para verificar el estado de cada uno de los links extraídos y recibir una respuesta http.   
```bash
                        md-links archivo.md --validate
```


* Para obtener un estadistica del archivo analizado. 

```bash
                         md-links archivo.md --stats
```



*  Para mostrar la estadísticas básicas y los enlaces rotos en un archivo Markdown

```bash
                         md-links archivo.md --validate --stats
```

## 3. Instrucciones de uso.

