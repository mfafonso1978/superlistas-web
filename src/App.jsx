import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicyPage from "./pages/legal/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/legal/TermsOfUsePage";
import ResourcesPage from "./pages/product/ResourcesPage";
import PremiumPage from "./pages/product/PremiumPage";
import TestimonialsPage from "./pages/product/TestimonialsPage";
import FaqPage from "./pages/product/FaqPage";
import AboutPage from "./pages/company/AboutPage";

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-white bg-black min-h-screen selection:bg-primary-500 selection:text-white relative overflow-x-hidden">
        {/* Global Background Elements */}
        <div className="fixed inset-0 bg-slate-950 -z-50"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))] -z-45"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(56,189,248,0.15),rgba(255,255,255,0))] -z-45"></div>

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
              background:
                "radial-gradient(circle at 50% 50%, rgba(74, 222, 128, 0.1), transparent 50%), radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.1), transparent 50%)",
              backgroundSize: "100% 100%",
            }}
          ></div>

          {/* Additional Color Accents - Static for Performance */}
          <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[80px]"></div>
        </div>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recursos" element={<ResourcesPage />} />
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/depoimentos" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/politica-privacidade" element={<PrivacyPolicyPage />} />
          <Route path="/termos-uso" element={<TermsOfUsePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
