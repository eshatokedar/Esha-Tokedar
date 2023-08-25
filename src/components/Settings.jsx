import React from "react";
import { BiEditAlt, BiHelpCircle } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoChevronBackSharp } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";

function Settings() {
  return (
    <div className="setting-tab">
      <div className="settings">
        <IoChevronBackSharp className="icon" />
        <h3>settings</h3>
      </div>
      <br />
      <ul>
        <div className="option-1">
          <BiEditAlt className="icon" />
          <h3>Edit profile</h3>
        </div>
        <div className="option-2">
          <IoMdNotificationsOutline className="icon" />
          <h3>Notification</h3>
        </div>
        <div className="option-3">
          <MdOutlineLock className="icon" />
          <h3>Security</h3>
        </div>
        <div className="option-4">
          <AiOutlineSetting className="icon" />
          <h3>Appearance</h3>
        </div>
        <div className="option-5">
          <BiHelpCircle className="icon" />
          <h3>Help</h3>
        </div>
      </ul>
    </div>
  );
}

export default Settings;
