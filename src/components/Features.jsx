import { motion } from "framer-motion";
import {
  ShoppingCart,
  BarChart2,
  Layers,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Comparativo de Preços",
    slug: "comparativo-precos",
    description:
      "Nossa IA analisa itens e indica onde comprar para economizar até 30%.",
    icon: ShoppingCart,
    image: "image_f33b17.jpg",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    colSpan: "lg:col-span-6",
    stats: "Economia de R$ 150/mês",
  },
  {
    title: "Análise Financeira",
    slug: "analise-financeira",
    description: "Gráficos detalhados e categorias automáticas.",
    icon: BarChart2,
    image: "image_f34221.jpg",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
    colSpan: "lg:col-span-6",
    stats: "Controle total",
  },
  {
    title: "Organização Inteligente",
    slug: "organizacao-inteligente",
    description: "Itens ordenados pela disposição da loja.",
    icon: Layers,
    image: "image_f33ae0.jpg",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    colSpan: "lg:col-span-6",
    stats: "+ Produtividade",
  },
  {
    title: "Previsão de Gastos",
    slug: "previsao-gastos",
    description: "Saiba quanto vai pagar antes do caixa.",
    icon: TrendingDown,
    image: "image_f34261.jpg",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    colSpan: "lg:col-span-6",
    stats: "Precisão de 95%",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">
            Recursos Poderosos
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Tudo o que você precisa para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-green-300">
              comprar melhor
            </span>
            .
          </h3>
          <p className="text-xl text-gray-400">
            Design intuitivo combinado com algoritmos poderosos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${feature.colSpan} group relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm`}
            >
              <div className="p-8 lg:p-10 h-full flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${feature.color}`}
                    >
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-400">
                      {feature.stats}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/recursos#${feature.slug}`}
                      className="text-primary-400 font-medium flex items-center group-hover:translate-x-1 transition-transform"
                    >
                      Saiba mais <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>

                {/* Phone Mockup Container */}
                <div className="flex-1 flex justify-center items-center w-full max-w-[240px] md:max-w-[200px] lg:max-w-[220px]">
                  <div className="relative w-full aspect-[9/19] bg-gray-900 rounded-[2rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-gray-900 rounded-b-lg z-20"></div>
                    <img
                      src={`/${feature.image}`}
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover z-10 opacity-90"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center hidden">
                      <span className="text-xs text-gray-500 font-mono p-2 text-center">
                        Imagem não encontrada
                      </span>
                    </div>

                    {/* Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-20 mix-blend-overlay"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
