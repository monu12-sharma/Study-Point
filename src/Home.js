import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="overlay"></section>
      <div className="test" style={{ marginTop: "40px" }}>
        <Link to="/Btech">
          <div className="Btech1" id="c1">
            BTech
          </div>
        </Link>
        <Link to="/bca">
          <div className="Btech1" id="c2">
            BCA
          </div>
        </Link>
        <Link to="/mca">
          <div className="Btech1" id="c3">
            MCA
          </div>
        </Link>
        <Link to="/bba">
          <div className="Btech1" id="c4">
            BBA
          </div>
        </Link>
        <Link to="/mba">
          <div className="Btech1" id="c5">
            MBA
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
