import React from "react";
import "./App.css";
import Data from "./Data";

function App() {
  const [name, setName] = React.useState("");
  const [marks, setMarks] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [show, setShow] = React.useState(0);
  const submitfunc = () => {
    if (name == "" || marks == "" || total == "") {
      alert("All field is required!");
    } else {
      setShow(1);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Entry Form</h2>
        <div className="tables">
          <div className="rowss">
            <label className="details">Name :</label>
            <input
              className="details"
              onChange={(e) => {
                setName(e.target.value);
                setShow(0);
              }}
            />
          </div>

          <div className="rowss">
            <label className="details">Marks :</label>
            <input
              className="details"
              onChange={(e) => {
                setMarks(+e.target.value);
                setShow(0);
              }}
            />
          </div>

          <div className="rowss">
            <label className="details">Total :</label>
            <input
              className="details"
              onChange={(e) => {
                setTotal(+e.target.value);
                setShow(0);
              }}
            />
          </div>
          <button className="rowss" onClick={submitfunc}>
            Submit
          </button>
        </div>
        {show == 1 && (
          <Data
            name={name}
            marks={marks}
            total={total}
          />
        )}
      </header>
    </div>
  );
}

export default App;
