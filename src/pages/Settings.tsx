import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

export const Settings = () => {
  return (
    <div>
      <p className="text-xl m-5">Settings</p>
      <ul className="menu bg-base-200 rounded-box w-auto">
        <li>
          <a>
            <AccountCircleOutlinedIcon />
            My Account
            <ArrowForwardIosOutlinedIcon />
          </a>
        </li>
        <li>
          <a>
            <Groups2OutlinedIcon />
            About Us
            <ArrowForwardIosOutlinedIcon />
          </a>
        </li>
        <li>
          <a>
            <InfoOutlinedIcon />
            About this App
            <ArrowForwardIosOutlinedIcon />
          </a>
        </li>
        <li>
          <a>
            <LogoutOutlinedIcon />
            Logout
            <ArrowForwardIosOutlinedIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};
