/**
 * Crea un componente de React que muestre un temporizador. 
 * Cuando se pulsa un botón, se inicia el temporizador y se detiene después de un tiempo determinado.
 */

// Solución
function SeleccionMultiple({ opciones, onChange }) {
    const [seleccionados, setSeleccionados] = useState([]);
    const toggleSeleccion = (opcion) => {
      const opcionIndex = seleccionados.indexOf(opcion);
      if (opcionIndex > -1) {
        setSeleccionados((prevSeleccionados) =>
          prevSeleccionados.filter((item) => item !== opcion)
        );
      } else {
        setSeleccionados((prevSeleccionados) => [...prevSeleccionados, opcion]);
      }
    };
    useEffect(() => {
      onChange(seleccionados);
    }, [seleccionados, onChange]);
    return (
      <ul>
        {opciones.map((opcion) => (
          <li key={opcion} onClick={() => toggleSeleccion(opcion)}>
            {opcion}
          </li>
        ))}
      </ul>
    );
  }
  