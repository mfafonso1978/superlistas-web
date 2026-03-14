import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import StaticPageLayout from "../../components/StaticPageLayout";

const ResourcesPage = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Recursos - Superlistas";
  }, []);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return;
    }

    const sectionId = location.hash.replace("#", "");
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <StaticPageLayout
      title="Recursos"
      subtitle="Conheca em detalhe os recursos que tornam suas compras mais inteligentes, economicas e organizadas."
    >
      <section id="comparativo-precos">
        <h2 className="text-2xl font-semibold text-white mb-3">Comparativo de Precos</h2>
        <p>
          Compare valores entre mercados e descubra rapidamente onde cada lista sai mais barata. O Superlistas
          sugere combinacoes de compra para reduzir o total no caixa.
        </p>
      </section>

      <section id="analise-financeira">
        <h2 className="text-2xl font-semibold text-white mb-3">Analise Financeira</h2>
        <p>
          Acompanhe relatorios por categoria, periodo e loja para entender seus habitos de consumo e identificar
          oportunidades reais de economia.
        </p>
      </section>

      <section id="organizacao-inteligente">
        <h2 className="text-2xl font-semibold text-white mb-3">Organizacao Inteligente</h2>
        <p>
          Organize itens por setores e fluxo da loja para ganhar velocidade na compra. Menos voltas, menos
          esquecimentos e mais eficiencia.
        </p>
      </section>

      <section id="previsao-gastos">
        <h2 className="text-2xl font-semibold text-white mb-3">Previsao de Gastos</h2>
        <p>
          Estime o valor final da compra antes de sair de casa com base no historico de precos e nas quantidades da
          sua lista.
        </p>
      </section>
    </StaticPageLayout>
  );
};

export default ResourcesPage;
