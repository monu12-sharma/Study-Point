// App.js

import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./styles.css";
import Topbar from "./TopBar";
import Btech from "./Btech";
import Bca from "./Bca";
import Mca from "./Mca";
import Bba from "./Bba";
import Mba from "./Mba";
import NotFound from "./NotFound";
import AboutUs from "./AboutUs";
import Home from "./Home";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (event) => {
    const isIconClick = event.target.tagName === "svg";

    if (isIconClick) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };
  return (
    <Router>
      <Topbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`content ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/Btech" element={<Btech />} />
          <Route path="/bca" element={<Bca />} />
          <Route path="/mca" element={<Mca />} />
          <Route path="/bba" element={<Bba />} />
          <Route path="/mba" element={<Mba />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
