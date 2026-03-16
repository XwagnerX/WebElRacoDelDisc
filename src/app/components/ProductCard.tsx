import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
      return;
    }
    addToWishlist(product);
  };

  return (
    <div
      onClick={() => onViewDetails(product)}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            Nuevo
          </span>
        )}
        {product.condition === 'used' && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            Segunda Mano
          </span>
        )}
        <button
          onClick={handleToggleWishlist}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label={inWishlist ? 'Quitar de lista de deseados' : 'Añadir a lista de deseados'}
        >
          <Heart
            className={`w-4 h-4 ${inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-1">
            {product.category === 'player' ? `Marca: ${product.artist}` : product.artist}
          </p>
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-500">{product.genre}</span>
          <span className="text-xs text-gray-500">{product.year}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-purple-600">€{product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">{product.stock === 0 ? 'Agotado' : 'Añadir'}</span>
          </button>
        </div>

        {product.stock < 5 && product.stock > 0 && (
          <p className="text-xs text-orange-600 mt-2">
            ¡Solo quedan {product.stock} unidades!
          </p>
        )}
        {product.stock === 0 && (
          <p className="text-xs text-red-600 mt-2">
            Agotado
          </p>
        )}
      </div>
    </div>
  );
}
