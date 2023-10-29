import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const [showSublinks, setShowSublinks] = useState(false);

  const handleHover = () => {
    setShowSublinks(true);
  };

  const leaveHover = () => {
    setShowSublinks(false);
  };

  const handleClick = () => {
    if (showSublinks) {
      setShowSublinks(false);
    } else {
      setShowSublinks(true);
    }
  };

  const sublinks = ["Sublink 1", "Sublink 2", "Sublink 3"];

  return (
    <div className="bg-[#eab308] h-[50px] flex ">
      <div className="flex justify-center items-center m-auto ml-[70px] bg-black h-[50px] w-[300px]">
        <MenuIcon style={{ color: "white", fontSize: 40 }} />
        <span className="font-bold text-white ml-5">SHOP DEPARTMENT</span>
      </div>

      <div className="flex justify-between items-center mr-[400px]">
        <div className="mr-10 list flex justify-center items-center h-[50px]">
          <h1>Home</h1>
        </div>
        <div
          className="mr-10 list flex justify-center items-center h-[50px]"
          onMouseEnter={handleHover}
          onMouseLeave={leaveHover}
          onClick={handleClick}
        >
          <h1>Shop</h1>
          {showSublinks && (
            <ul className="absolute bg-white mt-[100px] min-w-[80px] z-10 rounded-[2px]">
              {sublinks.map((sublink, index) => (
                <li className='ml-[3px] font-bold' key={index}>{sublink}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="mr-10 list flex justify-center items-center h-[50px]">
          <h1>Blog</h1>
        </div>
        <div className="mr-10 list flex justify-center items-center h-[50px]">
          <h1>About Us</h1>
        </div>
        <div className="mr-10 list flex justify-center items-center h-[50px]">
          <h1>Gallery</h1>
        </div>
        <div className="mr-10 list flex justify-center items-center h-[50px]">
          {" "}
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Nav;
