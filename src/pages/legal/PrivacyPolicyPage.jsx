import React, { useEffect } from "react";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Política de Privacidade - Superlistas";
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/5 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 break-words">
          Política de Privacidade
        </h1>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <p>Última atualização: 12 de Março de 2026</p>

          <p>
            A sua privacidade é importante para nós. Esta política de
            privacidade explica como o aplicativo Superlistas ("nós", "nosso"
            ou "aplicativo"), desenvolvido pela MFATECH, coleta, usa,
            compartilha e protege as informações dos usuários ("você").
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              1. Informações que Coletamos
            </h2>
            <p>
              Para fornecer nossos serviços, coletamos e processamos os
              seguintes tipos de dados:
            </p>
            <p>
              • Informações de Conta: Ao criar uma conta, coletamos seu
              endereço de e-mail para identificação, autenticação, recuperação
              de senha e sincronização de dados entre dispositivos. Se você
              optar, também pode adicionar uma foto de perfil.
            </p>
            <p>
              • Dados do Aplicativo: Coletamos os dados que você insere, como
              nomes de listas, produtos, preços, quantidades, categorias e
              lojas. Esses dados são armazenados localmente no seu dispositivo
              e na nuvem (Firebase) para backup e sincronização.
            </p>
            <p>
              • Mídia e Arquivos: Se você optar por adicionar fotos aos
              produtos ou ao seu perfil, o aplicativo solicitará acesso à
              câmera ou galeria do seu dispositivo. As imagens são armazenadas
              localmente e, para usuários logados, também na nuvem (Firebase
              Storage) para sincronização entre seus dispositivos.
            </p>
            <p>
              • Dados de Voz: Ao utilizar comandos de voz para adicionar itens,
              o áudio é capturado temporariamente para conversão em texto. O
              áudio bruto não é armazenado permanentemente nem compartilhado
              para outros fins.
            </p>
            <p>
              • Informações de Uso e Dispositivo: Coletamos dados técnicos sobre
              seu dispositivo (modelo, sistema operacional, identificadores
              únicos) e dados de log (relatórios de falhas, métricas de
              desempenho) para melhorar a estabilidade e usabilidade do app.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              2. Como Utilizamos seus Dados
            </h2>
            <p>Utilizamos as informações coletadas para:</p>
            <p>• Fornecer, manter e melhorar nossos serviços.</p>
            <p>
              • Sincronizar suas listas de compras e perfil em tempo real entre
              seus dispositivos.
            </p>
            <p>
              • Permitir a recuperação de acesso à sua conta através do e-mail
              cadastrado.
            </p>
            <p>• Processar transações e gerenciar sua assinatura Premium.</p>
            <p>
              • Enviar comunicações importantes sobre atualizações, segurança ou
              suporte.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              3. Permissões do Dispositivo
            </h2>
            <p>O aplicativo pode solicitar as seguintes permissões:</p>
            <p>
              • Câmera: Para tirar fotos de produtos para o catálogo ou para sua
              foto de perfil.
            </p>
            <p>
              • Microfone: Para capturar comandos de voz e converter fala em
              texto (Speech-to-Text) ao adicionar itens à lista.
            </p>
            <p>
              • Galeria/Armazenamento: Para selecionar fotos de produtos ou de
              perfil existentes.
            </p>
            <p>
              • Internet/Rede: Para sincronização de dados e backup na nuvem.
            </p>
            <p>
              • Notificações: Para lembretes e avisos importantes (opcional).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              4. Compartilhamento com Terceiros
            </h2>
            <p>
              Não vendemos suas informações pessoais. Compartilhamos dados
              apenas com provedores de serviço confiáveis que nos ajudam a
              operar o aplicativo:
            </p>
            <p>
              • Google Firebase: Para autenticação, banco de dados em nuvem,
              análise de uso e relatórios de falhas.
            </p>
            <p>
              • Lojas de Aplicativos: Google Play Store para processamento de
              pagamentos e assinaturas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              5. Segurança dos Dados
            </h2>
            <p>
              Adotamos medidas de segurança robustas para proteger seus dados
              contra acesso não autorizado. Seus dados na nuvem são protegidos
              pelas regras de segurança do Google Firebase e a comunicação é
              criptografada via protocolo HTTPS/TLS.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              6. Seus Direitos e Exclusão de Dados
            </h2>
            <p>Você tem total controle sobre seus dados:</p>
            <p>
              • Acesso e Correção: Você pode visualizar e editar seus dados
              diretamente no aplicativo.
            </p>
            <p>
              • Exclusão de Conta: Você pode solicitar a exclusão permanente da
              sua conta e de todos os dados associados diretamente pelo
              aplicativo (Configurações &gt; Dados e Backup) ou entrando em
              contato conosco.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              7. Privacidade de Crianças
            </h2>
            <p>
              Nossos serviços não são direcionados a menores de 13 anos. Não
              coletamos intencionalmente informações pessoais de crianças. Se
              tomarmos conhecimento de que coletamos dados de uma criança sem
              consentimento dos pais, tomaremos medidas para remover essas
              informações.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              8. Alterações nesta Política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente.
              Notificaremos você sobre quaisquer alterações significativas
              através do aplicativo ou por e-mail.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">9. Contato</h2>
            <p>
              Se você tiver dúvidas ou preocupações sobre esta Política de
              Privacidade ou sobre o tratamento de seus dados, entre em contato
              conosco:
            </p>
            <p>E-mail: superlistas.app@gmail.com</p>
            <p>Desenvolvedor: MFATECH</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
