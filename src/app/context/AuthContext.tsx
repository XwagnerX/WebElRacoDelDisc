import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  register: (name: string, email: string, password: string) => { success: boolean; error?: string };
  login: (email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
}

const AUTH_STORAGE_KEY = 'auth_user';
const USERS_STORAGE_KEY = 'raco_users';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function getStoredUser(): User | null {
  try {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as User;
  } catch {
    return null;
  }
}

function getStoredUsers(): { email: string; password: string; user: User }[] {
  try {
    const stored = localStorage.getItem(USERS_STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

function saveUsers(users: { email: string; password: string; user: User }[]) {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

function saveCurrentUser(user: User | null) {
  if (user) {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(getStoredUser);

  useEffect(() => {
    saveCurrentUser(user);
  }, [user]);

  const register = (name: string, email: string, password: string) => {
    const users = getStoredUsers();
    const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      return { success: false, error: 'Ya existe una cuenta con este email' };
    }
    if (password.length < 6) {
      return { success: false, error: 'La contraseña debe tener al menos 6 caracteres' };
    }
    const newUser: User = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      createdAt: new Date().toISOString(),
    };
    users.push({ email: newUser.email, password, user: newUser });
    saveUsers(users);
    setUser(newUser);
    return { success: true };
  };

  const login = (email: string, password: string) => {
    const users = getStoredUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!found) {
      return { success: false, error: 'Email o contraseña incorrectos' };
    }
    setUser(found.user);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
