/**
 * 10. Crea una función que dado:
const personas = [
{ nombre: 'Juan', edad: 25, género: 'masculino' },
{ nombre: 'María', edad: 30, género: 'femenino' },
{ nombre: 'Carlos', edad: 20, género: 'masculino' },
{ nombre: 'Ana', edad: 22, género: 'femenino' },
{ nombre: 'Andrés', edad: 40, género: 'masculino' },
{ nombre: 'Laura', edad: 28, género: 'femenino' },
{ nombre: 'Pedro', edad: 18, género: 'masculino' },
{ nombre: 'Isabel', edad: 35, género: 'femenino' },
{ nombre: 'Ricardo', edad: 32, género: 'masculino' },
{ nombre: 'Gabriela', edad: 26, género: 'femenino' }
];
 La función debe retornar un objeto que contenga la cantidad de personas de cada género y el promedio de edad de cada género.
    1. **La salida esperada era:** 
        1. {
        masculino: {
        cantidad: 5,
        promedioEdad: 27
        },
        femenino: {
        cantidad: 5,
        promedioEdad: 28.2
        }
        }
 */
function obtenerEstadisticasPersonas(personas) {
  const estadisticas = {};
  for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];
    const genero = persona.género;
    if (!estadisticas[genero]) {
      estadisticas[genero] = {
        cantidad: 0,
        sumaEdad: 0,
      };
    }
    estadisticas[genero].cantidad++;
    estadisticas[genero].sumaEdad += persona.edad;
  }
  for (let genero in estadisticas) {
    estadisticas[genero].promedioEdad =
      estadisticas[genero].sumaEdad / estadisticas[genero].cantidad;
    estadisticas[genero].promedioEdad =
      Math.round(estadisticas[genero].promedioEdad * 10) / 10; // Redondear a un decimal
  }
  return estadisticas;
}
