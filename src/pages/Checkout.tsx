import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { ShoppingCart, Truck, CreditCard, XCircle } from "lucide-react";

// Dummy product data to use if no product is passed via navigation
const dummyProduct = {
  name: "Modern Laptop",
  price: "1299.99",
  size: "13-inch",
  image: "https://placehold.co/150x150/22d3ee/ffffff?text=Product",
};


function CheckoutPage() {
  const location = useLocation();
  const initialProduct = location.state?.product || dummyProduct;

  const [step, setStep] = useState(1);
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Handle final checkout logic
  const handlePlaceOrder = () => {
    // In a real app, this would send data to a backend for processing
    setShowSuccessModal(true);
    console.log("Order Details:", { initialProduct, shippingDetails, paymentDetails });
  };

  const steps = [
    { id: 1, label: "Product Details", icon: ShoppingCart },
    { id: 2, label: "Shipping Details", icon: Truck },
    { id: 3, label: "Payment Details", icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8 font-sans">
      {showSuccessModal && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border-2 border-green-600 text-center relative max-w-sm mx-auto">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <XCircle size={24} />
            </button>
            <h3 className="text-3xl font-bold text-green-400 mb-4">Order Placed!</h3>
            <p className="text-slate-300">Your order has been successfully processed.</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white">Checkout</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Steps Indicator */}
            <div className="max-w-xl mx-auto flex justify-center items-center relative after:absolute after:top-1/2 after:left-0 after:right-0 after:-translate-y-1/2 after:h-0.5 after:bg-slate-700 after:z-0 px-4 sm:px-0 gap-8">
              {steps.map((s) => {
                const isActive = step >= s.id;
                const isCompleted = step > s.id;
                return (
                  <div key={s.id} className="relative z-10 flex flex-col items-center">
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${isCompleted ? 'bg-indigo-500' : isActive ? 'bg-slate-200 text-slate-900' : 'bg-slate-800 text-slate-500'}`}>
                      <s.icon size={20} />
                    </div>
                    <span className={`mt-2 text-center text-sm font-medium transition-colors duration-300 ${isActive ? 'text-indigo-400 font-semibold' : 'text-slate-500'}`}>
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Step Content Containers */}
            {step === 1 && (
              <div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Order Details</h2>
                <div className="flex items-center space-x-6 border-b border-slate-700 pb-6 mb-6">
                  <img src={initialProduct.image} alt={initialProduct.name} className="w-24 h-24 object-cover rounded-xl" />
                  <div className="flex-1">
                    <h3 className="text-xl font-medium">{initialProduct.name}</h3>
                    <p className="text-slate-400">Size: {initialProduct.size}</p>
                    <p className="text-indigo-400 text-lg font-bold mt-1">${initialProduct.price}</p>
                  </div>
                </div>
                <div className="text-right text-lg font-semibold">
                  <span className="text-slate-400">Total:</span> ${initialProduct.price}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
                <form className="space-y-6">
                  <input type="text" placeholder="Full Name" value={shippingDetails.name} onChange={(e) => setShippingDetails({ ...shippingDetails, name: e.target.value })} className="w-full bg-slate-700 text-white rounded-xl p-4 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                  <input type="text" placeholder="Street Address" value={shippingDetails.address} onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })} className="w-full bg-slate-700 text-white rounded-xl p-4 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="City" value={shippingDetails.city} onChange={(e) => setShippingDetails({ ...shippingDetails, city: e.target.value })} className="w-full bg-slate-700 text-white rounded-xl p-4 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                    <input type="text" placeholder="Postal Code" value={shippingDetails.postalCode} onChange={(e) => setShippingDetails({ ...shippingDetails, postalCode: e.target.value })} className="w-full bg-slate-700 text-white rounded-xl p-4 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                  </div>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
                <form className="space-y-6">
                  <input type="text" placeholder="Card Number" value={paymentDetails.cardNumber} onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })} className="w-full bg-slate-700 text-white rounded-xl p-4 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" value={paymentDetails.expiry} onChange={(e) => setPaymentDetails({ ...paymentDetails, expiry: e.target.value })} className="w-full bg-slate-700 text-white rounded-xl p-4 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                    <input type="text" placeholder="CVV" value={paymentDetails.cvv} onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })} className="w-full bg-slate-700 text-white rounded-xl p-4 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                  </div>
                </form>
              </div>
            )}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button onClick={prevStep} className="px-6 py-3 bg-slate-700 text-slate-300 font-semibold rounded-full hover:bg-slate-600 transition-colors duration-300">
                  Back
                </button>
              )}
              {step < 3 ? (
                <button onClick={nextStep} className="ml-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-500 transition-colors duration-300">
                  Next
                </button>
              ) : (
                <button onClick={handlePlaceOrder} className="ml-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-500 transition-colors duration-300">
                  Place Order
                </button>
              )}
            </div>
          </div>

          {/* Sidebar - Order Summary */}
          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg h-fit lg:sticky lg:top-8">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-slate-300">
                <span>{initialProduct.name}</span>
                <span>${initialProduct.price}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Tax (estimated)</span>
                <span>$0.00</span>
              </div>
              <div className="border-t border-slate-700 my-4"></div>
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total</span>
                <span className="text-indigo-400">${initialProduct.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CheckoutPage;
