import React, { useState } from "react";
import { useEffect } from "react";

function Table(props) {
  const [searchValue, setSearchValue] = useState("");
  const { data } = props;
  const [displayData, setDisplayData] = useState(data);

  useEffect(() => {
    setDisplayData(data.sort(compare));
  }, [data.length]);

  function compare(a, b) {
    if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
      return -1;
    }
    if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  const tableData = displayData.map((data, i) => {
    const { firstName, lastName, gender, dob, email, mobile, city, pincode } =
      data;
    return (
      <tr key={i}>
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
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>City</th>
            <th>Pincode</th>
          </tr>
        </thead>

        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
}

export default Table;
