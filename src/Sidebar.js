import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  BarChart as BarChartIcon,
  ExitToApp as ExitToAppIcon,
} from "@mui/icons-material";
import "./styles.css";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (event) => {
    const isIconClick = event.target.tagName === "svg"; // Check if the target is the SVG element of the menu icon

    if (isIconClick) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className={`navbar ${isSidebarOpen ? "open" : ""}`}>
      <div className="topbar">
        <div className="logo" onClick={toggleSidebar}>
          <MenuIcon className="bx bx-menu menu-icon" />
          <span className="logo-name">StudyPoint</span>
        </div>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="logo-sidebar" onClick={toggleSidebar}>
          <MenuIcon className="bx bx-menu menu-icon" />
          <span className="logo-name">StudyPoint</span>
        </div>

        <ul className="lists">
          <li className="list">
            <Link to="/" className="nav-link" onClick={closeSidebar}>
              <HomeIcon className="icon" />
              <span className="link">Dashboard</span>
            </Link>
          </li>
          <li className="list">
            <Link to="/Btech" className="nav-link" onClick={closeSidebar}>
              <BarChartIcon className="icon" />
              <span className="link">BTech</span>
            </Link>
          </li>
          <li className="list">
            <Link to="/bca" className="nav-link" onClick={closeSidebar}>
              <BarChartIcon className="icon" />
              <span className="link">BCA</span>
            </Link>
          </li>
          <li className="list">
            <Link to="/mca" className="nav-link" onClick={closeSidebar}>
              <BarChartIcon className="icon" />
              <span className="link">MCA</span>
            </Link>
          </li>
          <li className="list">
            <Link to="/bba" className="nav-link" onClick={closeSidebar}>
              <BarChartIcon className="icon" />
              <span className="link">BBA</span>
            </Link>
          </li>
          <li className="list">
            <Link to="/mba" className="nav-link" onClick={closeSidebar}>
              <BarChartIcon className="icon" />
              <span className="link">MBA</span>
            </Link>
          </li>
        </ul>

        <div className="bottom-content">
          <li className="list">
            <Link to="/aboutus" className="nav-link" onClick={closeSidebar}>
              <span className="link">AboutUs</span>
            </Link>
          </li>
          <li className="list">
            <Link to="#" className="nav-link" onClick={closeSidebar}>
              <ExitToAppIcon className="icon" />
              <span className="link">Logout</span>
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
