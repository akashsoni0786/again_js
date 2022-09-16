import React, { useState } from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";




// This is a component for Generate numbers
const GenerateNum = () => {
  const [generate,setGenerate] = useState(20);
  const generateRandom = (min, max) => {
    return Math.floor(min + Math.random() * (max - min + 1));
  };
  const handleClick = () => {
    let num = generateRandom(1, 20);
    alert("Generated number: " + num);
    setGenerate(num);
  
  };
  if (generate < 5) {
    throw new Error("Generated number is less than 5.");
 }
  return (
    <>
      <button onClick={handleClick} className="generatebtn">
        Generate
      </button>
    </>
  );
};

function App() {
  function ErrorFallback({ error, resetErrorBoundary }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }
  return (
    <div style={{ marginLeft: "30px", marginTop: "50px" }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <p>
          Click to generate random number if number is greater than 5 this will
          throw error!
        </p>

        <GenerateNum />
      </ErrorBoundary>
    </div>
  );
}

export default App;
