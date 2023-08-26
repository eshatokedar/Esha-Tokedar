import React from 'react';
import {AiOutlineHome, AiOutlineCalendar, AiTwotoneSetting } from 'react-icons/ai';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {IoPersonOutline} from 'react-icons/io5';
import {MdShowChart} from 'react-icons/md';

function Banner() {
    const logoStyle={
        backgroundImage:'url("https://live.staticflickr.com/3648/3468097586_15b2a1e66c.jpg")',
        backgroundSize:'contain',
        height:'100px',
        width:'97px',
        marginLeft:'0.1rem',
        marginRight:'2.5rem',
        marginTop:'4rem',
        borderRadius:'250px'
    }
  return (
    <div className="banner">
      <ul>
      <div className="banner-logo" style={logoStyle}></div>
        <div className="banner-option-1">
          <AiOutlineHome className="banner-icon" />
        </div>
        <div className="banner-option-2">
          <IoMdNotificationsOutline className="banner-icon" />
        </div>
        <div className="banner-option-3">
          <AiOutlineCalendar className="banner-icon" />
        </div>
        <div className="banner-option-4">
          <MdShowChart className="banner-icon" />
        </div>
        <div className="banner-option-5">
          <IoPersonOutline className="banner-icon" />
        </div>
        <div className="banner-option-6">
          <AiTwotoneSetting className="banner-icon-setting" />
        </div>
      </ul>
    </div>
  )
}

export default Banner