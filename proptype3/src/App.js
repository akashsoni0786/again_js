import React from "react";
import './App.css';
import Proptyp from "./Proptyp";

function App() {
  const [obj,setObj] = React.useState({});
  const [boolss,setBool] = React.useState(false);
  const [sym,setSym] = React.useState(Symbol());
  const functionCheck =()=>{
    return "Func Area"
  }
  return (
    <div className="App">
      <header className="App-header">
        <Proptyp s1={"String Area"} s2={obj} s3={23} s4={boolss} s5={functionCheck} s6={sym}/>
      </header>
    </div>
  );
}

export default App;
