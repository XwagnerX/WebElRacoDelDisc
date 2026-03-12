import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export function LaTienda() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Nuestra Tienda</h1>
        <p className="text-gray-600">
          Conoce más sobre El racó del disc
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* About */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-gray-700 mb-4">
            El racó del disc es una tienda especializada en música física con más de 20 años
            de experiencia en el sector. Nuestra pasión por la música nos impulsa a ofrecer
            una cuidada selección de vinilos, CDs y tocadiscos que abarca desde los clásicos 
            más emblemáticos hasta las últimas novedades del panorama musical.
          </p>
          <p className="text-gray-700 mb-4">
            Creemos que la música en formato físico es mucho más que un simple medio de 
            reproducción: es una experiencia sensorial completa que conecta a los amantes 
            de la música con el arte en su forma más pura.
          </p>
          <p className="text-gray-700">
            Nuestro equipo está formado por auténticos melómanos que están siempre
            dispuestos a asesorarte y ayudarte a encontrar ese disco o reproductor que estás buscando.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Dirección</p>
                  <p className="text-gray-600">
                    Calle de la Música, 42<br />
                    28001 Madrid, España
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Horario</p>
                  <p className="text-gray-600">
                    Lunes a Viernes: 10:00 - 20:00<br />
                    Sábados: 11:00 - 21:00<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-gray-600">+34 912 345 678</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">info@vinylstore.es</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-600 text-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Visítanos</h3>
            <p className="mb-4">
              ¿Prefieres ver nuestros productos en persona? Te esperamos en nuestra tienda
              física en el centro de Madrid.
            </p>
            <p className="text-sm opacity-90">
              Además de nuestra tienda online, disponemos de un amplio espacio donde
              podrás escuchar los discos y probar los tocadiscos antes de comprarlos.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Autenticidad Garantizada</h3>
            <p className="text-sm text-gray-600">
              Todos nuestros vinilos son originales y verificados
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Servicio de Búsqueda</h3>
            <p className="text-sm text-gray-600">
              ¿Buscas un vinilo en particular? Nosotros lo encontramos
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
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
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Compra-Venta</h3>
            <p className="text-sm text-gray-600">
              Compramos tus vinilos y CDs usados en buen estado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
