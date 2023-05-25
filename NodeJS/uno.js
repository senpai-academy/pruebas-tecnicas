/**
 * 1. Crea una función que lea un archivo de texto y retorne el número de palabras que hay en el archivo. Crea un archivo de texto simple como por ejemplo el siguiente:
Archivo de texto "archivo.txt": 
Este es un archivo de ejemplo.
Contiene varias palabras.
    1. **La salida esperada era:**
        1. Número de palabras: 7
 */

// Solución
const fs = require("fs");
function contarPalabrasEnArchivo(archivo) {
  const contenido = fs.readFileSync(archivo, "utf-8");
  const palabras = contenido.split(/\s+/).filter(Boolean);
  return palabras.length;
}
const archivo = "archivo.txt";
const numeroPalabras = contarPalabrasEnArchivo(archivo);
console.log(`Número de palabras: ${numeroPalabras}`);
