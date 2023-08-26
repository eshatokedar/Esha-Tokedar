import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

function Profile() {

  const profileStyle = {
    backgroundImage:
      "url('https://ismorbo.com/wp-content/uploads/2016/04/kurt-cobain.jpg')",
    backgroundSize: "cover",
    borderRadius: "40px",
    marginLeft:"90rem",
    height:"3rem",
    width:"3rem",
  };

  const notifStyle = {
    backgroundColor: "#D9D9D9",
    width:"40px",
    borderRadius: "2.75rem",
    height: "3rem",
    marginLeft: "87rem",
    marginTop:"-48px"
  };
  const logoStyle={
    fontSize:"2rem",
    marginLeft:"3px",
    marginTop:"5.5px"
  }

  return (
    <div className="profile">
      <div className="profile-pic" style={profileStyle}></div>
      <div className="notif-logo" style={notifStyle}><IoMdNotificationsOutline style={logoStyle}/></div>
    </div>
  );
}

export default Profile;

