import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Truck, CreditCard, XCircle, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Dummy product data to use if no product is passed via navigation
const dummyProduct = {
  name: "Modern Laptop",
  price: "1299.99",
  size: "13-inch",
  image: "https://placehold.co/150x150/22d3ee/ffffff?text=Product",
};


function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
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
  const [promoCode, setPromoCode] = useState("");
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
    <div className="min-h-screen bg-background p-8 font-circular">
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background p-8 rounded-2xl shadow-xl border-2 border-green-600 text-center relative max-w-sm mx-auto">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <XCircle size={24} />
            </button>
            <h3 className="text-3xl font-bold text-green-600 mb-4">Order Placed!</h3>
            <p className="text-muted-foreground">Your order has been successfully processed.</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Checkout</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Steps Indicator */}
            <div className="max-w-xl mx-auto flex justify-center items-center relative px-4 sm:px-0 gap-8">
              {steps.map((s) => {
                const isActive = step >= s.id;
                const isCompleted = step > s.id;
                return (
                  <div key={s.id} className="relative z-10 flex flex-col items-center">
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${isCompleted ? 'bg-primary text-primary-foreground' : isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      <s.icon size={20} />
                    </div>
                    <span className={`mt-2 text-center text-sm font-medium transition-colors duration-300 ${isActive ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Step Content Containers */}
            {step === 1 && (
              <>
                <button 
                  onClick={() => navigate('/products')} 
                  className="flex items-center text-primary hover:underline font-circular mb-4 transition-colors"
                >
                  <ArrowLeft className="mr-2" size={18} />
                  Continue Shopping
                </button>
                <div className="bg-card p-8 rounded-2xl shadow-lg border">
                  <h2 className="text-2xl font-semibold mb-6 text-foreground">Order Details</h2>
                <div className="flex items-center space-x-6 border-b border-border pb-6 mb-6">
                  <img src={initialProduct.image} alt={initialProduct.name} className="w-24 h-24 object-cover rounded-xl" />
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-foreground">{initialProduct.name}</h3>
                    <p className="text-muted-foreground">Size: {initialProduct.size}</p>
                    <p className="text-primary text-lg font-bold mt-1">${initialProduct.price}</p>
                  </div>
                </div>
                <div className="text-right text-lg font-semibold">
                  <span className="text-muted-foreground">Total:</span> <span className="text-foreground">${initialProduct.price}</span>
                </div>
              </div>
              </>
            )}

            {step === 2 && (
              <>
                <button 
                  onClick={prevStep} 
                  className="flex items-center text-primary hover:underline font-circular mb-4 transition-colors"
                >
                  <ArrowLeft className="mr-2" size={18} />
                  Back
                </button>
                <div className="bg-card p-8 rounded-2xl shadow-lg border">
                  <h2 className="text-2xl font-semibold mb-6 text-foreground">Shipping Information</h2>
                <form className="space-y-6">
                  <Input type="text" placeholder="Full Name" value={shippingDetails.name} onChange={(e) => setShippingDetails({ ...shippingDetails, name: e.target.value })} className="w-full font-circular" />
                  <Input type="text" placeholder="Street Address" value={shippingDetails.address} onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })} className="w-full font-circular" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input type="text" placeholder="City" value={shippingDetails.city} onChange={(e) => setShippingDetails({ ...shippingDetails, city: e.target.value })} className="w-full font-circular" />
                    <Input type="text" placeholder="Postal Code" value={shippingDetails.postalCode} onChange={(e) => setShippingDetails({ ...shippingDetails, postalCode: e.target.value })} className="w-full font-circular" />
                  </div>
                </form>
              </div>
              </>
            )}

            {step === 3 && (
              <>
                <button 
                  onClick={prevStep} 
                  className="flex items-center text-primary hover:underline font-circular mb-4 transition-colors"
                >
                  <ArrowLeft className="mr-2" size={18} />
                  Back
                </button>
                <div className="bg-card p-8 rounded-2xl shadow-lg border">
                  <h2 className="text-2xl font-semibold mb-6 text-foreground">Payment Details</h2>
                <form className="space-y-6">
                  <Input type="text" placeholder="Card Number" value={paymentDetails.cardNumber} onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })} className="w-full font-circular" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="text" placeholder="MM/YY" value={paymentDetails.expiry} onChange={(e) => setPaymentDetails({ ...paymentDetails, expiry: e.target.value })} className="w-full font-circular" />
                    <Input type="text" placeholder="CVV" value={paymentDetails.cvv} onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })} className="w-full font-circular" />
                  </div>
                </form>
              </div>
              </>
            )}
          </div>

          {/* Sidebar - Order Summary */}
          <div className="bg-card p-8 rounded-2xl shadow-lg border h-fit lg:sticky lg:top-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-foreground font-circular">
                <span>{initialProduct.name}</span>
                <span>${initialProduct.price}</span>
              </div>
              <div className="flex justify-between items-center text-foreground font-circular">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between items-center text-foreground font-circular">
                <span>Tax (estimated)</span>
                <span>$0.00</span>
              </div>
              <div className="border-t border-border my-4"></div>
              <div className="flex justify-between items-center text-xl font-bold font-circular">
                <span>Total</span>
                <span className="text-primary">${initialProduct.price}</span>
              </div>
            </div>
            
            {/* Promo Code Input */}
            <div className="mt-6 space-y-2">
              <label className="text-sm font-medium text-foreground font-circular">Promo Code</label>
              <Input 
                type="text" 
                placeholder="Enter promo code" 
                value={promoCode} 
                onChange={(e) => setPromoCode(e.target.value)} 
                className="w-full font-circular"
              />
            </div>
            
            {/* Next/Place Order Button */}
            <div className="mt-6">
              {step < 3 ? (
                <Button onClick={nextStep} variant="luxury" size="lg" className="w-full font-circular">
                  Next
                </Button>
              ) : (
                <Button onClick={handlePlaceOrder} className="w-full bg-green-600 hover:bg-green-700 text-white font-circular" size="lg">
                  Place Order
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CheckoutPage;
