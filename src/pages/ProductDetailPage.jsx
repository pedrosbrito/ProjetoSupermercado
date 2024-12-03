import React from 'react';

function ProductDetailPage() {
  const product = {
    id: 1,
    name: 'Produto 1',
    category: 'Categoria A',
    price: '10.00',
  };

  return (
    <div style={containerStyle}>
      <h1>Detalhes do Produto</h1>
      <div style={detailStyle}>
        <p><strong>Nome:</strong> {product.name}</p>
        <p><strong>Categoria:</strong> {product.category}</p>
        <p><strong>Preço:</strong> R${product.price}</p>
      </div>
    </div>
  );
}

// Estilos inline para a página de detalhes
const containerStyle = {
  padding: '20px',
};

const detailStyle = {
  fontSize: '18px',
  marginTop: '15px',
};

export default ProductDetailPage;
