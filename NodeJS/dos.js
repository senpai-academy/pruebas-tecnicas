/**
 * 2. Crea una aplicación de línea de comandos que lea un archivo CSV que contenga nombres y direcciones de correo electrónico, y que escriba un archivo de texto con el contenido del correo electrónico que incluya el nombre del destinatario. La aplicación debe permitir configurar la plantilla del correo electrónico a través de un archivo de configuración.
    1. Crea un archivo de texto simple como por ejemplo el siguiente:
        1. nombre,email
        Juan [Perez,jperez@example.com](mailto:Perez,jperez@example.com)
        Mario López,mlopez@example.com
    2. Crea un archivo de configuracion como por ejemplo este:
    Archivo de configuración "config.json":
        1. {
        "template": "Querido {nombre},\n\nGracias por tu interés en nuestro producto.\n\nAtentamente,\nEquipo de Ventas"
        }
    3. **La salida espera era:**
        1. Querido Juan Perez,
        Gracias por tu interés en nuestro producto.
        Atentamente,
        Equipo de Ventas
        Querido Mario López,
        Gracias por tu interés en nuestro producto.
        Atentamente,
        Equipo de Ventas
 */

// Solución
const fs = require("fs");
const csv = require("csv-parser");
function generarCorreosDesdeCSV(
  archivoCSV,
  archivoConfiguracion,
  archivoSalida
) {
  const configuracion = JSON.parse(
    fs.readFileSync(archivoConfiguracion, "utf-8")
  );
  const plantilla = configuracion.template;
  const correos = [];
  fs.createReadStream(archivoCSV)
    .pipe(csv())
    .on("data", (data) => {
      const nombre = data.nombre;
      const correo = data.email;
      const correoPersonalizado = plantilla.replace("{nombre}", nombre);

      correos.push(correoPersonalizado);
    })
    .on("end", () => {
      const contenidoCorreos = correos.join("\\n\\n");
      fs.writeFileSync(archivoSalida, contenidoCorreos);
      console.log(
        `Se han generado los correos electrónicos en el archivo "${archivoSalida}".`
      );
    });
}

const archivoCSV = "contactos.csv";
const archivoConfiguracion = "config.json";
const archivoSalida = "correos.txt";
generarCorreosDesdeCSV(archivoCSV, archivoConfiguracion, archivoSalida);
