import React from "react";
import Button from "./Button";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";


function soma(a, b) {
  alert(a + b)
}

function App() {
  return (
    <div className="App">
      Hello, world!
      <Button onClick={() => soma(10, 20)} name="claduio"/>
      <ComponentA>
        <ComponentB>
         <Button onClick={() => soma(20, 20)} name="claudio 2"/>
        </ComponentB>
      </ComponentA>
    </div>
  );
}

export default App;

