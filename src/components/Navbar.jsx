import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const Navbar = () => {
  const { cartCount, favorites } = useShop();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`); 
      setSearchQuery(''); // Wyczyść pole
    }
  };

  return (
    <>
      <div style={{ background: '#f1f5f9', padding: '8px 0', fontSize: '12px', color: '#64748b' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Pomoc i kontakt</Link>
          <span>Darmowa dostawa od 200 zł</span>
          <span>Zwroty do 100 dni</span>
        </div>
      </div>

      <nav>
        <div className="container nav-content">
          <Link to="/" className="logo">
            MODERN<span style={{ color: 'var(--accent)' }}>SHOP</span>.
          </Link>

          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Nowości</NavLink>
            <NavLink to="/category/women's clothing">Kobiety</NavLink>
            <NavLink to="/category/men's clothing">Mężczyźni</NavLink>
            <NavLink to="/category/jewelery">Biżuteria</NavLink>
            <NavLink to="/category/electronics">Elektronika</NavLink>
          </div>

          <div className="nav-icons" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            {/* Wyszukiwarka */}
            <form onSubmit={handleSearch} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input 
                type="text" 
                placeholder="Szukaj..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '8px 12px', borderRadius: '20px', border: '1px solid #e2e8f0',
                  outline: 'none', fontSize: '0.9rem', width: '150px'
                }}
              />
              <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '-30px' }}>
                <Search size={18} color="#64748b" />
              </button>
            </form>

            {/* Ulubione */}
            <Link to="/favorites" style={{ position: 'relative', display: 'flex' }}>
              <Heart size={20} color="#334155" />
              {favorites.length > 0 && (
                <span className="cart-badge" style={{ background: '#ef4444' }}>{favorites.length}</span>
              )}
            </Link>
            
            {/* Koszyk */}
            <Link to="/cart">
              <div className="cart-icon-container">
                <ShoppingBag size={20} color="#334155" />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};


export default Navbar;
