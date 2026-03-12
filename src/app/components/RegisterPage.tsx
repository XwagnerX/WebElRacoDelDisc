import { useState } from 'react';
import { UserPlus, LogIn, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface RegisterPageProps {
  onNavigate: (section: string) => void;
}

export function RegisterPage({ onNavigate }: RegisterPageProps) {
  const { register, login, isAuthenticated } = useAuth();
  const [mode, setMode] = useState<'register' | 'login'>('register');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (mode === 'register') {
      const result = register(name, email, password);
      if (result.success) {
        setSuccess(true);
        setPassword('');
      } else {
        setError(result.error ?? 'Error al registrarse');
      }
    } else {
      const result = login(email, password);
      if (result.success) {
        onNavigate('perfil');
      } else {
        setError(result.error ?? 'Error al iniciar sesión');
      }
    }
  };

  const switchMode = () => {
    setMode(mode === 'register' ? 'login' : 'register');
    setError('');
    setSuccess(false);
    setPassword('');
    if (mode === 'login') setName('');
  };

  if (isAuthenticated) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Ya has iniciado sesión</h2>
          <p className="text-gray-600 mb-6">
            Ve a tu perfil para ver tu información
          </p>
          <button
            onClick={() => onNavigate('perfil')}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Ir a mi perfil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {mode === 'register' ? (
                <UserPlus className="w-8 h-8 text-purple-600" />
              ) : (
                <LogIn className="w-8 h-8 text-purple-600" />
              )}
            </div>
            <h1 className="text-3xl font-bold mb-2">
              {mode === 'register' ? 'Crear cuenta' : 'Iniciar sesión'}
            </h1>
            <p className="text-gray-600">
              {mode === 'register'
                ? 'Únete a El racó del disc y guarda tus preferencias'
                : 'Accede a tu cuenta para ver tu perfil'}
            </p>
          </div>

          {success && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
              ¡Cuenta creada con éxito! Ya puedes ir a tu perfil.
            </div>
          )}

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'register' ? 'Mínimo 6 caracteres' : 'Tu contraseña'}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              {mode === 'register' ? 'Crear cuenta' : 'Iniciar sesión'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={switchMode}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              {mode === 'register'
                ? '¿Ya tienes cuenta? Inicia sesión'
                : '¿No tienes cuenta? Regístrate'}
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Al crear cuenta aceptas nuestros términos de uso y política de privacidad
        </p>
      </div>
    </div>
  );
}
