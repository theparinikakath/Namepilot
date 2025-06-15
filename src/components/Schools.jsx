import React from "react";
import { useNavigate } from "react-router-dom";

const SectionWithImageText = ({ imageFirst = true, imgSrc, imgAlt, title, children }) => {
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
      }}
    >
      <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{ width: "100%", borderRadius: "10px", objectFit: "cover", maxHeight: "300px" }}
        />
      </div>
      <div style={{ flex: "1 1 400px", minWidth: "300px", fontFamily: "Arial, sans-serif" }}>
        <h2 style={{ fontSize: "1.8rem", color: "#1D4ED8", marginBottom: "10px" }}>{title}</h2>
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
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>Get in Touch Quickly</h2>
      <p style={{ marginBottom: "20px" }}>Have questions or want a demo? Reach out to our team now!</p>
      <form
        onSubmit={handleNavigate}
        style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}
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

const Schools = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/hand-drawn-flat-school-frame_23-2149578102.jpg?semt=ais_items_boosted&w=740')",
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
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "4rem 1rem",
            borderRadius: "10px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <h1 style={{ fontSize: "2.8rem", fontWeight: "bold", marginBottom: "1rem" }}>Famepilot for Schools</h1>
          <p style={{ fontSize: "1.3rem" }}>
            Helping schools improve communication, feedback, and parent satisfaction.
          </p>
        </div>
      </section>

      {/* Informational Sections with Images */}
      <SectionWithImageText
        imageFirst={true}
        imgSrc="https://www.nfcc.org/wp-content/uploads/2019/07/bigstock-Multiethnic-parents-helping-ch-195733438.jpg"
        imgAlt="Streamline Parent Communication"
        title="Streamline Parent Communication"
      >
        Easily send messages, announcements, and updates to parents via multiple channels.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={false}
        imgSrc="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
        imgAlt="Real-time Feedback from Students"
        title="Real-time Feedback from Students"
      >
        Collect suggestions and opinions from students instantly and anonymously.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={true}
        imgSrc="https://i.pinimg.com/736x/e9/4f/1e/e94f1ed73c75d5a9207ba0e37bdd3084.jpg"
        imgAlt="Automated Performance Reviews"
        title="Automated Performance Reviews"
      >
        Evaluate staff and class experiences with recurring performance surveys.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={false}
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejMvRY_oxEbGMUT8KZ9bFmurQ9QDs-U2xYg&s"
        imgAlt="Digital Attendance Insights"
        title="Digital Attendance Insights"
      >
        Track attendance trends and generate insights to boost engagement.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={true}
        imgSrc="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80"
        imgAlt="Centralized Dashboard for Administrators"
        title="Centralized Dashboard for Administrators"
      >
        Access key metrics and insights in one centralized platform.
      </SectionWithImageText>

      {/* Review Features Section */}
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
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Industries - Famepilot Internet Private Ltd.</h2>
        <p>
          <strong>1st Party Reviews Generation:</strong> Ask parents to review your school internally via SMS,
          Email & WhatsApp, and resolve concerns proactively.
        </p>
        <p style={{ marginTop: "1rem" }}>
          <strong>3rd Party Reviews Generation:</strong> Encourage families to share positive feedback on Google,
          Facebook, Twitter, etc.
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
        <p>Your efforts should focus on teaching, not on managing feedback chaos.</p>
        <h3 style={{ marginTop: "1rem", fontSize: "1.2rem" }}>Real Time Review Alerts & Response Management</h3>
        <p>Get alerts for parent reviews and reply directly from the Famepilot dashboard in real-time.</p>
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
          <strong>Online Survey:</strong> Send surveys to gather parent and student insights regularly.
        </p>
        <p>
          <strong>Offline & Kiosk Survey:</strong> Set up feedback kiosks at school entrances or events.
        </p>
      </section>

      {/* Quick Contact Form */}
      <QuickContact />
    </div>
  );
};

export default Schools;
