import { motion } from 'framer-motion';
import { ListChecks, Archive, CheckCircle2 } from 'lucide-react';

const SmartLists = () => {
  return (
    <section className="py-32 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[280px] sm:max-w-[320px]"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-gray-900 bg-gray-900 aspect-[9/19]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-gray-900 rounded-b-lg z-20"></div>
                <img 
                   src="/image_f34261.jpg" 
                   alt="Listas Ativas" 
                   className="absolute inset-0 w-full h-full object-cover z-10 opacity-90" 
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'flex';
                   }}
                />
                 <div className="absolute inset-0 bg-gray-800 flex items-center justify-center hidden">
                   <span className="text-gray-500 font-mono text-sm">App Screenshot</span>
                 </div>

                 {/* Reflection */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-20 mix-blend-overlay"></div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-1/3 -left-12 sm:-left-16 bg-gray-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[200px]"
              >
                <div className="bg-green-500/20 p-2 rounded-full text-green-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Status</p>
                  <p className="text-white font-bold">Sincronizado</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
               <h2 className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">Listas Inteligentes</h2>
               <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                 Nunca mais esqueça o <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-green-300">leite (ou o café).</span>
               </h3>
               
               <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                 O Superlistas aprende com você. Itens frequentes são sugeridos automaticamente, e suas listas antigas ficam salvas para reuso imediato.
               </p>

               <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-500/10 group-hover:border-primary-500/20 transition-all duration-300">
                      <ListChecks className="w-7 h-7 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Sugestões Preditivas</h4>
                      <p className="text-gray-400 leading-relaxed">
                        Nossa IA analisa seu histórico e sugere itens que você provavelmente precisa comprar esta semana.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
                      <Archive className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Histórico Completo</h4>
                      <p className="text-gray-400 leading-relaxed">
                        Recupere listas antigas em segundos. O app aprende seus hábitos de compra.
                      </p>
                    </div>
                  </div>
                </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SmartLists;
