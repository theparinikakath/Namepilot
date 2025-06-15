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
        ...style,
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
        Want to improve college communication and student engagement? Contact
        us!
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

const Colleges = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20220831/pngtree-modern-college-campus-buildings-educational-application-hall-photo-image_19709694.jpg')",
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
            NamePilot for Colleges
          </h1>
          <p style={{ fontSize: "1.3rem" }}>
            Helping colleges enhance communication, feedback, and student
            satisfaction.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      <SectionWithImageText
        imageFirst={true}
        imgSrc="https://images.unsplash.com/photo-1581092334434-b3c3f22c8821?auto=format&fit=crop&w=600&q=80"
        imgAlt="Student Feedback Management"
        title="Student Feedback Management"
        style={{ marginTop: "40px" }}
      >
        Collect and manage student feedback seamlessly across departments and
        campuses.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={false}
        imgSrc="https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=600&q=80"
        imgAlt="Real-Time Alerts"
        title="Real-Time Alerts"
      >
        Get instant notifications for critical student feedback and campus
        events to respond quickly.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={true}
        imgSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
        imgAlt="Reputation & Analytics"
        title="Reputation & Analytics"
      >
        Analyze student satisfaction trends and engagement metrics to improve
        campus life.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={false}
        imgSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
        imgAlt="Multi-Channel Integration"
        title="Multi-Channel Integration"
      >
        Manage communication through emails, social media, and campus portals
        from a unified dashboard.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={true}
        imgSrc="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80"
        imgAlt="Survey & Event Management"
        title="Survey & Event Management"
      >
        Run online and offline surveys plus manage campus events effortlessly.
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
          Industries - Namepilot 
        </h2>
        <p>
          <strong>1st Party Feedback Generation:</strong> Collect direct
          responses from students to enhance their college experience.
        </p>
        <p style={{ marginTop: "1rem" }}>
          <strong>3rd Party Feedback Generation:</strong> Improve your
          reputation on external platforms with verified student reviews.
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
        <p>Your focus should be on student success, not on managing feedback chaos.</p>
        <h3 style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
          Real Time Feedback Alerts & Response Management
        </h3>
        <p>
          Receive alerts for student feedback and respond directly from the
          Namepilot dashboard in real-time.
        </p>
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
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Online & Offline Surveys
        </h2>
        <p>
          <strong>Online Survey:</strong> Collect valuable student feedback
          regularly with easy-to-send surveys.
        </p>
        <p>
          <strong>Offline & Kiosk Survey:</strong> Place kiosks in common areas
          to capture real-time student opinions.
        </p>
      </section>

      {/* Quick Contact Form */}
      <QuickContact />
    </div>
  );
};

export default Colleges;
