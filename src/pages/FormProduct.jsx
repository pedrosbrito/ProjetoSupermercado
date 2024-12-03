import React, { useState } from 'react';

function FormProduct() {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.category || !product.price) {
      setError('Preencha todos os campos.');
    } else {
      setError('');
      alert(`Produto cadastrado: ${product.name}`);
      setProduct({
        name: '',
        category: '',
        price: '',
      });
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Cadastrar Produto</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Nome"
          style={inputStyle}
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Categoria"
          style={inputStyle}
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Preço"
          style={inputStyle}
        />
        {error && <p style={errorStyle}>{error}</p>}
        <button type="submit" style={buttonStyle}>Cadastrar</button>
      </form>
    </div>
  );
}

// Estilos inline para a página de cadastro
const containerStyle = {
  padding: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px',
  border: 'none',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
};

export default FormProduct;
