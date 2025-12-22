import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://web.whatsapp.com/send?phone=3452001680&text=Hello!%20I%27m%20testing%20the%20Social%20Chat%20plugin%20https%3A%2F%2Fquadlayers.com%2Flanding%2Fwhatsapp-chat%2F%3Futm_source%3Dqlwapp_admin"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 
                 bg-green-500 text-white 
                 px-3 py-1.5 sm:px-4 sm:py-2 
                 rounded-full shadow-lg 
                 hover:bg-green-600 transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-[18px] sm:text-[22px]" /> {/* responsive icon size */}
      <span className="font-normal text-[14px] sm:text-[18px]">How can I help you?</span> {/* responsive text size */}
    </a>
  );
}
