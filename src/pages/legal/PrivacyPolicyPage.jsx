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

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">
                1
              </span>
              Informações que Coletamos
            </h2>
            <ul className="list-disc pl-5 space-y-3 marker:text-primary-500">
              <li>
                <strong className="text-white">Informações de Conta:</strong>{" "}
                Endereço de e-mail (para identificação, autenticação,
                recuperação de senha e sincronização) e foto de perfil opcional.
              </li>
              <li>
                <strong className="text-white">Dados do Aplicativo:</strong>{" "}
                Nomes de listas, produtos, preços, quantidades, categorias e
                lojas.
              </li>
              <li>
                <strong className="text-white">Mídia e Arquivos:</strong> Fotos
                de produtos ou de perfil (armazenadas localmente e no Firebase
                Storage).
              </li>
              <li>
                <strong className="text-white">Dados de Voz:</strong> Áudio
                capturado temporariamente para conversão em texto (não
                armazenado permanentemente).
              </li>
              <li>
                <strong className="text-white">
                  Informações de Uso e Dispositivo:
                </strong>{" "}
                Modelo do dispositivo, sistema operacional, identificadores
                únicos, relatórios de falhas e métricas de desempenho.
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
            <ul className="list-disc pl-5 space-y-3 marker:text-primary-500">
              <li>
                Sincronização de listas e perfil em tempo real entre
                dispositivos.
              </li>
              <li>Recuperação de acesso à conta.</li>
              <li>
                Processamento de transações e gerenciamento de assinaturas
                Premium.
              </li>
              <li>
                Melhoria dos serviços e envio de comunicações sobre atualizações
                e segurança.
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
            <ul className="list-disc pl-5 space-y-3 marker:text-primary-500">
              <li>
                <strong className="text-white">Câmera e Galeria:</strong> Para
                fotos de produtos e perfil.
              </li>
              <li>
                <strong className="text-white">Microfone:</strong> Para comandos
                de voz (Speech-to-Text).
              </li>
              <li>
                <strong className="text-white">Internet:</strong> Para
                sincronização e backup na nuvem.
              </li>
              <li>
                <strong className="text-white">Notificações:</strong> Para
                lembretes e avisos.
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
              Os dados não são vendidos. São compartilhados com:
            </p>
            <ul className="list-disc pl-5 space-y-3 marker:text-primary-500">
              <li>
                <strong className="text-white">Google Firebase:</strong>{" "}
                Autenticação, banco de dados, análise de uso e relatórios de
                falhas.
              </li>
              <li>
                <strong className="text-white">Google Play Store:</strong>{" "}
                Processamento de pagamentos e assinaturas.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">
                5
              </span>
              Segurança e Retenção
            </h2>
            <ul className="list-disc pl-5 space-y-3 marker:text-primary-500">
              <li>
                Os dados são protegidos por regras de segurança do Firebase e
                criptografados via HTTPS/TLS.
              </li>
              <li>
                <strong className="text-white">Exclusão de Dados:</strong> O
                usuário pode solicitar a exclusão permanente da conta e de todos
                os dados associados (listas, histórico e assinaturas)
                diretamente pelo aplicativo.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3 text-sm">
                6
              </span>
              Contato
            </h2>
            <p>
              Para dúvidas ou solicitações, entre em contato pelo e-mail:{" "}
              <a
                href="mailto:superlistas.app@gmail.com"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                superlistas.app@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
