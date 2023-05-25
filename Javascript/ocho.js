/**
 * Crea una función que dado: const texto = "Hola hola HOLA mundo mundo Hola"; retorne un objeto que contenga la frecuencia de cada palabra en la cadena. La función debe ignorar el caso de las palabras.
   Salida esperada
        {
            hola: 3,
            mundo: 2
        }
 */

// Resolucion:
function contarFrecuenciaPalabras(texto) {
  const palabras = texto.toLowerCase().split(" ");
  const frecuencia = {};
  for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i];
    frecuencia[palabra] = (frecuencia[palabra] || 0) + 1;
  }
  return frecuencia;
}
