import React from 'react';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="min-h-screen">
      <header className="surface-900 text-0 p-3">
        <div className="flex align-items-center justify-content-between">
          <h1 className="m-0 text-xl">mini loja geração tech</h1>
          <span className="text-sm">React + PrimeReact + PrimeFlex</span>
        </div>
      </header>

      <main className="p-3">
        <ProductList />
      </main>

      <footer className="surface-900 text-0 p-2 text-center text-sm">
        mini loja geração tech
      </footer>
    </div>
  );
}

export default App;
