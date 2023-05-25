/* Dado el array `let array = ['ab', 'abb', 'abbabbabbaa']`
 eliminar las letras contiguas repetidas y devolver el array ordenado de mayor a menor.
 Salida esperada era
 `['abababa','ab','ab']`
*/

// Solución:
function eliminarLetrasRepetidas(array) {
  const resultado = array.map((str) => {
    let newStr = "";
    let prevChar = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== prevChar) {
        newStr += str[i];
        prevChar = str[i];
      }
    }
    return newStr;
  });
  return resultado.sort((a, b) => b.length - a.length);
}
const array = ["ab", "abb", "abbabbabbaa"];
const resultado = eliminarLetrasRepetidas(array);
console.log(resultado);
