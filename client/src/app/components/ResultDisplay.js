const ResultDisplay = ({ result, error }) => {
    if (error) {
      return <p className="text-red-500 text-center">{error}</p>;
    }
  
    if (result !== null) {
      return <p className="text-green-500 text-center">Resultado: {result}</p>;
    }
  
    return null;
  };
  
  export default ResultDisplay;