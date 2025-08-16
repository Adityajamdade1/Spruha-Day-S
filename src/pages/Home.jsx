import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup, Col, Container, Image, Row } from 'react-bootstrap';

const Home = () => {
  const [hoverStates, setHoverStates] = useState({
    lifestyleItems: Array(6).fill(false),
    featureCards: Array(3).fill(false),
    testimonialCards: Array(3).fill(false),
    buttons: Array(2).fill(false)
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = [
    { src: "https://herlifeapp.com/wp-content/uploads/2025/01/vaginal-health-quiz-05.webp", text: "Regular Periods" },
    { src: "https://herlifeapp.com/wp-content/uploads/2025/01/vaginal-health-quiz-06.webp", text: "Period Pain" },
    { src: "https://herlifeapp.com/wp-content/uploads/2025/01/vaginal-health-quiz-07.webp", text: "Irregular Periods" },
    { src: "https://herlifeapp.com/wp-content/uploads/2025/01/vaginal-health-quiz-08.webp", text: "Travel Friendly" },
    { src: "https://img.freepik.com/free-vector/young-healthy-woman-exercise-with-running-character-flat-cartoon-vector-design_40876-3409.jpg", text: "Physical Activity" },
    { src: "https://static.vecteezy.com/system/resources/previews/014/744/320/non_2x/woman-with-jumping-rope-semi-flat-color-character-editable-figure-full-body-person-on-white-sports-training-simple-cartoon-style-illustration-for-web-graphic-design-and-animation-vector.jpg", text: "School & College" },
  ];

  const handleHover = (section, index, isHovering) => {
    setHoverStates(prev => ({
      ...prev,
      [section]: prev[section].map((state, i) => i === index ? isHovering : state)
    }));
  };

  // Enhanced transition styles
  const transitionStyles = {
    standard: {
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      willChange: 'transform, box-shadow, opacity'
    },
    bounce: {
      transition: 'all 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6)'
    },
    elastic: {
      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  };

  return (
    <section className="home">
      {/* Certificates Section with 3D tilt effect */}
      <div className="py-4 bg-light" style={{ overflow: 'hidden' }}>
        <Container>
          <h4 className="text-center mb-4" style={{
            ...transitionStyles.standard,
            transform: hoverStates.buttons[0] ? 'translateY(-2px)' : 'none',
            opacity: hoverStates.buttons[0] ? 0.9 : 1
          }}>Certified Safe</h4>
          <Row className="g-4 justify-content-center">
            {[0, 1, 2].map((idx) => (
              <Col key={idx} xs={12} sm={6} md={4}>
                <div 
                  className="d-flex flex-column align-items-center text-center p-3 h-100"
                  style={{
                    ...transitionStyles.standard,
                    transform: hoverStates.featureCards[idx] ? 
                      'perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.03)' : 
                      'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
                    boxShadow: hoverStates.featureCards[idx] ? 
                      '0 20px 30px rgba(0,0,0,0.1)' : 
                      '0 5px 15px rgba(0,0,0,0.05)',
                    borderRadius: '12px'
                  }}
                  onMouseEnter={() => handleHover('featureCards', idx, true)}
                  onMouseLeave={() => handleHover('featureCards', idx, false)}
                >
                  <img
                    src={[
                      "https://zoycare.com/cdn/shop/files/Made_Safe_Certified_Vectors-01.png?v=1749726056&width=150",
                      "https://zoycare.com/cdn/shop/files/Allergy_Certified_Vectors-04.png?v=1749726055&width=150",
                      "https://zoycare.com/cdn/shop/files/Gynagologiest_Recommended_Black_-01_1.png?v=1749726056&width=150"
                    ][idx]}
                    alt="Certification"
                    className="img-fluid mb-3"
                    style={{ 
                      maxWidth: '100px',
                      ...transitionStyles.standard,
                      transform: hoverStates.featureCards[idx] ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  <p className="mb-0" style={{ 
                    fontSize: isMobile ? '14px' : '16px',
                    ...transitionStyles.standard,
                    color: hoverStates.featureCards[idx] ? '#E91E63' : '#333'
                  }}>
                    {[
                      "Our products are made with Safe Ingredients",
                      "Our formulations are Certified Non-Toxic",
                      "Clinically tested and Safe on Skin"
                    ][idx]}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Hero Section with parallax effect */}
      <div className="hero-section" style={{
        background: 'url(https://zoycare.com/cdn/shop/files/banner1.webp?v=1710154932&width=1500) no-repeat center/cover fixed',
        color: '#fff',
        padding: isMobile ? '60px 20px' : '100px 20px',
        textAlign: 'center',
        minHeight: isMobile ? '300px' : '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(233,30,99,0.7) 0%, rgba(156,39,176,0.7) 100%)',
          zIndex: 1,
          ...transitionStyles.standard,
          opacity: hoverStates.buttons[0] ? 0.9 : 0.8
        }}></div>
        
        <div style={{
          maxWidth: isMobile ? '90%' : '800px',
          margin: '0 auto',
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: isMobile ? '25px' : '40px',
          borderRadius: '15px',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255,255,255,0.2)',
          zIndex: 2,
          ...transitionStyles.standard,
          transform: hoverStates.buttons[0] ? 'scale(1.02)' : 'scale(1)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h1 style={{
            fontSize: isMobile ? '2rem' : '3rem',
            marginBottom: '20px',
            lineHeight: '1.2',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            ...transitionStyles.standard,
            transform: hoverStates.buttons[0] ? 'translateY(-5px)' : 'none'
          }}>
            Revolutionizing Period Care
          </h1>
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            marginBottom: '30px',
            lineHeight: '1.6',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            ...transitionStyles.standard,
            opacity: hoverStates.buttons[0] ? 0.95 : 1
          }}>
            Say goodbye to rashes, discomfort, and chemicals. Experience comfort, confidence, and care with Spruha-Day'S.
          </p>
          <Link to="/products">
            <button 
              style={{
                padding: isMobile ? '12px 30px' : '15px 40px',
                backgroundColor: hoverStates.buttons[0] ? '#C2185B' : '#E91E63',
                color: '#fff',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: isMobile ? '1rem' : '1.1rem',
                fontWeight: 'bold',
                ...transitionStyles.bounce,
                transform: hoverStates.buttons[0] ? 
                  'translateY(-5px) scale(1.05)' : 
                  'translateY(0) scale(1)',
                boxShadow: hoverStates.buttons[0] ? 
                  '0 10px 20px rgba(0,0,0,0.3)' : 
                  '0 5px 15px rgba(0,0,0,0.2)',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 1
              }}
              onMouseEnter={() => handleHover('buttons', 0, true)}
              onMouseLeave={() => handleHover('buttons', 0, false)}
            >
              <span style={{
                position: 'relative',
                zIndex: 2
              }}>
                Shop Now
              </span>
              <span style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: hoverStates.buttons[0] ? '100%' : '0%',
                height: '100%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                ...transitionStyles.standard,
                zIndex: 1
              }}></span>
            </button>
          </Link>
        </div>
      </div>

      {/* Circular Image Grid with floating animation */}
      <Container className="my-5" style={{ 
        backgroundColor: '#fff', 
        padding: isMobile ? '30px 10px' : '60px 0',
        position: 'relative'
      }}>
        <h2 style={{ 
          marginBottom: '40px', 
          color: '#333',
          fontSize: isMobile ? '1.8rem' : '2.5rem',
          textAlign: 'center',
          position: 'relative',
          display: 'inline-block',
          left: '50%',
          transform: 'translateX(-50%)',
          ...transitionStyles.standard
        }}>
          Designed For Your Lifestyle
          <span style={{
            position: 'absolute',
            bottom: '-10px',
            left: '0',
            width: hoverStates.buttons[1] ? '100%' : '50%',
            height: '3px',
            backgroundColor: '#E91E63',
            ...transitionStyles.elastic,
            transform: hoverStates.buttons[1] ? 'translateX(0)' : 'translateX(25%)'
          }}></span>
        </h2>
        
        <Row className="g-4 justify-content-center" style={{ position: 'relative', zIndex: 2 }}>
          {items.map((item, idx) => (
            <Col 
              key={idx} 
              xs={6} 
              sm={4} 
              md={4} 
              lg={2} 
              className="px-2"
              onMouseEnter={() => handleHover('lifestyleItems', idx, true)}
              onMouseLeave={() => handleHover('lifestyleItems', idx, false)}
            >
              <div 
                style={{ 
                  padding: isMobile ? "10px" : "15px", 
                  background: "#fff", 
                  borderRadius: "50%", 
                  boxShadow: hoverStates.lifestyleItems[idx] ? 
                    '0 15px 30px rgba(233,30,99,0.3)' : 
                    '0 5px 15px rgba(0,0,0,0.1)',
                  transform: hoverStates.lifestyleItems[idx] ? 
                    'translateY(-10px) scale(1.1)' : 
                    'translateY(0) scale(1)',
                  ...transitionStyles.bounce,
                  cursor: 'pointer',
                  margin: '0 auto',
                  width: isMobile ? '100px' : '150px',
                  height: isMobile ? '100px' : '150px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Image
                  src={item.src}
                  roundedCircle
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: "cover",
                    filter: hoverStates.lifestyleItems[idx] ? 
                      'brightness(1.1) saturate(1.2)' : 
                      'brightness(1) saturate(1)',
                    ...transitionStyles.standard,
                    transform: hoverStates.lifestyleItems[idx] ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: hoverStates.lifestyleItems[idx] ? '30%' : '0%',
                  background: 'linear-gradient(to top, rgba(233,30,99,0.7), transparent)',
                  ...transitionStyles.standard,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingBottom: '10px'
                }}>
                  <span style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    opacity: hoverStates.lifestyleItems[idx] ? 1 : 0,
                    ...transitionStyles.standard
                  }}>
                    Learn more
                  </span>
                </div>
              </div>
              <p 
                style={{ 
                  marginTop: "15px", 
                  fontWeight: "600", 
                  fontSize: isMobile ? "14px" : "16px", 
                  color: hoverStates.lifestyleItems[idx] ? '#E91E63' : '#000',
                  ...transitionStyles.standard,
                  textAlign: 'center',
                  transform: hoverStates.lifestyleItems[idx] ? 'translateY(5px)' : 'none'
                }}
              >
                {item.text}
              </p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Features Section with card flip animation */}
      <div style={{
        padding: isMobile ? '30px 10px' : '60px 20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,248,248,0.9) 100%)',
          zIndex: 0
        }}></div>
        
        <h2 style={{ 
          fontSize: isMobile ? '1.8rem' : '2.5rem',
          marginBottom: isMobile ? '25px' : '40px',
          position: 'relative',
          zIndex: 1,
          color: '#333'
        }}>
          Why Choose Spruha-Day'S?
        </h2>
        
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="justify-content-center g-4">
            {[0, 1, 2].map((idx) => (
              <Col key={idx} xs={12} md={6} lg={4}>
                <div 
                  style={{
                    perspective: '1000px',
                    height: '100%'
                  }}
                  onMouseEnter={() => handleHover('featureCards', idx, true)}
                  onMouseLeave={() => handleHover('featureCards', idx, false)}
                >
                  <Card 
                    style={{ 
                      width: '100%',
                      margin: '0 auto',
                      transform: hoverStates.featureCards[idx] ? 
                        'rotateY(15deg) translateY(-10px)' : 
                        'rotateY(0) translateY(0)',
                      ...transitionStyles.standard,
                      boxShadow: hoverStates.featureCards[idx] ? 
                        '0 20px 40px rgba(233,30,99,0.2)' : 
                        '0 10px 20px rgba(0,0,0,0.1)',
                      height: '100%',
                      border: 'none',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '5px',
                      background: 'linear-gradient(90deg, #E91E63, #9C27B0)',
                      ...transitionStyles.standard,
                      transform: hoverStates.featureCards[idx] ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left center'
                    }}></div>
                    
                    <Card.Img
                      variant="top"
                      src={[
                        "https://soothehealthcare.com/cdn/shop/files/4_ba9f1199-649c-40a3-a392-b56ae7b91679.jpg?v=1743827635&width=1445",
                        "https://images.meesho.com/images/products/409106923/5pqx0_512.jpg",
                        "https://5.imimg.com/data5/SELLER/Default/2021/6/FM/YE/LE/43549101/private-label-xxl-size-biodegradable-bamboo-sanitary-napkin.png"
                      ][idx]}
                      style={{
                        ...transitionStyles.standard,
                        filter: hoverStates.featureCards[idx] ? 
                          'brightness(1.05) contrast(1.1)' : 
                          'brightness(1) contrast(1)',
                        height: isMobile ? '200px' : '250px',
                        objectFit: 'cover',
                        transform: hoverStates.featureCards[idx] ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                    <Card.Body>
                      <Card.Title style={{ 
                        fontSize: isMobile ? '1.3rem' : '1.6rem',
                        ...transitionStyles.standard,
                        color: hoverStates.featureCards[idx] ? '#E91E63' : '#333'
                      }}>
                        {[
                          "Rash-Free Comfort",
                          "Herbal & Graphene Pads",
                          "Eco-Friendly Packaging"
                        ][idx]}
                      </Card.Title>
                      <Card.Text style={{ 
                        fontSize: isMobile ? '0.95rem' : '1.05rem',
                        ...transitionStyles.standard,
                        opacity: hoverStates.featureCards[idx] ? 1 : 0.9
                      }}>
                        {[
                          "Ultra-soft cotton surface with graphene & herbal technology.",
                          "Infused with herbs and far-infrared therapy to ease cramps.",
                          "Made with love for you and the planet. No harmful chemicals."
                        ][idx]}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      {[
                        ["Soft Cotton Layer", "Graphene Technology", "No Irritation"],
                        ["Herbal Infusion", "Far Infrared Therapy", "Cramps Relief"],
                        ["Recyclable", "Safe for Skin", "No Chemicals"]
                      ][idx].map((item, i) => (
                        <ListGroup.Item key={i} style={{ 
                          fontSize: isMobile ? '0.9rem' : '1rem',
                          ...transitionStyles.standard,
                          backgroundColor: hoverStates.featureCards[idx] ? 
                            'rgba(233,30,99,0.05)' : 
                            'transparent',
                          borderLeft: hoverStates.featureCards[idx] ? 
                            '3px solid #E91E63' : 
                            '3px solid transparent'
                        }}>
                          {item}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                    <Card.Body>
                      <Link 
                        to="/features" 
                        style={{
                          color: hoverStates.featureCards[idx] ? '#E91E63' : '#0d6efd',
                          ...transitionStyles.standard,
                          fontSize: isMobile ? '0.95rem' : '1.05rem',
                          textDecoration: 'none',
                          fontWeight: '600',
                          display: 'inline-flex',
                          alignItems: 'center'
                        }}
                      >
                        Learn More
                        <span style={{
                          display: 'inline-block',
                          marginLeft: '5px',
                          ...transitionStyles.standard,
                          transform: hoverStates.featureCards[idx] ? 
                            'translateX(5px)' : 
                            'translateX(0)'
                        }}>→</span>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Testimonials Section with floating cards */}
      <div style={{ 
        textAlign: 'center', 
        padding: isMobile ? '40px 10px' : '80px 20px',
        backgroundColor: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(233,30,99,0.05) 0%, transparent 70%)',
          zIndex: 0
        }}></div>
        
        <div style={{
          width: '80px',
          height: '4px',
          backgroundColor: '#E91E63',
          margin: '0 auto 30px auto',
          ...transitionStyles.standard,
          transform: hoverStates.buttons[1] ? 'scaleX(1.5)' : 'scaleX(1)'
        }}></div>
        
        <h2 style={{ 
          fontSize: isMobile ? '1.8rem' : '2.5rem',
          marginBottom: '40px',
          position: 'relative',
          zIndex: 1,
          color: '#333'
        }}>
          What Our Customers Say
        </h2>
        
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="justify-content-center g-4">
            {[0, 1, 2].map((idx) => (
              <Col key={idx} xs={12} md={6} lg={4}>
                <div 
                  style={{
                    height: '100%',
                    ...transitionStyles.standard,
                    transform: hoverStates.testimonialCards[idx] ? 
                      'translateY(-15px)' : 
                      'translateY(0)'
                  }}
                  onMouseEnter={() => handleHover('testimonialCards', idx, true)}
                  onMouseLeave={() => handleHover('testimonialCards', idx, false)}
                >
                  <Card 
                    style={{ 
                      width: '100%',
                      margin: '0 auto',
                      border: 'none',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      height: '100%',
                      boxShadow: hoverStates.testimonialCards[idx] ? 
                        '0 15px 40px rgba(233,30,99,0.2)' : 
                        '0 5px 20px rgba(0,0,0,0.1)',
                      position: 'relative'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,248,248,0.9) 100%)',
                      zIndex: 0
                    }}></div>
                    
                    <Card.Body style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{
                        fontSize: '24px',
                        color: '#FFC107',
                        marginBottom: '20px',
                        ...transitionStyles.standard,
                        transform: hoverStates.testimonialCards[idx] ? 
                          'scale(1.1) rotate(5deg)' : 
                          'scale(1) rotate(0)'
                      }}>
                        ⭐⭐⭐⭐⭐
                      </div>
                      <Card.Text style={{ 
                        fontSize: isMobile ? '1rem' : '1.1rem',
                        fontStyle: 'italic',
                        marginBottom: '25px',
                        position: 'relative',
                        ...transitionStyles.standard,
                        transform: hoverStates.testimonialCards[idx] ? 
                          'scale(1.02)' : 
                          'scale(1)'
                      }}>
                        <span style={{
                          position: 'absolute',
                          top: '-15px',
                          left: '0',
                          fontSize: '60px',
                          color: 'rgba(233,30,99,0.1)',
                          lineHeight: '1',
                          ...transitionStyles.standard
                        }}>"</span>
                        {[
                          "Best pads I've used — no itching, no discomfort!",
                          "The herbal infusion actually helps with my cramps. Game changer!",
                          "Love the eco-friendly packaging and how soft they are."
                        ][idx]}
                        <span style={{
                          position: 'absolute',
                          bottom: '-40px',
                          right: '0',
                          fontSize: '60px',
                          color: 'rgba(233,30,99,0.1)',
                          lineHeight: '1',
                          ...transitionStyles.standard
                        }}>"</span>
                      </Card.Text>
                      <Card.Footer style={{
                        backgroundColor: 'transparent',
                        borderTop: 'none',
                        ...transitionStyles.standard,
                        transform: hoverStates.testimonialCards[idx] ? 
                          'translateY(10px)' : 
                          'translateY(0)'
                      }}>
                        <div style={{
                          display: 'inline-block',
                          padding: '8px 20px',
                          backgroundColor: 'rgba(233,30,99,0.1)',
                          borderRadius: '50px',
                          ...transitionStyles.standard,
                          transform: hoverStates.testimonialCards[idx] ? 
                            'scale(1.05)' : 
                            'scale(1)'
                        }}>
                          <strong style={{
                            color: '#E91E63',
                            ...transitionStyles.standard
                          }}>
                            {["Priya K.", "Anjali M.", "Riya S."][idx]}
                          </strong>
                        </div>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Call to Action Section with pulse animation */}
      <div style={{
        padding: isMobile ? '50px 10px' : '80px 20px',
        textAlign: 'center',
        backgroundColor: '#f2f2f2',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,248,248,0.9) 100%)',
          zIndex: 0
        }}></div>
        
        <h2 style={{ 
          fontSize: isMobile ? '1.8rem' : '2.5rem',
          marginBottom: '20px',
          position: 'relative',
          zIndex: 1,
          color: '#333',
          ...transitionStyles.standard,
          transform: hoverStates.buttons[1] ? 'scale(1.02)' : 'scale(1)'
        }}>
          Ready to switch to safer period care?
        </h2>
        
        <p style={{
          fontSize: isMobile ? '1rem' : '1.2rem',
          marginBottom: '30px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          zIndex: 1,
          color: '#666',
          ...transitionStyles.standard,
          opacity: hoverStates.buttons[1] ? 1 : 0.9
        }}>
          Join thousands of women who have already made the switch to Spruha-Day'S for a more comfortable period experience.
        </p>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Link to="/products">
            <button 
              style={{
                padding: isMobile ? '12px 30px' : '15px 40px',
                backgroundColor: hoverStates.buttons[1] ? '#C2185B' : '#E91E63',
                color: '#fff',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: isMobile ? '1rem' : '1.1rem',
                fontWeight: 'bold',
                ...transitionStyles.bounce,
                transform: hoverStates.buttons[1] ? 
                  'translateY(-5px) scale(1.05)' : 
                  'translateY(0) scale(1)',
                boxShadow: hoverStates.buttons[1] ? 
                  '0 10px 25px rgba(233,30,99,0.4)' : 
                  '0 5px 15px rgba(233,30,99,0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => handleHover('buttons', 1, true)}
              onMouseLeave={() => handleHover('buttons', 1, false)}
            >
              <span style={{
                position: 'relative',
                zIndex: 2,
                display: 'inline-block',
                ...transitionStyles.standard,
                transform: hoverStates.buttons[1] ? 'translateX(5px)' : 'translateX(0)'
              }}>
                Explore Our Products
              </span>
              <span style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '5px',
                height: '5px',
                backgroundColor: 'rgba(255,255,255,0.4)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                ...transitionStyles.standard,
                opacity: hoverStates.buttons[1] ? 1 : 0,
                animation: hoverStates.buttons[1] ? 'pulse 1.5s infinite' : 'none'
              }}></span>
              <style>
                {`
                  @keyframes pulse {
                    0% {
                      transform: translate(-50%, -50%) scale(1);
                      opacity: 1;
                    }
                    100% {
                      transform: translate(-50%, -50%) scale(20);
                      opacity: 0;
                    }
                  }
                `}
              </style>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;