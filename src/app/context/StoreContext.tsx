import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { CartItem, Order, Product, ShippingInfo } from '../types';
import { toast } from 'sonner';
import { useAuth } from './AuthContext';
import { products } from '../data/products';

interface StoreContextType {
  cart: CartItem[];
  wishlist: Product[];
  orderHistory: Order[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  addOrder: (shippingInfo: ShippingInfo, shippingCost: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const ORDERS_STORAGE_KEY = 'raco_orders_by_user';
const STOCK_STORAGE_KEY = 'raco_stock_by_product';

type OrdersByUser = Record<string, Order[]>;
type StockByProduct = Record<string, number>;

function getStoredOrdersByUser(): OrdersByUser {
  try {
    const stored = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!stored) return {};
    return JSON.parse(stored) as OrdersByUser;
  } catch {
    return {};
  }
}

function getOrdersByUserId(userId: string): Order[] {
  const ordersByUser = getStoredOrdersByUser();
  return ordersByUser[userId] ?? [];
}

function saveOrdersByUserId(userId: string, orders: Order[]) {
  const ordersByUser = getStoredOrdersByUser();
  ordersByUser[userId] = orders;
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(ordersByUser));
}

function getStoredStockByProduct(): StockByProduct {
  try {
    const stored = localStorage.getItem(STOCK_STORAGE_KEY);
    if (!stored) return {};
    return JSON.parse(stored) as StockByProduct;
  } catch {
    return {};
  }
}

function saveStockByProduct(stockByProduct: StockByProduct) {
  localStorage.setItem(STOCK_STORAGE_KEY, JSON.stringify(stockByProduct));
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);

  useEffect(() => {
    if (!user) {
      setOrderHistory([]);
      return;
    }
    setOrderHistory(getOrdersByUserId(user.id));
  }, [user]);

  useEffect(() => {
    const storedStockByProduct = getStoredStockByProduct();
    products.forEach((product) => {
      const storedStock = storedStockByProduct[product.id];
      if (typeof storedStock === 'number') {
        product.stock = Math.max(0, storedStock);
      }
    });
  }, []);

  const persistAndApplyStockChange = (items: CartItem[]) => {
    const updatedStockByProduct = getStoredStockByProduct();

    items.forEach((item) => {
      const product = products.find((p) => p.id === item.product.id);
      if (!product) return;

      const nextStock = Math.max(0, product.stock - item.quantity);
      product.stock = nextStock;
      updatedStockByProduct[product.id] = nextStock;
    });

    saveStockByProduct(updatedStockByProduct);
  };

  const addToCart = (product: Product) => {
    let action: 'added' | 'updated' | 'no-stock' | 'max-reached' = 'added';

    setCart((prevCart) => {
      if (product.stock <= 0) {
        action = 'no-stock';
        return prevCart;
      }

      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        if (existingItem.quantity >= product.stock) {
          action = 'max-reached';
          return prevCart;
        }
        action = 'updated';
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      action = 'added';
      return [...prevCart, { product, quantity: 1 }];
    });

    if (action === 'no-stock') {
      toast.error(`Sin stock: ${product.title}`);
      return;
    }

    if (action === 'max-reached') {
      toast.error(`No hay más unidades disponibles de ${product.title}`);
      return;
    }

    if (action === 'updated') {
      toast.success(`Cantidad actualizada: ${product.title}`);
      return;
    }

    toast.success(`Añadido al carrito: ${product.title}`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) => {
      const nextCart = prevCart
        .map((item) => {
          if (item.product.id !== productId) return item;

          const maxAllowed = item.product.stock;
          if (maxAllowed <= 0) return null;

          const clampedQuantity = Math.min(quantity, maxAllowed);
          return { ...item, quantity: clampedQuantity };
        })
        .filter((item): item is CartItem => item !== null);

      return nextCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const addOrder = (shippingInfo: ShippingInfo, shippingCost: number) => {
    if (cart.length === 0) return;

    if (!user) {
      toast.error('Inicia sesión para guardar tus pedidos en el perfil');
      return;
    }

    const hasUnavailableProducts = cart.some(
      (item) => item.product.stock <= 0 || item.quantity > item.product.stock
    );

    if (hasUnavailableProducts) {
      toast.error('Algunos productos no tienen stock suficiente. Revisa tu carrito.');
      return;
    }

    const subtotal = getCartTotal();
    const newOrder: Order = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      items: cart.map((item) => ({
        product: { ...item.product },
        quantity: item.quantity,
      })),
      subtotal,
      shippingCost,
      total: subtotal + shippingCost,
      shippingInfo: { ...shippingInfo },
    };

    persistAndApplyStockChange(cart);

    setOrderHistory((prevOrders) => {
      const updatedOrders = [newOrder, ...prevOrders];
      saveOrdersByUserId(user.id, updatedOrders);
      return updatedOrders;
    });
  };

  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.find((item) => item.id === product.id)) {
        return [...prevWishlist, product];
      }
      return prevWishlist;
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId)
    );
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        orderHistory,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        addOrder,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        getCartTotal,
        getCartItemsCount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
