import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>📩 Contact Us</h1>
        <p style={styles.subtitle}>
          We'd love to hear from you! Fill out the form below.
        </p>

        <div style={styles.info}>
          <p>📍 <strong>Address:</strong> Spruha-Day's, India</p>
          <p>📧 <strong>Email:</strong> support@spruha-days.com</p>
          <p>📞 <strong>Phone:</strong> +91 00000 00000</p>
        </div>

        {submitted && (
          <div style={styles.success}>
            ✅ Thank you! Your message has been sent.
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f06292, #ba68c8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    maxWidth: "500px",
    width: "100%",
    padding: "30px",
    animation: "fadeIn 0.5s ease-in-out",
  },
  heading: {
    fontSize: "2rem",
    textAlign: "center",
    color: "#E91E63",
    marginBottom: "10px",
  },
  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: "20px",
  },
  info: {
    fontSize: "0.95rem",
    color: "#444",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  success: {
    background: "#d4edda",
    color: "#155724",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    marginBottom: "15px",
    animation: "fadeIn 0.4s ease-in-out",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "12px 15px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    transition: "0.3s",
    outline: "none",
  },
  textarea: {
    padding: "12px 15px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    resize: "vertical",
    minHeight: "100px",
    transition: "0.3s",
    outline: "none",
  },
  button: {
    background: "#E91E63",
    color: "#fff",
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",
  },
};

// Hover & focus styling through JS-in-CSS
["input", "textarea"].forEach((el) => {
  styles[el][":focus"] = {
    borderColor: "#E91E63",
    boxShadow: "0 0 5px rgba(233,30,99,0.4)",
  };
});
styles.button[":hover"] = {
  background: "#C2185B",
};

export default Contact;
