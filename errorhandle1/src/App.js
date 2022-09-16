import React from "react";
import "./App.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
   
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

  }
  refresh(){
    window.location.reload();
  }
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong</h2>
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
          <button onClick={this.refresh}>Try again</button>
        </div>
      );
    }
   
    return this.props.children;
  }
}

// This is a component for Generate numbers
class GenerateNum extends React.Component {
  constructor(props) {
    super(props);
    this.state = { generate: 20 };
  }
  generateRandom = (min, max) => {
    return Math.floor(min + Math.random() * (max - min + 1));
  };
  handleClick = () => {
    let num = this.generateRandom(1, 20);
    alert("Generated number: "+num)
    this.setState({
      generate: num
    });
  };

  render() {
    if (this.state.generate < 5) {
      throw new Error("Crashed!!!!");
    }
    return (
      <>
      
        <button onClick={this.handleClick} className="generatebtn">
          Generate
        </button>
      </>
    );
  }
}

function App() {
  return (
    <div style={{ marginLeft: "30px", marginTop: "50px" }}>
      <ErrorBoundary>
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