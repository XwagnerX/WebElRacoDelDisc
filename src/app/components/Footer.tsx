import { Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sobre El racó del disc</h3>
            <p className="text-sm">
              Tu tienda especializada en música física. Vinilos, CDs y tocadiscos. Desde clásicos hasta
              las últimas novedades.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              Twitter / X
              <a
                href="https://x.com/elraco_delDisc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('terminos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Términos y Condiciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacidad')}
                  className="hover:text-white transition-colors text-left"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cookies')}
                  className="hover:text-white transition-colors text-left"
                >
                  Política de Cookies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('devoluciones')}
                  className="hover:text-white transition-colors text-left"
                >
                  Política de Devoluciones
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2026 El racó del disc. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
