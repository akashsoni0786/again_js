import React from "react";
import "./App.css";
import Name from "./Name";

function App() {
  // const [inp, setInp] = React.useState();
  // const [name, setName] = React.useState();
  // const submitname = () => {
  //   alert(inp)
  //   if (typeof(inp) === String) {
  //     alert("String");
     
  //     setName(inp)
  //   }
  // };
  return (
    <div className="App">
      {/* <input
        onChange={(e) => {
          setInp(e.target.value);
        }}
        placeholder="Enter string type..."
      />
      <button onClick={submitname}>Submit</button> */}
      <p>This is String type so no error on console</p>
      <Name name={"Akash"} />
    </div>
  );
}

export default App;
