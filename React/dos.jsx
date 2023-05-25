/**
 * Crea un formulario de contacto en React 
 * que valide los campos de entrada (por ejemplo, que el correo electrónico sea válido).
 */

// Solución
function FormularioContacto() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [errores, setErrores] = useState({});
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const errores = {};
      if (!nombre.trim()) {
        errores.nombre = "El nombre es requerido";
      }
      if (!correo.trim()) {
        errores.correo = "El correo electrónico es requerido";
      } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(correo)) {
        errores.correo = "El correo electrónico no es válido";
      }
      if (!mensaje.trim()) {
        errores.mensaje = "El mensaje es requerido";
      }
      setErrores(errores);
  
      if (Object.keys(errores).length === 0) {
        // enviar el formulario
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </label>
        {errores.nombre && <p>{errores.nombre}</p>}
        <label>
          Correo electrónico:
          <input
            type="email"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
          />
        </label>
        {errores.correo && <p>{errores.correo}</p>}
        <label>
          Mensaje:
          <textarea
            value={mensaje}
            onChange={(event) => setMensaje(event.target.value)}
          />
        </label>
        {errores.mensaje && <p>{errores.mensaje}</p>}
        <button type="submit">Enviar</button>
      </form>
    );
  }
  