import React, { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "--",
    dob: "",
    email: "",
    mobile: "",
    city: "",
    pincode: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.setData([...props.data, formData]);
  }
  return (
    <div className="form--container">
      <h1 className="form--header">Enter Person Details:</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form--row">
          <div className="form--label">
            <i>First Name</i>
          </div>
          <input
            placeholder="First Name"
            className="form--input"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            required
          />
        </div>
        <div className="form--row">
          <div className="form--label">
            <i>Last Name</i>
          </div>
          <input
            placeholder="Last Name"
            className="form--input"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            required
          />
        </div>
        <div className="form--row">
          <div className="form--label">
            <i>Gender</i>
          </div>
          <select
            name="gender"
            onChange={handleChange}
            value={formData.gender}
            className="form--input"
          >
            <option value="--">--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form--row">
          <div className="form--label">
            <i>Email</i>
          </div>
          <input
            placeholder="Email address"
            className="form--input"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>

        <div className="form--row">
          <div className="form--label">
            <i>Date of Birth</i>
          </div>
          <input
            placeholder="Date of birth"
            className="form--input"
            name="dob"
            onChange={handleChange}
            value={formData.dob}
            required
          />
        </div>

        <div className="form--row">
          <div className="form--label">
            <i>Mobile</i>
          </div>
          <input
            placeholder="Mobile"
            className="form--input"
            name="mobile"
            onChange={handleChange}
            value={formData.mobile}
            required
          />
        </div>

        <div className="form--row">
          <div className="form--label">
            <i>City</i>
          </div>
          <input
            type="city"
            placeholder="City"
            className="form--input"
            name="city"
            onChange={handleChange}
            value={formData.city}
            required
          />
        </div>

        <div className="form--row">
          <div className="form--label">
            <i>Pincode</i>
          </div>
          <input
            type="pincode"
            placeholder="Pin Code"
            className="form--input"
            name="pincode"
            onChange={handleChange}
            value={formData.pincode}
            required
          />
        </div>

        <button className="form--submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
