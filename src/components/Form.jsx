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

  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setFormData({
      firstName: "",
      lastName: "",
      gender: "--",
      dob: "",
      email: "",
      mobile: "",
      city: "",
      pincode: "",
    });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  }
  return (
    <div className="form--container">
      <h1 className="form--header">Enter Details:</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form--row">
          <div className="form--label">
            <i>First Name</i>
          </div>
          <input
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
            className="form--input"
            name="email"
            onChange={handleChange}
            value={formData.email}
            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
            required
          />
        </div>

        <div className="form--row">
          <div className="form--label">
            <i>Date of Birth</i>
          </div>
          <input
            placeholder="dd/mm/yyyy"
            className="form--input"
            name="dob"
            onChange={handleChange}
            size="7"
            value={formData.dob}
            pattern="^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$"
            required
          />
        </div>

        <div className="form--row">
          <div className="form--label">
            <i>Mobile</i>
          </div>
          <input
            className="form--input"
            name="mobile"
            onChange={handleChange}
            value={formData.mobile}
            pattern="^(\+\d{1,3}[- ]?)?\d{10}$"
            required
          />
        </div>

        <div className="form--row">
          <div className="form--label">
            <i>City</i>
          </div>
          <input
            type="city"
            className="form--input"
            name="city"
            onChange={handleChange}
            value={formData.city}
            pattern="^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$"
            required
          />
        </div>

        <div className="form--row">
          <div className="form--label">
            <i>Pincode</i>
          </div>
          <input
            type="pincode"
            className="form--input"
            name="pincode"
            onChange={handleChange}
            size="3"
            value={formData.pincode}
            pattern="^\d{4}$|^\d{6}$"
            required
          />
        </div>

        <button className="form--submit">Submit</button>
        {isSubmitted && (
          <div className="form--success">
            Form has been submitted successfully
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
