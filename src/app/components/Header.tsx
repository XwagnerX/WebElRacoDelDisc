import { ShoppingCart, Heart, User, Disc3, ChevronDown } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

export function Header({ currentSection, onNavigate, onOpenCart, onOpenWishlist }: HeaderProps) {
  const { getCartItemsCount, wishlist } = useStore();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
      if (userRef.current && !userRef.current.contains(event.target as Node)) {
        setIsUserOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const productCategories = [
    { id: 'vinilos', label: 'Vinilos' },
    { id: 'cds', label: 'CDs' },
    { id: 'tocadiscos', label: 'Tocadiscos' },
  ];

  const handleProductClick = (categoryId: string) => {
    setIsProductsOpen(false);
    onNavigate(categoryId);
  };

  const handleLogout = () => {
    setIsUserOpen(false);
    alert('Sesión cerrada');
  };

  const handleAccountDetails = () => {
    setIsUserOpen(false);
    alert('Ver detalles de cuenta');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Disc3 className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold">El racó del disc</span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('novedades')}
              className={`text-sm transition-colors ${
                currentSection === 'novedades'
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Novedades
            </button>

            {/* Products Dropdown */}
            <div className="relative" ref={productsRef}>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`flex items-center gap-1 text-sm transition-colors ${
                  ['vinilos', 'cds', 'tocadiscos'].includes(currentSection)
                    ? 'text-purple-600 font-semibold'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Productos
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {productCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleProductClick(category.id)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('segunda-mano')}
              className={`text-sm transition-colors ${
                currentSection === 'segunda-mano'
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Segunda mano
            </button>

            <button
              onClick={() => onNavigate('la-tienda')}
              className={`text-sm transition-colors ${
                currentSection === 'la-tienda'
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              La tienda
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* User Dropdown */}
            <div className="relative" ref={userRef}>
              <button
                onClick={() => setIsUserOpen(!isUserOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Usuario"
              >
                <User className="w-5 h-5 text-gray-700" />
              </button>

              {isUserOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <button
                    onClick={handleAccountDetails}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    Detalles de cuenta
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={onOpenWishlist}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
              aria-label="Lista de deseados"
            >
              <Heart className="w-5 h-5 text-gray-700" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button
              onClick={onOpenCart}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
              aria-label="Carrito"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <nav className="flex overflow-x-auto px-4 py-2 gap-4">
          <button
            onClick={() => onNavigate('novedades')}
            className={`text-sm whitespace-nowrap px-3 py-1 rounded-full transition-colors ${
              currentSection === 'novedades'
                ? 'bg-purple-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Novedades
          </button>
          <button
            onClick={() => onNavigate('vinilos')}
            className={`text-sm whitespace-nowrap px-3 py-1 rounded-full transition-colors ${
              currentSection === 'vinilos'
                ? 'bg-purple-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Vinilos
          </button>
          <button
            onClick={() => onNavigate('cds')}
            className={`text-sm whitespace-nowrap px-3 py-1 rounded-full transition-colors ${
              currentSection === 'cds'
                ? 'bg-purple-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            CDs
          </button>
          <button
            onClick={() => onNavigate('tocadiscos')}
            className={`text-sm whitespace-nowrap px-3 py-1 rounded-full transition-colors ${
              currentSection === 'tocadiscos'
                ? 'bg-purple-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Tocadiscos
          </button>
          <button
            onClick={() => onNavigate('segunda-mano')}
            className={`text-sm whitespace-nowrap px-3 py-1 rounded-full transition-colors ${
              currentSection === 'segunda-mano'
                ? 'bg-purple-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Segunda mano
          </button>
          <button
            onClick={() => onNavigate('la-tienda')}
            className={`text-sm whitespace-nowrap px-3 py-1 rounded-full transition-colors ${
              currentSection === 'la-tienda'
                ? 'bg-purple-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            La tienda
          </button>
        </nav>
      </div>
    </header>
  );
}
