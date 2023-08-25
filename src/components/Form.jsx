import React, { useState } from "react";
import {BsFillCheckSquareFill,BsEye} from 'react-icons/bs';
import {AiFillFolder} from 'react-icons/ai';

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [resume, setResume] = useState(null);
  const [mobileValid, setMobileValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



  const handleResumeUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setResume(uploadedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNumber("");
    setPassword("");
    setStartDate("");
    setEndDate("");
    setResume(null);
  };

  const labelStyle = {
    color: "#1C1C1C",
    fontFamily: "Roboto",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    marginBottom: "5px",
  };

  const inputStyle = {
    color: "#858585",
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  };

  const cancelStyle = {
    color: "#0889FF",
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const submitStyle = {
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const h1Style = {
    width: "14.5rem",
    height: "3.3125rem",
    color: "#000",
    fontFamily: "Roboto",
    fontSize: "2.8125rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailValid(/^\S+@\S+\.\S+$/.test(value));
  };
  const handleMobileChange = (event) => {
    const value = event.target.value;
    setMobileNumber(value);
    setMobileValid(/^\d{10}$/.test(value));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="form">
      <div className="top-box">
        <h1 className="edit-profile" style={h1Style}>
          Edit Profile{" "}
        </h1>
        <div className="profile-picture"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="name">
          <div className="box-1">
            <label style={labelStyle}>First Name</label>
            <input
              style={inputStyle}
              className="first-name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="box-2">
            <label style={labelStyle}>Last Name</label>
            <input
              style={inputStyle}
              className="last-name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <br />

        <div className="box-3">
          <label style={labelStyle}>Email</label>
          <br />
          <input
            style={inputStyle}
            className="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          {emailValid && <span className="green-tick"><BsFillCheckSquareFill/></span>}
        </div>
        <br />

        <div className="box-4">
          <label style={labelStyle}>Mobile Number</label>
          <br />
          <input
            style={inputStyle}
            type="text"
            value={mobileNumber}
            onChange={handleMobileChange}
            className="mobile-number"
          />
          {mobileValid && <span className="green-tick"><BsFillCheckSquareFill/></span>}
        </div>
        <br />

        <div className="box-5">
          <label style={labelStyle}>Password</label>
          <br />
          <input
            style={inputStyle}
            className="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
          />
           <span
          className="password-toggle"
          onClick={toggleShowPassword}
        >
           {showPassword ? 'Hide' : <BsEye/>}
        </span>
        </div>
        <br />

        <div className="college">
          <div className="box-6">
            <label style={labelStyle}>College Start Date</label>
            <input
              style={inputStyle}
              className="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="box-7">
            <label style={labelStyle}>College End Date</label>
            <input
              style={inputStyle}
              className="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <br />

        <div className="box-8">
          <label style={labelStyle}>Resume</label>
          <br />
          <input
            style={inputStyle}
            className="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
          />
          <AiFillFolder className="folder-icon"/>
        </div>
        <br />
        <br />
        <div>
          <button className="cancel-button" style={cancelStyle}>
            Cancel
          </button>
          <button className="submit-button" style={submitStyle} type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
