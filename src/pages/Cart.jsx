import React from 'react';
import { useShop } from '../context/ShopContext';
import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  
  const { cart, removeFromCart, cartTotal, formatPrice } = useShop();

  if (cart.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>Twój koszyk jest pusty 😔</h2>
        <p style={{ margin: '20px 0', color: '#64748b' }}>Wygląda na to, że nic jeszcze nie dodałeś.</p>
        <Link to="/" className="btn-add" style={{ display: 'inline-flex', textDecoration: 'none', justifyContent: 'center' }}>
          Wróć do sklepu
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1 style={{ marginBottom: '30px', fontSize: '2rem' }}>Twój Koszyk ({cart.length})</h1>
      
      <div className="cart-layout">
        {/* LEWA KOLUMNA: Lista produktów */}
        <div className="cart-items">
          {cart.map((item, index) => (
            
            <div key={`${item.id}-${item.selectedSize}-${index}`} className="cart-item">
              <div className="cart-img-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              
              <div className="cart-details">
                <div style={{ flex: 1 }}>
                  <h4 style={{ marginBottom: '5px' }}>{item.title}</h4>
                  <p className="category">{item.category}</p>
                  
                  {/* Wyświetlanie wybranego rozmiaru */}
                  <div style={{ marginTop: '10px', color: '#64748b', fontSize: '0.9rem' }}>
                    Rozmiar: <span style={{ fontWeight: 'bold', color: '#334155' }}>{item.selectedSize}</span>
                  </div>
                  
                  <div style={{ marginTop: '5px', color: '#64748b', fontSize: '0.9rem' }}>
                    Ilość: {item.quantity}
                  </div>
                </div>
                
                <div className="cart-price-actions">
                  {/* Cena w złotówkach */}
                  <span className="price" style={{ fontSize: '1.2rem' }}>
                    {formatPrice(item.price * item.quantity)}
                  </span>
                  
                  <button 
                   
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', marginTop: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}
                  >
                    <Trash2 size={18} /> Usuń
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PRAWA KOLUMNA: Podsumowanie */}
        <div className="cart-summary">
          <h3>Podsumowanie</h3>
          
          <div className="summary-row">
            <span>Wartość produktów</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>
          <div className="summary-row">
            <span>Dostawa</span>
            <span>0,00 zł</span>
          </div>
          
          <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />
          
          <div className="summary-row total">
            <span>Do zapłaty (z VAT)</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>

          <button className="checkout-btn">
            Przejdź do kasy <ArrowRight size={18} />
          </button>

          <div className="payment-icons">
            <span>💳 VISA</span>
            <span>💳 MasterCard</span>
            <span>🍎 Pay</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Cart;
