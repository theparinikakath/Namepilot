import React from "react";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <section id="about" style={{ padding: "5rem 0", backgroundColor: "white" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "2.5rem",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", color: "blue" }}>
            About Us
          </h2>
          <p style={{ color: "#4B5563", fontSize: "1.125rem", marginBottom: "1rem" }}>
            Famepilot helps businesses streamline their customer engagement and grow their digital reputation with ease.
          </p>
          <p style={{ color: "#4B5563", fontSize: "1.125rem", marginBottom: "1rem" }}>
            Our platform offers an intuitive suite of tools designed to collect, manage, and showcase customer feedback, empowering companies to build trust and credibility in their markets.
          </p>
          <p style={{ color: "#4B5563", fontSize: "1.125rem" }}>
            By integrating seamlessly with popular communication channels, Famepilot ensures that your customers' voices are heard, while providing actionable insights to help you improve your services and customer satisfaction.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={aboutImg}
            alt="About Us"
            style={{ width: "100%", height: "auto", borderRadius: "0.5rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
