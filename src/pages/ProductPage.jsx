import React from 'react';
import { Link } from 'react-router-dom';

function ProductPage() {
  const products = [
    { id: 1, name: 'Produto 1', category: 'Categoria A', price: '10.00' },
    { id: 2, name: 'Produto 2', category: 'Categoria B', price: '20.00' },
  ];

  return (
    <div style={containerStyle}>
      <h1>Lista de Produtos</h1>
      <ul style={listStyle}>
        {products.map((product) => (
          <li key={product.id} style={itemStyle}>
            <Link to={`/product-detail/${product.id}`} style={linkStyle}>
              {product.name} - {product.category} - R${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Estilos inline para a página de produtos
const containerStyle = {
  padding: '20px',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const itemStyle = {
  padding: '10px 0',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'blue',
};

export default ProductPage;
