/**
 * Crea una función que dado: const input3 = [1, 5, 2, 9, 3];
 * devuelva la suma de los números más grandes en el arreglo.
 *
 * Salida esperada
 * const output3 = 14;
 */

// Solución
function sumarNumerosMasGrandes(arr) {
  arr.sort((a, b) => b - a);
  return arr[0] + arr[1];
}
