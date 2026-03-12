import { Shield } from 'lucide-react';

export function PoliticaPrivacidad() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Política de Privacidad</h1>
            <p className="text-gray-600">Última actualización: marzo 2026</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">1. Responsable del tratamiento</h2>
          <p className="text-gray-700">
            El racó del disc, con sede en Calle de la Música, 42, 28001 Madrid, España, es el
            responsable del tratamiento de tus datos personales cuando utilizas nuestra tienda
            online.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">2. Datos que recogemos</h2>
          <p className="text-gray-700 mb-4">
            Recogemos la información que nos proporcionas voluntariamente: nombre, email, dirección
            de envío y datos de pago necesarios para procesar tus compras.
          </p>
          <p className="text-gray-700">
            También recopilamos datos técnicos como la dirección IP y el tipo de navegador para
            mejorar nuestro servicio. Consulta nuestra Política de Cookies para más detalles.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">3. Finalidad del tratamiento</h2>
          <p className="text-gray-700 mb-4">
            Utilizamos tus datos para gestionar tus pedidos, enviar confirmaciones, procesar
            devoluciones y comunicarnos contigo sobre tu cuenta.
          </p>
          <p className="text-gray-700">
            Con tu consentimiento, podemos enviarte novedades y ofertas. Puedes darte de baja en
            cualquier momento desde tu perfil o mediante el enlace en nuestros emails.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">4. Tus derechos</h2>
          <p className="text-gray-700 mb-4">
            De acuerdo con el RGPD, tienes derecho a acceder, rectificar, eliminar y portar tus
            datos. También puedes oponerte al tratamiento o solicitar su limitación.
          </p>
          <p className="text-gray-700">
            Para ejercer estos derechos, contacta con nosotros en info@elraco-del-disc.es. Tienes
            derecho a presentar una reclamación ante la Agencia Española de Protección de Datos
            (AEPD).
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">5. Conservación de datos</h2>
          <p className="text-gray-700">
            Conservamos tus datos mientras mantengas una cuenta activa y durante el tiempo necesario
            para cumplir con obligaciones legales. Los datos de facturación se conservan según la
            normativa fiscal española.
          </p>
        </div>
      </div>
    </div>
  );
}
