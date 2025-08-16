import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

const products = [
  { 
    id: '1', 
    title: "Graphene Sanitary Pad (Medium)", 
    price: "₹250", 
    features: "Anti-bacterial, rash-free",
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/sanitary-pad-pantyliner/e/a/y/ultra-thin-xxl-sanitary-pad-with-graphene-anion-strip-embedded-original-imah75hnfwccarkm.jpeg?q=90&crop=false"
  },
  { 
    id: '2', 
    title: "Herbal Sanitary Pad (Large)", 
    price: "₹400", 
    features: "Herbal, comfortable",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/11/OF/ZQ/OJ/83517658/biobud-large-cotton-herbal-sanitary-pads.jpg"
  },
  { 
    id: '3', 
    title: "Menstrual Products", 
    price: "₹300", 
    features: "Herbal, comfortable",
    image: "https://www.cambiowoman.com/cdn/shop/files/cambio-listing-image_01_a_1200x.jpg?v=1752064370"
  },
  { 
    id: '4', 
    title: "Period Care Kits", 
    price: "₹250", 
    features: "Herbal, comfortable",
    image: "https://thesirona.com/cdn/shop/files/cup-duo-medium-large.jpg?v=1745994091&width=1100"
  },
  { 
    id: '5', 
    title: "Sanitary Products", 
    price: "₹200", 
    features: "Herbal, comfortable",
    image: "https://www.newmi.in/s/6123687a0e3882eabaee1e6e/642422610c535802438fa775/1-480x480.jpg"
  },
  { 
    id: '6', 
    title: "Primolut N Tablet 10'S", 
    price: "₹500", 
    features: "Herbal, comfortable",
    image: "https://d1s24u4ln0wd0i.cloudfront.net/med/10734/primolut-n-tablet-10s_173338994790f8dd36b5aa4cb69ad0358a28732ba3.webp"
  }
];

const ProductList = () => {
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container py-4 text-center">
      <h2 
        className="mb-4 fw-bold"
        style={{
          fontSize: '2rem',
          color: '#0d6efd',
          position: 'relative',
          display: 'inline-block',
          paddingBottom: '10px',
          transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
          opacity: loaded ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease'
        }}
      >
        Our Products
        <span 
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: hoveredCard ? '100%' : '50%',
            height: '4px',
            backgroundColor: '#E91E63',
            transform: hoveredCard ? 'translateX(-50%) scaleX(1.2)' : 'translateX(-50%)',
            transition: 'all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6)',
            transformOrigin: 'center'
          }}
        />
      </h2>

      <Row className="g-4 mt-2">
        {products.map((product, index) => (
          <Col xs={12} sm={6} md={4} key={product.id}>
            <Card
              className="h-100 border-0"
              style={{
                transform: `
                  ${loaded ? 'translateY(0)' : 'translateY(30px)'}
                  ${hoveredCard === product.id ? 'translateY(-10px) rotateY(5deg)' : ''}
                `,
                opacity: loaded ? 1 : 0,
                transition: `
                  transform ${0.3 + index * 0.1}s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  opacity ${0.3 + index * 0.1}s ease,
                  box-shadow 0.4s ease
                `,
                boxShadow: hoveredCard === product.id ? 
                  '0 15px 30px rgba(233, 30, 99, 0.2)' : 
                  '0 5px 15px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                zIndex: hoveredCard === product.id ? 1 : 0
              }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,248,248,0.9) 100%)',
                  zIndex: 0
                }}
              />
              
              <div 
                style={{
                  position: 'relative',
                  zIndex: 1,
                  overflow: 'hidden',
                  height: '200px'
                }}
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transform: hoveredCard === product.id ? 'scale(1.1)' : 'scale(1)',
                    filter: hoveredCard === product.id ? 
                      'brightness(1.05) saturate(1.1)' : 
                      'brightness(1) saturate(1)'
                  }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=Product+Image';
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: hoveredCard === product.id ? '30%' : '0',
                    background: 'linear-gradient(to top, rgba(233,30,99,0.7), transparent)',
                    transition: 'height 0.4s ease',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    paddingBottom: '10px',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  {product.features}
                </div>
              </div>
              
              <Card.Body 
                className="d-flex flex-column"
                style={{ position: 'relative', zIndex: 1 }}
              >
                <Card.Title 
                  className="fs-6"
                  style={{
                    transition: 'color 0.3s ease',
                    color: hoveredCard === product.id ? '#E91E63' : '#333'
                  }}
                >
                  {product.title}
                </Card.Title>
                
                <Card.Text 
                  className="fw-bold mb-3"
                  style={{
                    fontSize: '1.2rem',
                    transition: 'all 0.3s ease',
                    transform: hoveredCard === product.id ? 'scale(1.1)' : 'scale(1)',
                    color: hoveredCard === product.id ? '#0d6efd' : '#333'
                  }}
                >
                  {product.price}
                </Card.Text>
                
                <div className="mt-auto">
                  <Link to={`/products/${product.id}`} className="text-decoration-none">
                    <Button
                      variant="primary"
                      className="w-100 border-0"
                      style={{
                        background: hoveredCard === product.id ? 
                          'linear-gradient(135deg, #0b5ed7, #E91E63)' : 
                          'linear-gradient(135deg, #0d6efd, #0b5ed7)',
                        transition: 'all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6)',
                        transform: hoveredCard === product.id ? 
                          'translateY(-3px) scale(1.05)' : 
                          'translateY(0) scale(1)',
                        boxShadow: hoveredCard === product.id ? 
                          '0 5px 15px rgba(13, 110, 253, 0.4)' : 
                          '0 2px 10px rgba(13, 110, 253, 0.3)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <span 
                        style={{
                          position: 'relative',
                          zIndex: 2
                        }}
                      >
                        View Details
                      </span>
                      <span 
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: hoveredCard === product.id ? '100%' : '0%',
                          height: '100%',
                          background: 'rgba(255,255,255,0.2)',
                          transition: 'width 0.4s ease',
                          zIndex: 1
                        }}
                      />
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;