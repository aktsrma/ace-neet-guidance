
declare global {
  interface Window {
    Razorpay: any;
  }
}

export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = resolve;
    document.body.appendChild(script);
  });
};

export const initializePayment = async (amount: number, plan: string) => {
  await loadRazorpayScript();
  
  const options = {
    key: "rzp_test_dY8eDXCADHwgZj", // Replace with your actual publishable key
    amount: amount * 100, // Amount in smallest currency unit (paise)
    name: "NEET Mentorship",
    description: `${plan} Plan`,
    image: "/logo.svg",
    handler: function (response: any) {
      console.log("Payment successful", response);
      // Here you would typically verify the payment on your backend
    },
    prefill: {
      name: "",
      email: "",
      contact: ""
    },
    theme: {
      color: "#0BD9D3"
    }
  };

  const razorpayInstance = new window.Razorpay(options);
  razorpayInstance.open();
};
