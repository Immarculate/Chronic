import { Input } from "@mui/icons-material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import { IconButton } from "@mui/material";
// import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";

const Navbar = () => {
  return (
    <div className="bg-white h-[100px] flex">
      <diV className="flex">
        <img
          className="flex m-auto ml-[50px] h-[35px]"
          src="https://chromium.themes.zone/local/wp-content/uploads/sites/4/2018/05/Logotype_big.png"
          alt="brand"
        />
      </diV>
      <diV className="font-bold flex text-white m-auto ">
        <input placeholder="Search Items" className="h-[30px] put w-[350px]" />
        <button className="bg-black font-bold h-[30px] w-[70px] flex items-center justify-center">
          Search
        </button>
      </diV>
      <div className="flex mr-[50px] justify-between">
        <div className="flex mr-[50px]">
          <CallIcon className="m-auto" />
          <div className="m-auto">
            <span className="text-black">Help-Line</span>
            <p className="font-bold text-black">+234 8130475422</p>
          </div>
        </div>

        <div className="flex">
        <IconButton
              // size="large"
              // aria-label="show 4 new mails"
              // color="inherit"
            >
              <Badge badgeContent={2} color="error">
                <ShoppingCartOutlinedIcon color='black' />
              </Badge>
            </IconButton>
          <div className="m-auto mr-[50px]">
            <span className="text-black">shopping chart</span>
            <p className="font-bold text-black">total.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
