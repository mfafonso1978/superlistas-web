import React, { useEffect } from "react";
import StaticPageLayout from "../../components/StaticPageLayout";

const testimonials = [
  {
    name: "Marina S.",
    text: "Passei a fechar minhas compras com mais previsibilidade e sem estourar o orcamento do mes.",
  },
  {
    name: "Carlos A.",
    text: "O comparativo de precos virou item obrigatorio antes de ir ao mercado.",
  },
  {
    name: "Fernanda R.",
    text: "As listas inteligentes economizam tempo e evitam esquecimento de itens essenciais.",
  },
];

const TestimonialsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Depoimentos - Superlistas";
  }, []);

  return (
    <StaticPageLayout
      title="Depoimentos"
      subtitle="Historias reais de usuarios que transformaram a rotina de compras com o Superlistas."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="leading-relaxed mb-4">{item.text}</p>
            <p className="text-primary-400 font-semibold">{item.name}</p>
          </article>
        ))}
      </div>
    </StaticPageLayout>
  );
};

export default TestimonialsPage;
