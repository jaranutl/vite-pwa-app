import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const Settings = () => {
  return (
    <div>
      <p className="text-xl m-5">Settings</p>
      <ul className="menu bg-base-200 rounded-box w-auto">
        <li>
          <a>
            <AccountCircleOutlinedIcon />
            My Account
          </a>
        </li>
        <li>
          <a>About Us</a>
        </li>
        <li>
          <a>About this App</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};
