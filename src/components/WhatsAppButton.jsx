import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '918528511107'; // Your WhatsApp number
  const message = encodeURIComponent(
    "Hi Mehak! I saw your portfolio and would like to discuss a project opportunity."
  );
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse-slow group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
      </div>
      
      {/* Tooltip - Hidden on mobile, shown on desktop */}
      <span className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;