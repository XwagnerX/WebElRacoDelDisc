import { useState } from 'react';
import { StoreProvider } from './context/StoreContext';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { Novedades } from './components/Novedades';
import { Vinilos } from './components/Vinilos';
import { CDs } from './components/CDs';
import { Tocadiscos } from './components/Tocadiscos';
import { SegundaMano } from './components/SegundaMano';
import { LaTienda } from './components/LaTienda';
import { TerminosCondiciones } from './components/legal/TerminosCondiciones';
import { PoliticaPrivacidad } from './components/legal/PoliticaPrivacidad';
import { PoliticaCookies } from './components/legal/PoliticaCookies';
import { PoliticaDevoluciones } from './components/legal/PoliticaDevoluciones';
import { RegisterPage } from './components/RegisterPage';
import { ProfilePage } from './components/ProfilePage';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Wishlist } from './components/Wishlist';
import { SearchResults } from './components/SearchResults';
import { Product } from './types';
import { Toaster } from 'sonner';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentSection('busqueda');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleOpenCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleOpenWishlist = () => {
    setIsWishlistOpen(true);
  };

  const handleCloseWishlist = () => {
    setIsWishlistOpen(false);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'novedades':
        return <Novedades onViewDetails={handleViewDetails} />;
      case 'vinilos':
        return <Vinilos onViewDetails={handleViewDetails} />;
      case 'cds':
        return <CDs onViewDetails={handleViewDetails} />;
      case 'tocadiscos':
        return <Tocadiscos onViewDetails={handleViewDetails} />;
      case 'segunda-mano':
        return <SegundaMano onViewDetails={handleViewDetails} />;
      case 'la-tienda':
        return <LaTienda />;
      case 'busqueda':
        return (
          <SearchResults
            query={searchQuery}
            onViewDetails={handleViewDetails}
          />
        );
      case 'registro':
        return <RegisterPage onNavigate={handleNavigate} />;
      case 'perfil':
        return <ProfilePage onNavigate={handleNavigate} />;
      case 'terminos':
        return <TerminosCondiciones />;
      case 'privacidad':
        return <PoliticaPrivacidad />;
      case 'cookies':
        return <PoliticaCookies />;
      case 'devoluciones':
        return <PoliticaDevoluciones />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <AuthProvider>
      <StoreProvider>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header
            currentSection={currentSection}
            onNavigate={handleNavigate}
            onOpenCart={handleOpenCart}
            onOpenWishlist={handleOpenWishlist}
            onSearch={handleSearch}
            onViewDetails={handleViewDetails}
          />

          <main className="flex-1">
            {renderSection()}
          </main>

          <Footer onNavigate={handleNavigate} />

          <ProductDetail
            product={selectedProduct}
            onClose={handleCloseDetails}
          />

          <Cart
            isOpen={isCartOpen}
            onClose={handleCloseCart}
            onCheckout={handleOpenCheckout}
          />

          <Checkout
            isOpen={isCheckoutOpen}
            onClose={handleCloseCheckout}
          />

          <Wishlist
            isOpen={isWishlistOpen}
            onClose={handleCloseWishlist}
            onViewDetails={handleViewDetails}
          />

          <Toaster position="top-right" richColors closeButton />
        </div>
      </StoreProvider>
    </AuthProvider>
  );
}