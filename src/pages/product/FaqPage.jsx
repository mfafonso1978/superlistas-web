import React, { useEffect } from "react";
import StaticPageLayout from "../../components/StaticPageLayout";

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "FAQ - Superlistas";
  }, []);

  return (
    <StaticPageLayout
      title="FAQ"
      subtitle="Perguntas frequentes sobre uso, sincronizacao e plano Premium."
    >
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">O app funciona offline?</h2>
        <p>Sim. Voce pode montar e editar listas sem internet. Quando conectar, a sincronizacao e feita automaticamente.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Posso usar em mais de um dispositivo?</h2>
        <p>Sim. A conta sincroniza seus dados entre dispositivos para manter tudo atualizado em tempo real.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Como cancelar o Premium?</h2>
        <p>O cancelamento pode ser feito pela loja de aplicativos onde a assinatura foi contratada.</p>
      </section>
    </StaticPageLayout>
  );
};

export default FaqPage;
