import React from 'react';
import { Card } from 'primereact/card';

const ProductCard = ({ product }) => {
  const header = (
    <img
      alt={product.title}
      src={product.image}
      style={{ width: '100%', height: '200px', objectFit: 'contain' }}
    />
  );

  const footer = (
    <div className="flex justify-content-between align-items-center">
      <span className="text-lg font-bold text-primary">
        ${product.price}
      </span>
      <span className="text-sm text-color-secondary">
        {product.category}
      </span>
    </div>
  );

  return (
    <Card
      header={header}
      footer={footer}
      title={product.title}
      subTitle={product.description?.slice(0, 80) + '...'}
      className="h-full shadow-2 border-round-lg surface-card"
    >
      {}
    </Card>
  );
};

export default ProductCard;
