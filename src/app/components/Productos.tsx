import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

interface ProductosProps {
  onViewDetails: (product: Product) => void;
}

export function Productos({ onViewDetails }: ProductosProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Todos los Productos</h1>
        <p className="text-gray-600">
          Explora nuestra colección completa de vinilos
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </div>
  );
}
