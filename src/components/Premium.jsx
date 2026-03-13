import { motion } from 'framer-motion';
import { Crown, Cloud, PieChart, ShieldCheck, Zap } from 'lucide-react';

const Premium = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* 
          Note: Global background from App.jsx handles the noise and gradients.
          This section just needs to fit in seamlessly.
      */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
             <motion.div 
               initial={{ opacity: 0, rotateY: 20 }}
               whileInView={{ opacity: 1, rotateY: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative w-full max-w-[300px] sm:max-w-[340px] perspective-1000"
             >
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/20 rounded-full blur-[80px] -z-10 animate-pulse-slow"></div>

                {/* Dark Mode Phone Frame */}
                <div className="relative rounded-[3rem] border-[8px] border-gray-800 bg-gray-900 shadow-2xl overflow-hidden aspect-[9/19]">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-gray-800 rounded-b-lg z-20"></div>
                   
                   {/* Dark UI Content */}
                   <div className="absolute inset-0 bg-gray-900 p-6 flex flex-col">
                      <div className="mt-8 flex items-center justify-between mb-8">
                         <div className="w-8 h-8 rounded-full bg-gray-800"></div>
                         <div className="w-24 h-4 rounded-full bg-gray-800"></div>
                         <div className="w-8 h-8 rounded-full bg-gray-800"></div>
                      </div>
                      
                      {/* Charts Mockup */}
                      <div className="w-32 h-32 rounded-full border-[12px] border-primary-500/20 border-t-primary-500 mx-auto mb-8 relative flex items-center justify-center">
                         <span className="text-2xl font-bold text-white">75%</span>
                      </div>
                      
                      <div className="space-y-4">
                         {[1,2,3].map(i => (
                            <div key={i} className="h-12 w-full rounded-xl bg-gray-800/50 flex items-center px-4 gap-3">
                               <div className="w-8 h-8 rounded-lg bg-gray-700/50"></div>
                               <div className="flex-1 h-2 rounded bg-gray-700/50"></div>
                            </div>
                         ))}
                      </div>

                      {/* Premium Badge on Screen */}
                      <div className="mt-auto bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 p-4 rounded-xl">
                         <div className="flex items-center gap-3">
                            <Crown className="w-5 h-5 text-yellow-500" />
                            <span className="text-yellow-500 font-bold text-sm">Conta Premium Ativa</span>
                         </div>
                      </div>
                   </div>

                   {/* Screen Gloss */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-30 mix-blend-overlay"></div>
                </div>
             </motion.div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-wider mb-6">
                  <Zap className="w-3 h-3 mr-2" />
                  Upgrade Disponível
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Desbloqueie o poder <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ilimitado.</span>
                </h2>
                
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                   Para quem leva a gestão doméstica a sério. Sincronização em nuvem, relatórios avançados e acesso prioritário a novos recursos.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { icon: Cloud, title: "Backup na Nuvem", desc: "Seus dados seguros e acessíveis em qualquer dispositivo." },
                      { icon: PieChart, title: "Relatórios Avançados", desc: "Análise profunda dos seus gastos mensais por categoria." },
                      { icon: ShieldCheck, title: "Sem Anúncios", desc: "Experiência limpa e focada no que importa." },
                      { icon: Crown, title: "Suporte VIP", desc: "Atendimento prioritário sempre que precisar." }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                         <item.icon className="w-8 h-8 text-yellow-500 mb-4" />
                         <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                         <p className="text-sm text-gray-400">{item.desc}</p>
                      </motion.div>
                    ))}
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;
