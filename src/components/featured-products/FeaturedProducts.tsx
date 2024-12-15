import React from 'react';
import './featured-products.scss';

const products = [
  {
    id: 1,
    name: 'Premium Safety Valve',
    price: 79.99,
    image: '/images/safety-valve.jpg',
    description: 'High-quality brass construction, temperature and pressure relief valve for water heaters'
  },
  {
    id: 2,
    name: 'Smart Water Leak Detector',
    price: 49.99,
    image: '/images/leak-detector.jpg',
    description: 'WiFi-enabled water leak detector with smartphone notifications'
  },
  {
    id: 3,
    name: 'Professional Grade Pipe Wrench',
    price: 34.99,
    image: '/images/pipe-wrench.jpg',
    description: 'Heavy-duty adjustable wrench for all your plumbing needs'
  }
];

export function FeaturedProducts() {
  return (
    <section id="featured" className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">${product.price}</span>
              <button className="buy-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="analyzer-cta">
        <h2>Not sure what you need?</h2>
        <p>Let our AI assistant analyze your plumbing issue and recommend the right parts</p>
        <button className="analyze-button" onClick={() => window.location.href = '#analyzer'}>
          Analyze My Issue
        </button>
      </div>
    </section>
  );
}
