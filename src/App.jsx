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
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950 -z-50"></div>

      {/* Supermarket Aisle Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-45 opacity-20 mix-blend-overlay pointer-events-none grayscale"
        style={{ backgroundImage: "url('/image_f33ae0.jpg')" }}
      ></div>
      
      {/* Global Noise Texture */}
      <div className="fixed inset-0 bg-noise-light opacity-[0.05] pointer-events-none mix-blend-overlay -z-40"></div>
      
      {/* Premium Aurora Background */}
      <div className="fixed inset-0 -z-30 pointer-events-none overflow-hidden">
          {/* Base Atmospheric Glow */}
          <div className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-primary-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
          
          {/* Moving Aurora Borealis Effect */}
          <div 
            className="absolute -inset-[100%] w-[300%] h-[300%] opacity-30 blur-[100px] animate-aurora"
            style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(74, 222, 128, 0.1), transparent 50%), radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.15), transparent 50%), radial-gradient(circle at 100% 0%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 100% 100%, rgba(74, 222, 128, 0.1), transparent 50%), radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.15), transparent 50%)',
                backgroundSize: '150% 150%'
            }}
          ></div>

          {/* Additional Color Accents */}
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s' }}></div>
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
