/**
 * Crea un componente de React que muestre un gráfico de barras o pastel basado en los datos proporcionados.
 */

// Solución
function Contador() {
    const [contador, setContador] = useState(0);
    useEffect(() => {
      document.title = `Contador: ${contador}`;
    }, [contador]);
    const incrementarContador = () => {
      setContador((prevContador) => prevContador + 1);
    };
    return (
      <>
        <h2>Contador: {contador}</h2>
        <button onClick={incrementarContador}>Incrementar</button>
      </>
    );
  }
  