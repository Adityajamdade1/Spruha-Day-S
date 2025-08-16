import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ProductCard = ({ title, price, features, image }) => {
  // Responsive styles
  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '10px',
      margin: '20px 10px', // 20px top/bottom, 10px left/right
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      width: 'calc(100% - 20px)', // Account for margins
      maxWidth: '350px',
      transition: 'transform 0.3s ease',
    },
    imageContainer: {
      width: '100%',
      height: '0',
      paddingBottom: '60%', // Aspect ratio (3:5)
      overflow: 'hidden',
      position: 'relative'
    },
    image: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    content: {
      padding: '15px',
      textAlign: 'center'
    },
    title: {
      fontSize: 'clamp(1.1rem, 4vw, 1.3rem)', // Responsive font size
      fontWeight: '600',
      color: '#E91E63',
      marginBottom: '10px'
    },
    price: {
      fontSize: 'clamp(1rem, 3.5vw, 1.1rem)',
      color: '#333',
      fontWeight: '500',
      marginBottom: '8px'
    },
    features: {
      fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
      color: '#666',
      marginBottom: '15px',
      lineHeight: '1.4'
    },
    button: {
      backgroundColor: '#E91E63',
      color: '#fff',
      border: 'none',
      padding: 'clamp(8px, 3vw, 12px) clamp(16px, 4vw, 24px)',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '100%',
      fontSize: 'clamp(0.9rem, 3.5vw, 1rem)',
      transition: 'background-color 0.3s',
    }
  };

  return (
    <div style={styles.card}>
      {image && (
        <div style={styles.imageContainer}>
          <img 
            src={image} 
            alt={title} 
            style={styles.image}
            loading="lazy"
          />
        </div>
      )}
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.price}>{price}</p>
        <p style={styles.features}>{features}</p>
        <button style={styles.button}>Buy Now</button>
      </div>
    </div>
  );
};

// Responsive Product Grid
export function ProductGrid({ children }) {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
    gap: '20px',
    padding: '20px',
    margin: '0 auto',
    maxWidth: '1200px',
    width: '100%',
    boxSizing: 'border-box'
  };

  return <div style={gridStyle}>{children}</div>;
}

export default ProductCard;