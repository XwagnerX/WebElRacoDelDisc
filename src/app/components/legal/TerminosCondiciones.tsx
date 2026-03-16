import { FileText } from 'lucide-react';

export function TerminosCondiciones() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <FileText className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Términos y Condiciones</h1>
            <p className="text-gray-600">Última actualización: marzo 2026</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">1. Información general</h2>
          <p className="text-gray-700 mb-4">
            Bienvenido a El racó del disc. Al utilizar nuestra tienda online, aceptas los siguientes
            términos y condiciones. Te recomendamos leerlos detenidamente antes de realizar ninguna
            compra.
          </p>
          <p className="text-gray-700">
            El racó del disc es una tienda especializada en música física ubicada en Barcelona, España.
            Ofrecemos vinilos, CDs y tocadiscos tanto nuevos como de segunda mano.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">2. Uso del servicio</h2>
          <p className="text-gray-700 mb-4">
            El uso de nuestra web implica la aceptación de estos términos. El usuario se compromete
            a utilizar el sitio de forma legal, sin realizar actividades que puedan dañar, inutilizar
            o sobrecargar el servicio.
          </p>
          <p className="text-gray-700">
            Proporcionarás información veraz y actualizada al crear una cuenta o realizar una compra.
            Eres responsable de mantener la confidencialidad de tu contraseña.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">3. Productos y precios</h2>
          <p className="text-gray-700 mb-4">
            Nos esforzamos por mostrar con precisión los productos y precios en nuestra web. Sin
            embargo, nos reservamos el derecho de corregir errores y modificar precios sin previo
            aviso. En caso de error en el precio, te contactaremos antes de procesar el pedido.
          </p>
          <p className="text-gray-700">
            Las imágenes de los productos son orientativas. El estado de los artículos de segunda
            mano se indica en cada ficha de producto.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">4. Pedidos y pago</h2>
          <p className="text-gray-700 mb-4">
            Al realizar un pedido, recibirás un email de confirmación. La aceptación del pedido se
            produce cuando te enviamos la confirmación del envío. Nos reservamos el derecho de
            rechazar pedidos en caso de stock insuficiente o irregularidades.
          </p>
          <p className="text-gray-700">
            Los precios incluyen IVA. Los gastos de envío se indicarán antes de finalizar la compra.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">5. Contacto</h2>
          <p className="text-gray-700">
            Para cualquier cuestión sobre estos términos, puedes contactarnos en elracodeldisc@gmail.com
            o en Carrer dels Tallers, 46, 08001 Barcelona, España.
          </p>
        </div>
      </div>
    </div>
  );
}
