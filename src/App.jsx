import React, { useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import { Tab } from "@mui/material";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="container">
      <Form data={data} setData={setData} />
      <Table data={data} />
    </div>
  );
}

export default App;
