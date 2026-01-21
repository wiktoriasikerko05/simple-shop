import React from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites } = useShop();

  if (favorites.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>Brak ulubionych produktów 💔</h2>
        <p style={{ margin: '20px 0', color: '#64748b' }}>Dodaj coś do listy życzeń, klikając w serduszko.</p>
        <Link to="/" className="btn-add" style={{ display: 'inline-flex', justifyContent: 'center', textDecoration: 'none' }}>
          Wróć do sklepu
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1 style={{ marginBottom: '30px' }}>Twoje Ulubione ({favorites.length})</h1>
      <div className="products-grid">
        {favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;