import React, { useState } from "react";
import { Dropdown } from "antd";
import Login from "@/components/auth/Login";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      key: "1",
      label: <Login />,
    },
  ];

  const handleClickUser = () => {
    console.log("test");
  };

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Dropdown
        open={isOpen}
        placement="bottom"
        className="drop"
        menu={{
          items,
        }}
      >
        <a
          onClick={(e) => {
            e.preventDefault();
            handleDropdown();
          }}
          // className="drop"
        >
          <span onClick={handleClickUser}>
            <i className="far fa-user"></i>
          </span>
        </a>
      </Dropdown>
    </div>
  );
};

export default UserMenu;
