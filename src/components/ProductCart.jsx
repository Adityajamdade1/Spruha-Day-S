import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 text-center shadow-sm">
        <img 
          src={image} 
          alt={name} 
          className="card-img-top img-fluid" 
          style={{ borderRadius: '10px', objectFit: 'cover', height: '200px' }}
        />
        <div className="card-body">
          <h5 className="card-title text-danger">{name}</h5>
          <p className="card-text text-dark fw-bold">₹{price}</p>
          <button className="btn btn-danger w-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const products = [
    { name: "Graphene Sanitary Pad", price: 250, image: "https://via.placeholder.com/300" },
    { name: "Herbal Sanitary Pad", price: 300, image: "https://via.placeholder.com/300" },
    { name: "Overnight Sanitary Pad", price: 350, image: "https://via.placeholder.com/300" },
    { name: "Panty Liner", price: 150, image: "https://via.placeholder.com/300" }
  ];

  return (
    <div className="container py-4">
      <div className="row">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
