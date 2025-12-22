import ChatbotWidget from "./components/ChatbotWidget"

import ScrollToTopButton from "./components/ScrollToTopButton"
import WhatsAppWidget from "./components/WhatsAppWidget"
import Router from "./config/Router"

function App() {

  return (
   
    <div className="min-h-screen bg-background overflow-x-hidden">
      <WhatsAppWidget/>
      <ChatbotWidget/>
      <ScrollToTopButton/>
      <Router />
    </div>
   
  )
}

export default App
