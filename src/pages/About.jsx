import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <Container fluid className="px-0 about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <h1 className="about-title">
                About Spruha-Day'S
              </h1>
              <div className="about-underline"></div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} lg={10} xl={8}>
            {/* Story + Image Section */}
            <Row className="g-4 g-md-5 align-items-center mb-5">
              <Col md={6} className="order-md-1 order-2">
                <div className="about-img-container">
                  <img 
                    src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=500&q=80"
                    alt="Our Mission"
                    className="about-img"
                  />
                </div>
              </Col>
              
              <Col md={6} className="order-md-2 order-1 fade-in">
                <h2 className="section-title">Our Story</h2>
                <p className="section-text">
                  Founded in 2023, Spruha-Days was born from a simple idea: period care shouldn't 
                  come at the cost of comfort or the environment. We're revolutionizing feminine 
                  hygiene with innovative graphene and herbal pads that care for both your body 
                  and the planet.
                </p>

                <h2 className="section-title">Our Mission</h2>
                <p className="section-text">
                  We're dedicated to providing safe, hygienic, and eco-friendly solutions for 
                  women's health. Our products are clinically tested, dermatologically approved, 
                  and made with sustainable materials.
                </p>

                <div className="d-flex flex-column gap-3">
                  <div className="feature-item"><span>🌿</span> 100% Organic Materials</div>
                  <div className="feature-item"><span>♻️</span> Eco-Friendly Packaging</div>
                  <div className="feature-item"><span>⚕️</span> Doctor Approved</div>
                </div>
              </Col>
            </Row>

            {/* Core Values Section */}
            <Row className="mt-5 fade-in">
              {[
                { icon: '❤️', title: 'Compassion', text: "We prioritize women's comfort and wellbeing in every product we create" },
                { icon: '🌎', title: 'Sustainability', text: "Our commitment to the planet is woven into every aspect of our business" },
                { icon: '🔬', title: 'Innovation', text: "We combine traditional herbal wisdom with cutting-edge graphene technology" }
              ].map((item, index) => (
                <Col key={index} xs={12} md={4} className="mb-4 d-flex">
                  <div className="value-card">
                    <div className="value-icon">{item.icon}</div>
                    <h3 className="value-title">{item.title}</h3>
                    <p className="value-text">{item.text}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <style>{`
        /* Hero Section */
        .about-hero {
          background: linear-gradient(135deg, #fde2eb, #fff);
          padding: 60px 0;
        }
        .about-title {
          font-size: 2.5rem;
          color: #e91e63;
          font-weight: 700;
          font-family: "Playfair Display", serif;
        }
        .about-underline {
          width: 80px;
          height: 4px;
          background: #e91e63;
          margin: 10px auto 0;
          border-radius: 2px;
        }

        /* Image Styling */
        .about-img-container {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          transition: transform 0.4s ease;
        }
        .about-img-container:hover {
          transform: scale(1.05);
        }
        .about-img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Text */
        .section-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #e91e63;
          margin-bottom: 10px;
        }
        .section-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 20px;
        }
        .feature-item {
          font-size: 1.1rem;
          color: #444;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
        }

        /* Core Values */
        .value-card {
          background: #fff;
          border-radius: 12px;
          padding: 25px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          flex: 1;
        }
        .value-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }
        .value-icon {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        .value-title {
          color: #e91e63;
          font-weight: 600;
          font-size: 1.3rem;
          margin-bottom: 10px;
        }
        .value-text {
          color: #666;
          font-size: 1rem;
        }

        /* Animations */
        .fade-in {
          animation: fadeInUp 0.8s ease forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .about-title {
            font-size: 2rem;
          }
          .section-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </Container>
  );
}

export default About;
