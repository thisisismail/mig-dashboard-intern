import React from "react";
import "./style/HeaderBar.css";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Typography } from "@material-tailwind/react";

export default function HeaderBar() {
  const size = 24;
  return (
    <div className="headbar-container">
      <div className="w-full flex justify-end flex-row gap-4">
        <BiSearch size={size} />
        <IoMdNotificationsOutline size={size} />
        <div className="flex flex-row pl-4">
          <BiUserCircle size={size} />
          <Typography>Nama Saya</Typography>
        </div>
      </div>
    </div>
  );
}
