import React from "react";
import { useNavigate } from "react-router-dom";

const SectionWithImageText = ({
  imageFirst = true,
  imgSrc,
  imgAlt,
  title,
  children,
  style,
}) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: imageFirst ? "row" : "row-reverse",
        alignItems: "center",
        gap: "30px",
        marginBottom: "60px",
        flexWrap: "wrap",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0 20px",
        ...style, // merge passed styles
      }}
    >
      <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{
            width: "100%",
            borderRadius: "10px",
            objectFit: "cover",
            maxHeight: "300px",
          }}
        />
      </div>
      <div
        style={{
          flex: "1 1 400px",
          minWidth: "300px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            color: "#1D4ED8",
            marginBottom: "10px",
          }}
        >
          {title}
        </h2>
        <p style={{ fontSize: "1rem", color: "#334155" }}>{children}</p>
      </div>
    </section>
  );
};

const QuickContact = () => {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/contact");
  };

  return (
    <div
      style={{
        backgroundColor: "#1D4ED8",
        color: "white",
        padding: "30px 20px",
        borderRadius: "10px",
        maxWidth: "600px",
        margin: "40px auto 20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        Get in Touch Quickly
      </h2>
      <p style={{ marginBottom: "20px" }}>
        Have questions or want a demo? Reach out to our team now!
      </p>
      <form
        onSubmit={handleNavigate}
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          style={{
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "5px",
            border: "none",
            flex: "1 1 200px",
            minWidth: "200px",
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          style={{
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "5px",
            border: "none",
            flex: "1 1 200px",
            minWidth: "200px",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px 25px",
            fontSize: "1rem",
            cursor: "pointer",
            flex: "0 0 auto",
          }}
        >
          Contact Us
        </button>
      </form>
    </div>
  );
};

const Hotels = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "6rem 1rem",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "4rem 1rem",
            borderRadius: "10px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <br />
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Namepilot for Hotels
          </h1>
          <p style={{ fontSize: "1.3rem" }}>
            Empowering hotels to enhance guest satisfaction, reputation, and
            online presence.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      <SectionWithImageText
        imageFirst={true}
        imgSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
        imgAlt="Guest Review Management"
        title="Guest Review Management"
        style={{ marginTop: "40px" }} // <-- Added margin-top here
      >
        Monitor and respond to guest reviews from all major platforms to boost
        your hotel's reputation.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={false}
        imgSrc="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=600&q=80"
        imgAlt="Real-Time Alerts"
        title="Real-Time Alerts"
      >
        Get instant notifications on new guest feedback and respond promptly to
        maintain high ratings.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={true}
        imgSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        imgAlt="Reputation Analytics"
        title="Reputation Analytics"
      >
        Analyze trends and sentiments from reviews to make data-driven
        improvements in guest experience.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={false}
        imgSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
        imgAlt="Multi-Platform Integration"
        title="Multi-Platform Integration"
      >
        Manage reviews, social media, and booking sites all from one intuitive
        dashboard.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={true}
        imgSrc="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=600&q=80"
        imgAlt="Automated Review Requests"
        title="Automated Review Requests"
      >
        Send personalized review requests via SMS and email to increase
        positive guest feedback.
      </SectionWithImageText>

      {/* Additional Info Section */}
      <section
        style={{
          padding: "3rem 1rem",
          backgroundColor: "#f9f9f9",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto 60px",
          borderRadius: "10px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Industries - Famepilot Internet Private Ltd.
        </h2>
        <p>
          <strong>1st Party Reviews Generation:</strong> Request direct feedback
          from your guests to address concerns proactively.
        </p>
        <p style={{ marginTop: "1rem" }}>
          <strong>3rd Party Reviews Generation:</strong> Amplify your hotel's
          visibility on Google, TripAdvisor, and more.
        </p>
      </section>

      {/* Monitoring Section */}
      <section
        style={{
          padding: "3rem 1rem",
          backgroundColor: "#fff",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto 60px",
          borderRadius: "10px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
          Save Time, Cost & Efforts By Social Monitoring
        </h2>
        <p>Your focus should be on guest experience, not on managing feedback chaos.</p>
        <h3 style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
          Real Time Review Alerts & Response Management
        </h3>
        <p>Receive alerts for guest reviews and reply directly from the Famepilot dashboard in real-time.</p>
      </section>

      {/* Survey Section */}
      <section
        style={{
          padding: "3rem 1rem",
          backgroundColor: "#f0f0f0",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto 60px",
          borderRadius: "10px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Online & Offline Surveys</h2>
        <p>
          <strong>Online Survey:</strong> Collect valuable guest feedback regularly with easy-to-send surveys.
        </p>
        <p>
          <strong>Offline & Kiosk Survey:</strong> Place feedback kiosks at the hotel lobby to capture onsite reviews.
        </p>
      </section>

      {/* Quick Contact Form */}
      <QuickContact />
    </div>
  );
};

export default Hotels;
