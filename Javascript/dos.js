/**
El objetivo de la función FormatString es quitar todos los caracteres especiales de la cadena
de caracteres que viene como parámetro.
Solo se permiten:
    1. Las 26 letras del alfabeto inglés
    2. Números de 0-9
    3. Espacios
    4. Guiones medios y bajos.
        1. La siguiente función, ¿cumple con lo necesario para resolver el enunciado?
 */
function FormatString(sentence) {
  let result = [];

  sentence = sentence.toUpperCase();

  let i = 0;
  let j = 0;

  while (i < sentence.lenght) {
    if (
      (sentence.charCodeAt(i) >= 65 && sentence.charCodeAt(i) <= 90) ||
      (sentence.charCodeAt(i) >= 48 && sentence.charCodeAt(j) <= 57) ||
      sentence.charCodeAt(i) == 32 ||
      sentence.charCodeAt(i) == 45
    ) {
      sentence[j] = result[i];
      j += 1;
    }
    i += 1;
  }
  return result.join("");
}

// Solución

const formatString = (sentence) => {
  const result = [];

  sentence = sentence.toUpperCase();

  for (let i = 0; i < sentence.length; i++) {
    const charCode = sentence.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90) || // A-Z
      (charCode >= 48 && charCode <= 57) || // 0-9
      charCode === 32 || // space
      charCode === 45 || // hyphen
      charCode === 95 // underscore
    ) {
      result.push(sentence[i]);
    }
  }

  return result.join("");
};
