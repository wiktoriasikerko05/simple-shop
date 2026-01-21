import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; 

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    setLoading(true);
    let url = 'https://fakestoreapi.com/products';
    if (categoryName) url = `https://fakestoreapi.com/products/category/${categoryName}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [categoryName]);

  const getTitle = () => {
    if (!categoryName) return "Nowa Kolekcja 2026";
    if (categoryName === "jewelery") return "Biżuteria & Dodatki";
    if (categoryName === "electronics") return "Smartfony & Gadżety";
    return categoryName.includes("women") ? "Moda Damska" : "Moda Męska";
  };

  if (loading) return <div className="container" style={{padding: '50px', textAlign: 'center'}}>Ładowanie...</div>;

  return (
    <div className="container">
      <header className="hero-section">
        <h1 className="hero-title">{getTitle()}</h1>
        <p className="hero-subtitle">Najlepsze marki, wyselekcjonowane specjalnie dla Ciebie.</p>
      </header>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};


export default Home;
