import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newImage, setNewImage] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!newTitle || !newPrice) return;

    const newProduct = {
      id: Date.now(),
      title: newTitle,
      price: parseFloat(newPrice),
      description: newDescription,
      category: newCategory || 'new',
      image:
        newImage ||
        'https://via.placeholder.com/300x300?text=Novo+Produto',
    };

    setProducts((prev) => [newProduct, ...prev]);

    setNewTitle('');
    setNewPrice('');
    setNewDescription('');
    setNewCategory('');
    setNewImage('');
  };

  if (loading) {
    return <p className="text-center p-4">Carregando produtos...</p>;
  }

  return (
    <div className="p-4">
      {}
      <div className="surface-card p-4 border-round-lg shadow-2 mb-4">
        <h2 className="mb-3">Adicionar Produto</h2>
        <form onSubmit={handleAddProduct} className="formgrid grid">
          <div className="field col-12 md:col-6">
            <label htmlFor="title">Título</label>
            <input
              id="title"
              type="text"
              className="w-full p-2 border-1 border-round"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
          </div>

          <div className="field col-12 md:col-3">
            <label htmlFor="price">Preço</label>
            <input
              id="price"
              type="number"
              step="0.01"
              className="w-full p-2 border-1 border-round"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              required
            />
          </div>

          <div className="field col-12 md:col-3">
            <label htmlFor="category">Categoria</label>
            <input
              id="category"
              type="text"
              className="w-full p-2 border-1 border-round"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </div>

          <div className="field col-12">
            <label htmlFor="image">URL da Imagem (opcional)</label>
            <input
              id="image"
              type="text"
              className="w-full p-2 border-1 border-round"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
            />
          </div>

          <div className="field col-12">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              rows="3"
              className="w-full p-2 border-1 border-round"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>

          <div className="field col-12 flex justify-content-end">
            <button
              type="submit"
              className="p-2 px-3 border-none border-round bg-primary text-white cursor-pointer"
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>

      {}
      <div className="grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-12 sm:col-6 md:col-4 lg:col-3 p-2"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
