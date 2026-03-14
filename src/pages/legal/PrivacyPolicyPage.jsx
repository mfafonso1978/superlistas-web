import React, { useEffect } from "react";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Política de Privacidade - Superlistas";
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/5 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 break-words">
          Política de Privacidade
        </h1>
        <p className="text-primary-400 text-lg font-medium mb-8">
          Aplicativo Superlistas
        </p>

        <div className="space-y-8 text-slate-300">
          <div className="p-4 bg-white/5 rounded-lg border border-white/5">
            <p className="text-sm text-slate-400">
              Desenvolvedor:{" "}
              <span className="text-white font-medium">MFATECH</span>
            </p>
            <p className="text-sm text-slate-400">
              Última atualização:{" "}
              <span className="text-white font-medium">
                12 de Março de 2026
              </span>
            </p>
          </div>

          <p className="leading-relaxed">
            A sua privacidade é importante para nós. Esta política de
            privacidade explica como o aplicativo Superlistas ("nós", "nosso" ou
            "aplicativo"), desenvolvido pela MFATECH, coleta, usa, compartilha e
            protege as informações dos usuários ("você").
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">
                1
              </span>
              Informações que Coletamos
            </h2>
            <p className="mb-3">
              Para fornecer nossos serviços, coletamos e processamos os
              seguintes tipos de dados:
            </p>
            <ul className="list-disc pl-5 space-y-3 marker:text-primary-500">
              <li>
                <strong className="text-white">Informações de Conta:</strong> Ao
                criar uma conta, coletamos seu endereço de e-mail para
                identificação, autenticação, recuperação de senha e
                sincronização de dados entre dispositivos. Se você optar, também
                pode adicionar uma foto de perfil.
              </li>
              <li>
                <strong className="text-white">Dados do Aplicativo:</strong>{" "}
                Coletamos os dados que você insere, como nomes de listas,
                produtos, preços, quantidades, categorias e lojas. Esses dados
                são armazenados localmente no seu dispositivo e na nuvem
                (Firebase) para backup e sincronização.
              </li>
              <li>
                <strong className="text-white">Mídia e Arquivos:</strong> Se
                você optar por adicionar fotos aos produtos ou ao seu perfil, o
                aplicativo solicitará acesso à câmera ou galeria do seu
                dispositivo. As imagens são armazenadas localmente e, para
                usuários logados, também na nuvem (Firebase Storage) para
                sincronização entre seus dispositivos.
              </li>
              <li>
                <strong className="text-white">Dados de Voz:</strong> Ao
                utilizar comandos de voz para adicionar itens, o áudio é
                capturado temporariamente para conversão em texto. O áudio bruto
                não é armazenado permanentemente nem compartilhado para outros
                fins.
              </li>
              <li>
                <strong className="text-white">
                  Informações de Uso e Dispositivo:
                </strong>{" "}
                Coletamos dados técnicos sobre seu dispositivo (modelo, sistema
                operacional, identificadores únicos) e dados de log (relatórios
                de falhas, métricas de desempenho) para melhorar a estabilidade
                e usabilidade do app.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">
                2
              </span>
              Como Utilizamos seus Dados
            </h2>
            <p className="mb-3">Utilizamos as informações coletadas para:</p>
            <ul className="list-disc pl-5 space-y-3 marker:text-primary-500">
              <li>Fornecer, manter e melhorar nossos serviços.</li>
              <li>
                Sincronizar suas listas de compras e perfil em tempo real entre
                seus dispositivos.
              </li>
              <li>
                Permitir a recuperação de acesso à sua conta através do e-mail
                cadastrado.
              </li>
              <li>Processar transações e gerenciar sua assinatura Premium.</li>
              <li>
                Enviar comunicações importantes sobre atualizações, segurança ou
                suporte.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">
                3
              </span>
              Permissões do Dispositivo
            </h2>
            <p className="mb-3">
              O aplicativo pode solicitar as seguintes permissões:
            </p>
            <ul className="list-disc pl-5 space-y-3 marker:text-primary-500">
              <li>
                <strong className="text-white">Câmera:</strong> Para tirar fotos
                de produtos para o catálogo ou para sua foto de perfil.
              </li>
              <li>
                <strong className="text-white">Microfone:</strong> Para capturar
                comandos de voz e converter fala em texto (Speech-to-Text) ao
                adicionar itens à lista.
              </li>
              <li>
                <strong className="text-white">Galeria/Armazenamento:</strong>{" "}
                Para selecionar fotos de produtos ou de perfil existentes.
              </li>
              <li>
                <strong className="text-white">Internet/Rede:</strong> Para
                sincronização de dados e backup na nuvem.
              </li>
              <li>
                <strong className="text-white">Notificações:</strong> Para
                lembretes e avisos importantes (opcional).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">
                4
              </span>
              Compartilhamento com Terceiros
            </h2>
            <p className="mb-3">
              Não vendemos suas informações pessoais. Compartilhamos dados
              apenas com provedores de serviço confiáveis que nos ajudam a
              operar o aplicativo:
            </p>
            <ul className="list-disc pl-5 space-y-3 marker:text-primary-500">
              <li>
                <strong className="text-white">Google Firebase:</strong> Para
                autenticação, banco de dados em nuvem, análise de uso e
                relatórios de falhas.
              </li>
              <li>
                <strong className="text-white">Lojas de Aplicativos:</strong>{" "}
                Google Play Store para processamento de pagamentos e
                assinaturas.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">
                5
              </span>
              Segurança dos Dados
            </h2>
            <p>
              Adotamos medidas de segurança robustas para proteger seus dados
              contra acesso não autorizado. Seus dados na nuvem são protegidos
              pelas regras de segurança do Google Firebase e a comunicação é
              criptografada via protocolo HTTPS/TLS.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">
                6
              </span>
              Seus Direitos e Exclusão de Dados
            </h2>
            <p className="mb-3">Você tem total controle sobre seus dados:</p>
            <ul className="list-disc pl-5 space-y-3 marker:text-primary-500">
              <li>
                <strong className="text-white">Acesso e Correção:</strong> Você
                pode visualizar e editar seus dados diretamente no aplicativo.
              </li>
              <li>
                <strong className="text-white">Exclusão de Conta:</strong> Você
                pode solicitar a exclusão permanente da sua conta e de todos os
                dados associados diretamente pelo aplicativo (Configurações &gt;
                Dados e Backup) ou entrando em contato conosco.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">
                7
              </span>
              Privacidade de Crianças
            </h2>
            <p>
              Nossos serviços não são direcionados a menores de 13 anos. Não
              coletamos intencionalmente informações pessoais de crianças. Se
              tomarmos conhecimento de que coletamos dados de uma criança sem
              consentimento dos pais, tomaremos medidas para remover essas
              informações.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">
                8
              </span>
              Alterações nesta Política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente.
              Notificaremos você sobre quaisquer alterações significativas
              através do aplicativo ou por e-mail.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">
                9
              </span>
              Contato
            </h2>
            <p className="mb-2">
              Se você tiver dúvidas ou preocupações sobre esta Política de
              Privacidade ou sobre o tratamento de seus dados, entre em contato
              conosco:
            </p>
            <p>
              E-mail:{" "}
              <a
                href="mailto:superlistas.app@gmail.com"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                superlistas.app@gmail.com
              </a>
            </p>
            <p>Desenvolvedor: MFATECH</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
