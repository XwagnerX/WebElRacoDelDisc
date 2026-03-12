import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

interface VinilosProps {
  onViewDetails: (product: Product) => void;
}

export function Vinilos({ onViewDetails }: VinilosProps) {
  const vinylProducts = products.filter((p) => p.category === 'vinyl');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Vinilos</h1>
        <p className="text-gray-600">
          Descubre nuestra colección de discos de vinilo
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {vinylProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>

      {vinylProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No hay vinilos disponibles en este momento</p>
        </div>
      )}
    </div>
  );
}
