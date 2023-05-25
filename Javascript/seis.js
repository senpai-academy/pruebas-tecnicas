/**
 * Crea una función que dado: const input4 = { a: 'valor1', b: 'valor2', c: 'valor3' }; 
 * devuelva un nuevo objeto con todas las claves y valores invertidos.
   
Salida esperada
const output4 = { valor1: 'a', valor2: 'b', valor3: 'c' };
 */

// Solución
function invertirObjeto(obj) {
  const newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[obj[key]] = key;
    }
  }
  return newObj;
}
