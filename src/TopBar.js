
import React from "react";
import { Menu as MenuIcon } from "@mui/icons-material";

function Topbar({ toggleSidebar }) {
  return (
    <div className="topbar">
      <div className="logo" onClick={toggleSidebar}>
        <MenuIcon className="menu-icon" />
        <span className="logo-name">StudyPoint</span>
      </div>
    </div>
  );
}

export default Topbar;
