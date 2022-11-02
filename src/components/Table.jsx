import React, { useState } from "react";
import { useEffect } from "react";

function Table(props) {
  const [searchValue, setSearchValue] = useState("");
  const { data } = props;
  const [displayData, setDisplayData] = useState(data);

  useEffect(() => {
    setDisplayData(data);
  }, [data.length]);

  const tableData = displayData.map((data) => {
    const { firstName, lastName, gender, dob, email, mobile, city, pincode } =
      data;
    return (
      <tr>
        <td>{`${firstName} ${lastName}`}</td>
        <td>{gender}</td>
        <td>{dob}</td>
        <td>{email}</td>
        <td>{mobile}</td>
        <td>{city}</td>
        <td>{pincode}</td>
      </tr>
    );
  });

  function handleSearchChange(e) {
    const { value } = e.target;
    setDisplayData(() => {
      return data.filter((data) =>
        `${data.firstName.toLowerCase()} ${data.lastName.toLowerCase()}`.includes(
          value.toLowerCase()
        )
      );
    });
    setSearchValue(value);
  }

  return (
    <div className="table--container">
      <div className="table--search">
        <input
          placeholder="search a name"
          type="text"
          className="table--input"
          onChange={handleSearchChange}
          value={searchValue}
        />
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>City</th>
          <th>Pincode</th>
        </tr>
        {tableData}
      </table>
    </div>
  );
}

export default Table;
