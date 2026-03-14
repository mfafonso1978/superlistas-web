import React, { useEffect } from "react";
import StaticPageLayout from "../../components/StaticPageLayout";

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Carreiras - Superlistas";
  }, []);

  return (
    <StaticPageLayout
      title="Carreiras"
      subtitle="Estamos construindo a proxima geracao de ferramentas para compras inteligentes."
    >
      <section>
        <h2 className="text-2xl font-semibold text-white mb-3">Vagas atuais</h2>
        <p>No momento, nao ha vagas publicas abertas.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-3">Banco de talentos</h2>
        <p>
          Quer trabalhar com a gente? Envie seu perfil e area de interesse para
          <a href="mailto:superlistas.app@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors ml-1">
            superlistas.app@gmail.com
          </a>
          .
        </p>
      </section>
    </StaticPageLayout>
  );
};

export default CareersPage;
