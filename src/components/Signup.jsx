import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation function
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

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

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
      // Clear form data
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

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

  const [btnHover, setBtnHover] = useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sign Up</h1>

      {submitted && (
        <div style={styles.successMessage}>
          Signup successful! Welcome aboard.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate style={styles.form}>
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

        <label style={styles.label}>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="At least 6 characters"
          style={{
            ...styles.input,
            ...(errors.password ? styles.inputError : {}),
          }}
        />
        {errors.password && (
          <div style={styles.errorText}>{errors.password}</div>
        )}

        <label style={styles.label}>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter your password"
          style={{
            ...styles.input,
            ...(errors.confirmPassword ? styles.inputError : {}),
          }}
        />
        {errors.confirmPassword && (
          <div style={styles.errorText}>{errors.confirmPassword}</div>
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
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
