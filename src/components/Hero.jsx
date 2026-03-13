import { motion } from 'framer-motion';
import { Download, ChevronRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40 min-h-screen flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-400 text-sm font-medium mb-8 backdrop-blur-md shadow-lg shadow-black/20">
                <Star className="w-4 h-4 mr-2 fill-current" />
                <span className="tracking-wide">Amado por milhares de usuários</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Sua gestão de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-green-300">compras premium.</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Organize listas, compare preços e economize tempo com a inteligência artificial do Superlistas. O app definitivo para suas compras.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-2xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg shadow-lg shadow-primary-900/20 transition-all flex items-center group w-full sm:w-auto justify-center"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Baixar Agora
                </motion.button>
                
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-lg backdrop-blur-md border border-white/10 transition-all flex items-center group w-full sm:w-auto justify-center"
                >
                  Ver recursos
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500 font-medium">
                 <div className="flex items-center">
                    <div className="flex -space-x-2 mr-3">
                       {[1,2,3,4].map(i => (
                         <div key={i} className={`w-8 h-8 rounded-full border-2 border-black bg-gray-800`}></div>
                       ))}
                    </div>
                    <span>+10k downloads</span>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* 3D Phone Mockup */}
          <div className="lg:col-span-6 relative perspective-1000">
             <motion.div 
               initial={{ opacity: 0, rotateY: -10, rotateX: 5 }}
               animate={{ opacity: 1, rotateY: -10, rotateX: 5, y: [0, -20, 0] }}
               transition={{ 
                 opacity: { duration: 0.8, delay: 0.2 },
                 y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
               }}
               className="relative mx-auto w-[300px] sm:w-[350px]"
               style={{ transformStyle: 'preserve-3d' }}
             >
                {/* Floating Elements Behind */}
                <motion.div 
                  animate={{ y: [0, 30, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-20 -left-20 w-24 h-24 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 z-0 flex items-center justify-center shadow-2xl"
                >
                   <div className="text-3xl">🛒</div>
                </motion.div>

                <motion.div 
                   animate={{ y: [0, -40, 0], rotate: [0, -5, 0] }}
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                   className="absolute bottom-40 -right-16 w-20 h-20 rounded-full bg-primary-500/10 backdrop-blur-xl border border-primary-500/20 z-20 flex items-center justify-center shadow-2xl"
                >
                   <div className="text-primary-400 font-bold text-xl">-30%</div>
                </motion.div>

                {/* Main Phone Frame */}
                <div className="relative rounded-[3rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[9/19]">
                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-20"></div>
                   
                   {/* Screen Content Placeholder */}
                   <img 
                      src="/image_f33b17.jpg" 
                      alt="App Interface" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                   />
                   <div className="absolute inset-0 bg-gray-800 flex items-center justify-center hidden">
                      <span className="text-gray-500 font-mono text-sm">App Screenshot</span>
                   </div>

                   {/* Glass Reflection */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-30 mix-blend-overlay"></div>
                </div>
                
                {/* Shadow */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/50 blur-3xl rounded-full"></div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
