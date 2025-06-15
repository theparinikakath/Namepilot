import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  // Styles object
  const styles = {
    container: {
      maxWidth: 600,
      margin: "50px auto",
      padding: "30px 40px",
      background: "#f9fafb",
      borderRadius: 12,
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      fontFamily:
        '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      color: "#222831",
    },
    title: {
      textAlign: "center",
      marginBottom: 40,
      fontSize: "2.8rem",
      fontWeight: 700,
      color: "#1e3a8a",
    },
    successMessage: {
      backgroundColor: "#d1fae5",
      color: "#065f46",
      padding: "18px 25px",
      borderRadius: 8,
      marginBottom: 25,
      fontWeight: 600,
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(6, 95, 70, 0.3)",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontWeight: 600,
      marginBottom: 8,
      fontSize: "1.1rem",
    },
    input: {
      padding: "14px 18px",
      fontSize: "1rem",
      borderRadius: 10,
      border: "2px solid #cbd5e1",
      background: "#ffffff",
      color: "#222831",
      marginBottom: 20,
      outline: "none",
      fontFamily:
        '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      boxSizing: "border-box",
    },
    inputError: {
      borderColor: "#dc2626",
      backgroundColor: "#fee2e2",
    },
    errorText: {
      color: "#b91c1c",
      fontSize: "0.9rem",
      marginTop: -15,
      marginBottom: 15,
      fontWeight: 600,
    },
    textarea: {
      padding: "14px 18px",
      fontSize: "1rem",
      borderRadius: 10,
      border: "2px solid #cbd5e1",
      background: "#ffffff",
      color: "#222831",
      marginBottom: 20,
      outline: "none",
      fontFamily:
        '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      boxSizing: "border-box",
      resize: "vertical",
    },
    button: {
      padding: "15px 0",
      background:
        "linear-gradient(90deg, #2563eb, #1e40af)",
      color: "#f9fafb",
      fontWeight: 700,
      fontSize: "1.2rem",
      border: "none",
      borderRadius: 12,
      cursor: "pointer",
      boxShadow: "0 5px 15px rgba(37, 99, 235, 0.4)",
      transition: "background 0.3s ease, box-shadow 0.3s ease",
    },
    buttonHover: {
      background:
        "linear-gradient(90deg, #1e40af, #2563eb)",
      boxShadow: "0 7px 20px rgba(30, 64, 175, 0.7)",
    },
  };

  // Handle button hover state
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>

      {submitted && (
        <div style={styles.successMessage}>
          Thank you for reaching out! We will get back to you shortly.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        style={styles.form}
      >
        <label style={styles.label}>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          style={{
            ...styles.input,
            ...(errors.name ? styles.inputError : {}),
          }}
        />
        {errors.name && (
          <div style={styles.errorText}>{errors.name}</div>
        )}

        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          style={{
            ...styles.input,
            ...(errors.email ? styles.inputError : {}),
          }}
        />
        {errors.email && (
          <div style={styles.errorText}>{errors.email}</div>
        )}

        <label style={styles.label}>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject of your message"
          style={{
            ...styles.input,
            ...(errors.subject ? styles.inputError : {}),
          }}
        />
        {errors.subject && (
          <div style={styles.errorText}>{errors.subject}</div>
        )}

        <label style={styles.label}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Write your message here..."
          style={{
            ...styles.textarea,
            ...(errors.message ? styles.inputError : {}),
          }}
        />
        {errors.message && (
          <div style={styles.errorText}>{errors.message}</div>
        )}

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(btnHover ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
