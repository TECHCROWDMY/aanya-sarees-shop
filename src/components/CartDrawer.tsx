import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/cartContext';
import { Button } from '@/components/ui/button';

const CartDrawer = () => {
  const { isCartOpen, closeCart, cartItems } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  // Prevent background scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  return (
    <>
    {/* Backdrop */}
    <div
      className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ease-in-out ${
        isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={closeCart}
    />

    {/* Drawer */}
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-luxury transform transition-all duration-300 ease-in-out z-[110] ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="font-circular text-lg font-bold">Your Cart</h2>
        <button onClick={closeCart} className="text-gray-500 hover:text-gray-800">
          ✕
        </button>
      </div>
      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-140px)]">
        {cartItems.length === 0 ? (
          <p className="font-circular text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <span className="font-circular">{item.name}</span>
              <span className="font-circular font-semibold">₹{item.price}</span>
            </div>
          ))
        )}
      </div>
      
      {/* Footer with Checkout Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
        <Button
          onClick={handleCheckout}
          disabled={cartItems.length === 0}
          className="w-full font-circular"
          variant="luxury"
        >
          Proceed To Checkout
        </Button>
      </div>
    </div>
  </>
  );
};

export default CartDrawer;
