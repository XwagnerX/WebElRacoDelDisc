import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function HomePage({ onNavigate }: { onNavigate: (section: string) => void }) {
  const carouselSlides = [
    {
      id: 'novedades',
      title: 'Novedades',
      subtitle: 'Los últimos lanzamientos',
      image: 'https://images.unsplash.com/photo-1768688819506-a23ace578e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZpbnlsJTIwc2hvcCUyMGludGVyaW9yfGVufDF8fHx8MTc3MTQyODEyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      section: 'novedades'
    },
    {
      id: 'vinilos',
      title: 'Vinilos',
      subtitle: 'La mejor selección de discos de vinilo',
      image: 'https://images.unsplash.com/photo-1625140233675-912059ebd5f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHMlMjBjb2xsZWN0aW9uJTIwc3RvcmV8ZW58MXx8fHwxNzcxNDI4MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      section: 'vinilos'
    },
    {
      id: 'cds',
      title: 'CDs',
      subtitle: 'Discos compactos de todos los géneros',
      image: 'https://images.unsplash.com/photo-1760931657888-87514a4e6c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZCUyMG11c2ljJTIwYWxidW0lMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc3MTQzMDE4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      section: 'cds'
    },
    {
      id: 'segunda-mano',
      title: 'Segunda Mano',
      subtitle: 'Tesoros musicales a precios increíbles',
      image: 'https://images.unsplash.com/photo-1616663395403-2e0052b8e595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGFsYnVtJTIwY292ZXJ8ZW58MXx8fHwxNzcxNDIxMTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      section: 'segunda-mano'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="min-h-[calc(100vh-12rem)]">
      {/* Hero Carousel */}
      <div className="relative h-[500px] overflow-hidden carousel-container">
        <Slider {...settings}>
          {carouselSlides.map((slide) => (
            <div key={slide.id} className="h-[500px]">
              <button
                onClick={() => onNavigate(slide.section)}
                className="w-full h-full relative group block p-0 border-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  role="img"
                  aria-label={slide.title}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                      {slide.subtitle}
                    </p>
                    <span className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg group-hover:bg-purple-700 transition-colors">
                      Explorar
                    </span>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </Slider>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
            <p className="text-gray-600">
              Todos nuestros productos son revisados cuidadosamente
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Envío Rápido</h3>
            <p className="text-gray-600">
              Recibe tus productos en 24-48 horas
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Pago Seguro</h3>
            <p className="text-gray-600">
              Transacciones 100% seguras y protegidas
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Buscas algo específico?
          </h2>
          <p className="text-xl mb-8">
            Explora nuestro catálogo completo de vinilos, CDs y tocadiscos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('vinilos')}
              className="px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Ver Vinilos
            </button>
            <button
              onClick={() => onNavigate('cds')}
              className="px-8 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors"
            >
              Ver CDs
            </button>
            <button
              onClick={() => onNavigate('tocadiscos')}
              className="px-8 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors"
            >
              Ver Tocadiscos
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .carousel-container .slick-list,
        .carousel-container .slick-track {
          height: 500px !important;
        }
        
        .carousel-container .slick-slide > div {
          height: 100%;
        }
        
        .carousel-container .slick-prev,
        .carousel-container .slick-next {
          z-index: 10;
          width: 50px;
          height: 50px;
        }
        
        .carousel-container .slick-prev {
          left: 25px;
        }
        
        .carousel-container .slick-next {
          right: 25px;
        }
        
        .carousel-container .slick-prev:before,
        .carousel-container .slick-next:before {
          font-size: 50px;
          opacity: 0.75;
        }
        
        .carousel-container .slick-prev:hover:before,
        .carousel-container .slick-next:hover:before {
          opacity: 1;
        }
        
        .carousel-container .slick-dots {
          bottom: 25px;
        }
        
        .carousel-container .slick-dots li button:before {
          font-size: 12px;
          opacity: 0.5;
          color: white;
        }
        
        .carousel-container .slick-dots li.slick-active button:before {
          opacity: 1;
          color: white;
        }
      `}</style>
    </div>
  );
}
