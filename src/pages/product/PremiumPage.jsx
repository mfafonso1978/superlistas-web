import React, { useEffect } from "react";
import StaticPageLayout from "../../components/StaticPageLayout";

const PremiumPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Premium - Superlistas";
  }, []);

  return (
    <StaticPageLayout
      title="Plano Premium"
      subtitle="Para quem quer controle total das compras com automacao, seguranca e desempenho avancado."
    >
      <section>
        <h2 className="text-2xl font-semibold text-white mb-3">O que voce desbloqueia</h2>
        <ul className="list-disc pl-5 space-y-2 marker:text-primary-500">
          <li>Backup em nuvem com sincronizacao em tempo real.</li>
          <li>Relatorios avancados por periodo, loja e categoria.</li>
          <li>Experiencia sem anuncios para foco total.</li>
          <li>Suporte prioritario para clientes Premium.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-3">Para quem e ideal</h2>
        <p>
          Familias, casais e usuarios que fazem compras frequentes e querem previsibilidade de gastos, historico
          detalhado e produtividade no dia a dia.
        </p>
      </section>
    </StaticPageLayout>
  );
};

export default PremiumPage;
