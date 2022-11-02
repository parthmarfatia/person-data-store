import React, { useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState(
    JSON.parse(sessionStorage.getItem("data")) || []
  );
  useEffect(() => {
    sessionStorage.setItem("data", JSON.stringify(data));
  }, [data.length]);
  return (
    <div className="container">
      <Form data={data} setData={setData} />
      <Table data={data} />
    </div>
  );
}

export default App;
