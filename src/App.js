import React from "react";
import Form from "./Form";
import { useState } from "react";

    function App() {
      const [list, setList] = useState(["Jane", "John"]);
      const people = list.map(person => {
        return <h1>{person}</h1>  
      })
    
      return (
        <div className="App">
          <h2>Add New Name</h2>
          <Form />
          <h1>{people}</h1>
        </div>
      );
    }


export default App;
