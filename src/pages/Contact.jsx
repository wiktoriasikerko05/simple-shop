import React from 'react';

const Contact = () => {
  return (
    <div className="container" style={{ maxWidth: '600px', padding: '40px 20px' }}>
      <h1 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Pomoc i Kontakt</h1>
      <p style={{ marginBottom: '30px', color: '#64748b' }}>
        Masz pytania dotyczące zamówienia? Wypełnij formularz, a nasi konsultanci odpowiedzą w ciągu 24h.
      </p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Temat</label>
          <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
            <option>Status zamówienia</option>
            <option>Zwroty i reklamacje</option>
            <option>Pytanie o produkt</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Wiadomość</label>
          <textarea rows="5" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }} placeholder="Wpisz treść wiadomości..."></textarea>
        </div>

        <button type="button" className="btn-add" style={{ justifyContent: 'center', marginTop: '10px' }}>
          Wyślij wiadomość
        </button>
      </form>
    </div>
  );
};

export default Contact;