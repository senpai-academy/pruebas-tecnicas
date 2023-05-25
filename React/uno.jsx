/**
 * Crea un componente de React que muestre una lista de elementos, 
 * y al hacer clic en un elemento se muestre su contenido completo.
 */

// Solución
function ListaElementos({ elementos }) {
    const [elementoSeleccionado, setElementoSeleccionado] = useState(null);
    const handleClick = (elemento) => {
      setElementoSeleccionado(elemento);
    };
    return (
      <>
        <ul>
          {elementos.map((elemento) => (
            <li key={elemento.id} onClick={() => handleClick(elemento)}>
              {elemento.titulo}
            </li>
          ))}
        </ul>
        {elementoSeleccionado && (
          <div>
            <h2>{elementoSeleccionado.titulo}</h2>
            <p>{elementoSeleccionado.contenido}</p>
          </div>
        )}
      </>
    );
  }
  