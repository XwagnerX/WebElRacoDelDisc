import { User, Mail, Calendar, Disc3, Package } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useStore } from '../context/StoreContext';

interface ProfilePageProps {
  onNavigate: (section: string) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const { user, isAuthenticated, logout } = useAuth();
  const { orderHistory } = useStore();

  if (!isAuthenticated || !user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Inicia sesión para ver tu perfil</h2>
          <p className="text-gray-600 mb-6">
            Crea una cuenta o inicia sesión para acceder a tu perfil de usuario
          </p>
          <button
            onClick={() => onNavigate('registro')}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Crear cuenta / Iniciar sesión
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const handleLogout = () => {
    logout();
    onNavigate('home');
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Mi perfil</h1>
        <p className="text-gray-600">
          Información de tu cuenta en El racó del disc
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Perfil principal */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-purple-600" />
              </div>
              Datos personales
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Nombre</p>
                  <p className="text-lg font-semibold">{user.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-lg font-semibold">{user.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Miembro desde</p>
                  <p className="text-lg font-semibold">{formatDate(user.createdAt)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Package className="w-5 h-5 text-purple-600" />
              </div>
              Historial de pedidos
            </h2>

            {orderHistory.length === 0 ? (
              <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">
                <p className="text-gray-600 mb-3">Todavía no has realizado ningún pedido.</p>
                <button
                  onClick={() => onNavigate('la-tienda')}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Ir a comprar
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {orderHistory.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <p className="text-sm text-gray-500">Pedido #{order.id.slice(0, 8)}</p>
                        <p className="font-semibold">{formatDate(order.createdAt)}</p>
                      </div>
                      <p className="text-lg font-bold text-purple-600">{formatPrice(order.total)}</p>
                    </div>

                    <div className="space-y-2 mb-3">
                      {order.items.map((item) => (
                        <div key={`${order.id}-${item.product.id}`} className="flex items-center justify-between text-sm">
                          <span className="text-gray-700">
                            {item.quantity} x {item.product.title}
                          </span>
                          <span className="font-medium text-gray-900">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-gray-200 text-sm text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{formatPrice(order.subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Envío</span>
                        <span>{formatPrice(order.shippingCost)}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-gray-900">
                        <span>Total</span>
                        <span>{formatPrice(order.total)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-purple-600 text-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">¡Bienvenido a El racó del disc!</h3>
            <p className="mb-4 opacity-90">
              Como miembro puedes guardar tus productos favoritos, realizar compras y explorar
              nuestro catálogo de vinilos, CDs y tocadiscos.
            </p>
            <button
              onClick={() => onNavigate('novedades')}
              className="w-full py-2 px-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Disc3 className="w-5 h-5" />
              Explorar novedades
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Acciones</h3>
            <div className="space-y-3">
              <button
                onClick={() => onNavigate('la-tienda')}
                className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                Visitar la tienda
              </button>
              <button
                onClick={handleLogout}
                className="w-full py-2 px-4 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-left"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
