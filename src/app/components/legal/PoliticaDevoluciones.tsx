import { RotateCcw } from 'lucide-react';

export function PoliticaDevoluciones() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <RotateCcw className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Política de Devoluciones</h1>
            <p className="text-gray-600">Última actualización: marzo 2026</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-purple-600 text-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-2">Garantía de satisfacción</h3>
          <p className="opacity-90">
            Tienes 14 días naturales desde la recepción del pedido para devolver o cambiar productos
            de forma gratuita, según lo establecido en la normativa española de consumo.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">1. Condiciones para devoluciones</h2>
          <p className="text-gray-700 mb-4">
            El producto debe estar en su estado original: sin abrir (si viene sellado) o sin señales
            de uso. Debe incluir el embalaje original, accesorios e instrucciones si los tuviera.
          </p>
          <p className="text-gray-700">
            Los vinilos y CDs de segunda mano deben devolverse en el mismo estado en que fueron
            recibidos. Si detectas un defecto no descrito en la ficha, contacta con nosotros en las
            primeras 48 horas.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">2. Cómo solicitar una devolución</h2>
          <p className="text-gray-700 mb-4">
            Escríbenos a devoluciones@elraco-del-disc.es indicando tu número de pedido y el motivo.
            Te enviaremos una etiqueta de devolución prepagada si la devolución es por defecto o
            error nuestro.
          </p>
          <p className="text-gray-700">
            Empaqueta el producto de forma segura para evitar daños durante el transporte. El coste
            del envío de vuelta corre por tu cuenta salvo en devoluciones por defecto o error nuestro.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">3. Reembolsos</h2>
          <p className="text-gray-700 mb-4">
            Una vez recibido y verificado el producto devuelto, procesaremos el reembolso en un plazo
            de 5-7 días laborables. El reembolso se realizará mediante el mismo método de pago
            utilizado en la compra.
          </p>
          <p className="text-gray-700">
            Si prefieres un cambio por otro producto, indícalo al solicitar la devolución. Te
            facilitaremos el proceso para elegir el artículo de sustitución.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">4. Exclusiones</h2>
          <p className="text-gray-700">
            No se admiten devoluciones de productos personalizados o hechos a medida. Los vinilos y
            CDs abiertos solo pueden devolverse si presentan defectos de fabricación. Los tocadiscos
            y equipos electrónicos siguen su garantía del fabricante.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-600">5. Contacto</h2>
          <p className="text-gray-700">
            Para cualquier duda sobre devoluciones: devoluciones@elraco-del-disc.es o llámanos al
            +34 912 345 678. Estaremos encantados de ayudarte.
          </p>
        </div>
      </div>
    </div>
  );
}
