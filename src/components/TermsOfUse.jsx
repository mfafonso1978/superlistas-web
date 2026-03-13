import React, { useEffect } from 'react';

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Termos de Uso - Superlistas";
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/5 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 break-words">Termos de Uso</h1>
        <p className="text-primary-400 text-lg font-medium mb-8">Aplicativo Superlistas</p>
        
        <div className="space-y-8 text-slate-300">
          <div className="p-4 bg-white/5 rounded-lg border border-white/5">
            <p className="text-sm text-slate-400">Desenvolvedor: <span className="text-white font-medium">MFATECH</span></p>
            <p className="text-sm text-slate-400">Última atualização: <span className="text-white font-medium">12 de Março de 2026</span></p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">1</span>
              Aceitação dos Termos
            </h2>
            <p>
              Ao baixar, instalar ou utilizar o aplicativo Superlistas, você concorda em cumprir estes Termos de Uso. Se você não concordar com algum destes termos, não utilize o aplicativo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">2</span>
              Uso do Serviço
            </h2>
            <ul className="list-disc pl-5 space-y-3 marker:text-primary-500">
              <li>
                <strong className="text-white">Licença Limitada:</strong> Concedemos a você uma licença limitada, não exclusiva e intransferível para usar o aplicativo para fins pessoais e não comerciais.
              </li>
              <li>
                <strong className="text-white">Conta de Usuário:</strong> Para acessar recursos de sincronização, você precisa criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais.
              </li>
              <li>
                <strong className="text-white">Conduta Proibida:</strong> É proibido usar o aplicativo para fins ilegais, tentar violar a segurança do sistema ou interferir no funcionamento do serviço.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">3</span>
              Assinaturas e Pagamentos
            </h2>
            <ul className="list-disc pl-5 space-y-3 marker:text-primary-500">
              <li>
                <strong className="text-white">Plano Premium:</strong> Oferecemos recursos adicionais mediante assinatura. Os pagamentos são processados pela Google Play Store.
              </li>
              <li>
                <strong className="text-white">Renovação Automática:</strong> As assinaturas são renovadas automaticamente, a menos que sejam canceladas pelo menos 24 horas antes do fim do período atual.
              </li>
              <li>
                <strong className="text-white">Cancelamento:</strong> Você pode gerenciar e cancelar suas assinaturas nas configurações da sua conta da Google Play Store.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">4</span>
              Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo, design, gráficos, código e outros materiais relacionados ao Superlistas são propriedade da MFATECH e estão protegidos por leis de direitos autorais e propriedade intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">5</span>
              Isenção de Garantias e Limitação de Responsabilidade
            </h2>
            <p className="mb-3">
              O aplicativo é fornecido "como está", sem garantias de qualquer tipo. A MFATECH não se responsabiliza por:
            </p>
            <ul className="list-disc pl-5 space-y-3 marker:text-primary-500">
              <li>Erros ou imprecisões no conteúdo.</li>
              <li>Perda de dados decorrente do uso do aplicativo.</li>
              <li>Interrupções ou falhas no serviço.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">6</span>
              Alterações nos Termos
            </h2>
            <p>
              Podemos atualizar estes Termos de Uso periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações. O uso contínuo do aplicativo após as alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">7</span>
              Contato
            </h2>
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail: <a href="mailto:superlistas.app@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">superlistas.app@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
