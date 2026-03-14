import React, { useEffect } from "react";
import StaticPageLayout from "../../components/StaticPageLayout";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sobre Nos - Superlistas";
  }, []);

  return (
    <StaticPageLayout
      title="Sobre Nos"
      subtitle="A MFATECH cria produtos digitais focados em simplicidade, economia e organizacao para o dia a dia."
    >
      <section>
        <h2 className="text-2xl font-semibold text-white mb-3">Nossa missao</h2>
        <p>
          Ajudar pessoas a comprarem melhor com decisao baseada em dados, economia consistente e uma experiencia
          intuitiva.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-3">Nossa visao</h2>
        <p>
          Tornar o Superlistas a referencia em planejamento inteligente de compras para familias e consumidores em todo
          o Brasil.
        </p>
      </section>
    </StaticPageLayout>
  );
};

export default AboutPage;
