/**
 * Crea una función que dado: const texto = "Hola hola mundo mundo hola HOLA";
    const n = 2; 
    acepte una cadena de texto y un número n como parámetros y retorne 
    un array con las n palabras más comunes en la cadena. La función debe ignorar el caso de las palabras.
    
Salida esperada
        1. ['hola', 'mundo']
 */

// Solución

function palabrasMasComunes(texto, n) {
  const palabras = texto.toLowerCase().split(" ");
  const frecuencia = {};
  for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i];
    frecuencia[palabra] = (frecuencia[palabra] || 0) + 1;
  }
  const palabrasOrdenadas = Object.keys(frecuencia).sort(
    (a, b) => frecuencia[b] - frecuencia[a]
  );
  return palabrasOrdenadas.slice(0, n);
}
