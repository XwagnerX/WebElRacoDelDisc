import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

interface SearchResultsProps {
  query: string;
  onViewDetails: (product: Product) => void;
}

export function SearchResults({ query, onViewDetails }: SearchResultsProps) {
  const normalized = query.toLowerCase().trim();

  const filtered = products.filter(
    (p) =>
      p.title.toLowerCase().includes(normalized) ||
      p.artist.toLowerCase().includes(normalized)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Resultados para "{query}"
        </h1>

        {filtered.length === 0 ? (
          <p className="text-gray-600">
            No se encontraron productos que coincidan con la búsqueda.
          </p>
        ) : (
          <p className="text-gray-600">
            Mostrando {filtered.length} producto{filtered.length > 1 ? 's' : ''}.
          </p>
        )}
      </div>

      {filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
}