import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Plus, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart, toggleFavorite, favorites, formatPrice } = useShop();
  const [size, setSize] = useState('M');
  
  const isFav = favorites.some(item => item.id === product.id);
  const isClothing = product.category.includes('clothing');

  return (
    <div className="product-card">
      <button 
        onClick={() => toggleFavorite(product)}
        style={{
          position: 'absolute', top: '15px', right: '15px',
          background: 'white', border: 'none', borderRadius: '50%',
          width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', zIndex: 2
        }}
      >
        <Heart size={20} color={isFav ? "#ef4444" : "#cbd5e1"} fill={isFav ? "#ef4444" : "none"} />
      </button>

      <div className="image-container">
        <img src={product.image} alt={product.title} />
      </div>
      
      <div className="product-info">
        <p className="category">{product.category}</p>
        <h3 className="product-title">{product.title}</h3>
        
        {isClothing && (
          <div style={{ margin: '10px 0' }}>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginRight: '5px' }}>Rozmiar:</span>
            <select 
              value={size} 
              onChange={(e) => setSize(e.target.value)}
              style={{ padding: '5px', borderRadius: '5px', border: '1px solid #e2e8f0' }}
            >
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
        )}

        <div className="price-row">
          <span className="price">{formatPrice(product.price)}</span>
          <button className="btn-add" onClick={() => addToCart(product, size)}>
            <Plus size={18} /> Do koszyka
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;