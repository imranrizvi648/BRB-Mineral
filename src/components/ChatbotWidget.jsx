import React, { useState } from "react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer overflow-hidden fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 w-12 h-12 sm:w-15 sm:h-15 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center bg-white"
      >
        <img
          src="/chatbot.gif"
          alt="Chatbot"
          className="w-10 h-10 sm:w-11 sm:h-11 md:h-12 md:w-12 object-contain"
        />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed z-50 bottom-14 sm:bottom-20 right-4 sm:right-5 lg:right-18  w-[90%] max-w-xs sm:w-80 h-[60%] sm:h-96 bg-[#EAEAEB] rounded-lg shadow-lg p-4 flex flex-col">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2  text-gray-500 hover:text-gray-800 font-bold text-xl"
          >
            &times;
          </button>

          {/* Modal Content */}
          <h2 className="text-lg sm:text-xl font-semibold mb-2"></h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
           
          </p>

          {/* Example Input */}
          <input
            type="text"
            
            className="w-full px-3 py-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#03A2A7]"
          />
        </div>
      )}
    </>
  );
}
