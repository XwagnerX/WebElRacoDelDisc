import { X, ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import { reviews } from '../data/products';

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  const { addToCart, addToWishlist, isInWishlist } = useStore();

  if (!product) return null;

  const productReviews = reviews.filter((r) => r.productId === product.id);
  const averageRating = productReviews.length
    ? productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length
    : 0;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleWishlist = () => {
    addToWishlist(product);
  };

  const inWishlist = isInWishlist(product.id);

  return (
    <div
      className="fixed inset-0 bg-white/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Detalles del Producto</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full">
                  Nuevo
                </span>
              )}
              {product.condition === 'used' && (
                <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full">
                  Segunda Mano
                </span>
              )}
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-2">{product.title}</h3>
              <p className="text-xl text-gray-600 mb-4">{product.artist}</p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(averageRating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {averageRating.toFixed(1)} ({productReviews.length} reseñas)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-sm text-gray-600">Género</span>
                  <p className="font-semibold">{product.genre}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Año</span>
                  <p className="font-semibold">{product.year}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Estado</span>
                  <p className="font-semibold">
                    {product.condition === 'new' ? 'Nuevo' : 'Segunda Mano'}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Stock</span>
                  <p className="font-semibold">{product.stock} unidades</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{product.description}</p>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <span className="text-3xl font-bold text-purple-600">
                  €{product.price.toFixed(2)}
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Añadir al Carrito
                </button>

                <button
                  onClick={handleToggleWishlist}
                  className={`px-6 py-3 rounded-lg border-2 transition-colors ${
                    inWishlist
                      ? 'border-red-500 bg-red-50 text-red-600'
                      : 'border-gray-300 hover:border-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? 'fill-red-500' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {productReviews.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Reseñas de Clientes</h3>
              <div className="space-y-6">
                {productReviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold">{review.userName}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}