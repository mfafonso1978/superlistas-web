import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import SmartLists from './components/SmartLists';
import Premium from './components/Premium';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-white bg-black min-h-screen selection:bg-primary-500 selection:text-white relative overflow-x-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black -z-50"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 -z-40"></div>

      {/* Supermarket Aisle Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-45 opacity-20 mix-blend-overlay pointer-events-none grayscale"
        style={{ backgroundImage: "url('/image_f33ae0.jpg')" }}
      ></div>
      
      {/* Global Noise Texture */}
      <div className="fixed inset-0 bg-noise-light opacity-[0.05] pointer-events-none mix-blend-overlay -z-40"></div>
      
      {/* Premium Aurora Background */}
      <div className="fixed inset-0 -z-30 pointer-events-none overflow-hidden">
          {/* Base Atmospheric Glow - Optimized */}
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary-900/10 rounded-full blur-[80px] mix-blend-screen opacity-50"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[80px] mix-blend-screen opacity-50"></div>
          
          {/* Moving Aurora Borealis Effect - Optimized */}
          <div 
            className="absolute -inset-[50%] w-[200%] h-[200%] opacity-20 blur-[60px] animate-aurora will-change-transform"
            style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(74, 222, 128, 0.1), transparent 50%), radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.1), transparent 50%)',
                backgroundSize: '100% 100%'
            }}
          ></div>

          {/* Additional Color Accents - Static for Performance */}
          <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[80px]"></div>
      </div>

      <Hero />
      <Features />
      <SmartLists />
      <Premium />
      <Footer />
    </div>
  );
}

export default App;
