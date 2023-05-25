/**
 * Dado const input1 = [{ propiedad: 'b' }, { propiedad: 'a' }, { propiedad: 'c' }];
 * Crea una función que devuelva un nuevo arreglo con los objetos ordenados alfabéticamente
 * por una propiedad específica en orden descendente.
 *
 * Salida esperada
 *  [{ propiedad: 'c' }, { propiedad: 'b' }, { propiedad: 'a' }]
 */

// Solución
function ordenarObjetos(arr) {
  return arr.sort((a, b) => b.propiedad.localeCompare(a.propiedad));
}
