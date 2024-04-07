import React from "react";

const AboutUs = () => {
  return (
    <div className="test" style={{ marginTop: "35px" }}>
      <header
        style={{
          backgroundColor: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "1em 0",
        }}
      >
        <h1>About Us</h1>
      </header>

      <section
        className="about-us"
        style={{
          maxWidth: "800px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ color: "#333" }}>Who We Are</h2>
        <p>
        It seems like there might be a typo in your question.
         If you're asking about MCA, it likely refers to Master of Computer Applications,
          which is a postgraduate program in computer science and applications.
        </p>
      </section>

      

      <section
        className="team"
        style={{
          maxWidth: "800px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ color: "#333" }}>Our Team</h2>
        <ul>
          <li>Monu Sharma - MCA</li> 
        </ul>
      </section>

      <section
        className="gallery"
        style={{
          maxWidth: "800px",
          margin: "20px auto",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#333" }}>Our Profile</h2>
        <img
          src="monu.jpg"
          alt="Office Image 1"
          style={{ width: "200px", margin: "10px" }}
        />
       
        
       
      </section>
    </div>
  );
};

export default AboutUs;
