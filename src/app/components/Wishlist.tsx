import { X, Heart, ShoppingCart } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Product } from '../types';

interface WishlistProps {
  isOpen: boolean;
  onClose: () => void;
  onViewDetails: (product: Product) => void;
}

export function Wishlist({ isOpen, onClose, onViewDetails }: WishlistProps) {
  const { wishlist, removeFromWishlist, addToCart } = useStore();

  if (!isOpen) return null;

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end md:items-center justify-end"
      onClick={onClose}
    >
      <div
        className="bg-white w-full md:w-[500px] h-[90vh] md:h-full md:max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold">Lista de Deseados</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {wishlist.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Tu lista de deseados está vacía</p>
              <p className="text-gray-400 text-sm mt-2">
                Añade tus vinilos favoritos aquí
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlist.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded cursor-pointer"
                    onClick={() => onViewDetails(product)}
                  />
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-semibold line-clamp-1 cursor-pointer hover:text-purple-600"
                      onClick={() => onViewDetails(product)}
                    >
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-1">{product.artist}</p>
                    <p className="text-purple-600 font-bold mt-1">
                      €{product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={product.stock === 0}
                        className="flex items-center gap-1 px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        <ShoppingCart className="w-3 h-3" />
                        Añadir
                      </button>
                      <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="flex items-center gap-1 px-3 py-1 border border-red-300 text-red-600 text-sm rounded hover:bg-red-50 transition-colors"
                      >
                        <X className="w-3 h-3" />
                        Quitar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {wishlist.length > 0 && (
          <div className="border-t border-gray-200 p-6">
            <p className="text-sm text-gray-600 text-center">
              {wishlist.length} {wishlist.length === 1 ? 'producto' : 'productos'} en tu lista de deseados
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
