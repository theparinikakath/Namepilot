const Footer = () => {
  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#e0f2fe",
        textAlign: "center",
        padding: "2rem 1rem",
        borderTop: "1px solid #cbd5e1",
        marginTop: "4rem",
        position: "relative",
        width: "100%",
      }}
    >
      <p style={{ color: "#334155", fontSize: "1rem", marginBottom: "0.5rem" }}>
        © 2025 NamePilot. All rights reserved.
      </p>
      <p style={{ fontSize: "1rem", color: "#0f172a" }}>
        Made with <span style={{ color: "red" }}>❤</span> by NamePilot
      </p>
    </footer>
  );
};

export default Footer;
