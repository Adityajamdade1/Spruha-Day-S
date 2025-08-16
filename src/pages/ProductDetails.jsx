import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const products = [
  { 
    id: '1', 
    title: "Graphene Sanitary Pad (Medium)", 
    price: "₹250", 
    features: "Anti-bacterial, rash-free",
    image: "/images/graphene-pad.jpg"  // Add your image path here
  },
  { 
    id: '2', 
    title: "Herbal Sanitary Pad (Large)", 
    price: "₹300", 
    features: "Herbal, comfortable",
    image: "/images/herbal-pad.jpg"  // Add your image path here
  }
];


const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
      <ProductCard {...product} />
    </div>
  );
};

export default ProductDetails;
