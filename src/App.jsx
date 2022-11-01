import React, { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  return (
    <div className="container">
      <Form data={data} setData={setData} />
      <Card data={data} />
    </div>
  );
}

export default App;
