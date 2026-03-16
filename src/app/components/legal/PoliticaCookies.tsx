import { Cookie } from 'lucide-react';

export function PoliticaCookies() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <Cookie className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Política de Cookies</h1>
            <p className="text-gray-600">Última actualización: marzo 2026</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">1. ¿Qué son las cookies?</h2>
          <p className="text-gray-700">
            Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo
            cuando los visitas. Nos permiten recordar tus preferencias, mantener tu sesión iniciada
            y mejorar tu experiencia de navegación.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">2. Tipos de cookies que usamos</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold text-gray-900">Cookies esenciales</p>
              <p>
                Son necesarias para el funcionamiento básico: carrito de la compra, sesión de usuario
                y seguridad. No pueden desactivarse.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Cookies de preferencias</p>
              <p>
                Recuerdan tu idioma, moneda y otras preferencias para ofrecerte una experiencia más
                personalizada.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Cookies analíticas</p>
              <p>
                Nos ayudan a entender cómo usas la web (páginas visitadas, tiempo en cada sección)
                para mejorar nuestro servicio. Se usan de forma agregada y anónima.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">3. Terceros</h2>
          <p className="text-gray-700 mb-4">
            Algunas cookies son de servicios externos que utilizamos, como plataformas de pago o
            herramientas analíticas. Estas tienen sus propias políticas de privacidad.
          </p>
          <p className="text-gray-700">
            No vendemos ni compartimos datos personales identificables con terceros con fines
            publicitarios.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">4. Gestión de cookies</h2>
          <p className="text-gray-700 mb-4">
            Puedes configurar tu navegador para rechazar cookies o recibir un aviso antes de que se
            instalen. Ten en cuenta que desactivar ciertas cookies puede afectar al funcionamiento
            del carrito y de tu cuenta.
          </p>
          <p className="text-gray-700">
            En la configuración de privacidad de tu navegador (Chrome, Firefox, Safari, Edge) puedes
            ver y eliminar las cookies almacenadas.
          </p>
        </div>

        <div className="bg-purple-600 text-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-2">Consentimiento</h3>
          <p className="opacity-90">
            Al continuar navegando en El racó del disc, aceptas el uso de cookies según esta
            política. Si tienes dudas, contacta con nosotros en Carrer dels Tallers, 46, 08001 Barcelona, España.
          </p>
        </div>
      </div>
    </div>
  );
}
