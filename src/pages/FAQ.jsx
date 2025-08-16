import React, { useState } from "react";

const faqData = [
  {
    question: "What makes Spruha-Day'S pads different?",
    answer:
      "Spruha-Days pads are infused with graphene and herbs that help prevent rashes, reduce cramps, and provide a refreshing experience. They're safe, eco-friendly, and free from harmful chemicals.",
  },
  {
    question: "Are Spruha-Day'S sanitary pads safe for sensitive skin?",
    answer:
      "Yes! Our pads are made with soft cotton and herbal layers, making them suitable for even the most sensitive skin types.",
  },
  {
    question: "How are Graphene pads beneficial?",
    answer:
      "Graphene emits far-infrared energy that helps improve blood circulation and relieve menstrual pain naturally.",
  },
  {
    question: "How do I choose the right pad size?",
    answer:
      "You can choose from Small (Panty Liner), Medium (Regular flow), and Large (Heavy flow) based on your needs. We also offer combo packs.",
  },
  {
    question: "Do you offer COD or free delivery?",
    answer:
      "Yes, we offer Cash on Delivery (COD) and free delivery on all orders above ₹399 across India.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>💬 Frequently Asked Questions</h1>
      <div style={styles.faqList}>
        {faqData.map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.faqItem,
              boxShadow:
                openIndex === index
                  ? "0 4px 20px rgba(233,30,99,0.4)"
                  : "0 2px 5px rgba(0,0,0,0.1)",
              border:
                openIndex === index
                  ? "2px solid #E91E63"
                  : "2px solid transparent",
            }}
          >
            <div style={styles.question} onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span
                style={{
                  ...styles.icon,
                  transform:
                    openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </div>
            <div
              style={{
                ...styles.answerWrapper,
                maxHeight: openIndex === index ? "500px" : "0px",
                padding: openIndex === index ? "10px 0" : "0",
              }}
            >
              <p style={styles.answer}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "30px",
    fontWeight: "700",
    background: "linear-gradient(90deg, #E91E63, #FF4081)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  faqList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  faqItem: {
    background: "linear-gradient(145deg, #fff, #f9f9f9)",
    borderRadius: "10px",
    padding: "15px 20px",
    transition: "all 0.4s ease",
    overflow: "hidden",
  },
  question: {
    fontWeight: "600",
    fontSize: "1.1rem",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#333",
  },
  icon: {
    fontSize: "1.5rem",
    color: "#E91E63",
    transition: "transform 0.3s ease",
  },
  answerWrapper: {
    overflow: "hidden",
    transition: "all 0.4s ease",
  },
  answer: {
    color: "#555",
    lineHeight: "1.6",
    fontSize: "1rem",
    margin: 0,
  },
};

export default FAQ;
