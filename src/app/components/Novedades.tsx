import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

interface NovedadesProps {
  onViewDetails: (product: Product) => void;
}

export function Novedades({ onViewDetails }: NovedadesProps) {
  const newProducts = products.filter((p) => p.isNew);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Novedades</h1>
        <p className="text-gray-600">
          Descubre los últimos lanzamientos en vinilo
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {newProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>

      {newProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No hay novedades disponibles en este momento</p>
        </div>
      )}
    </div>
  );
}
