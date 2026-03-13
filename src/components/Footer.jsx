import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 relative overflow-hidden border-t border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">Superlistas</h2>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Transformando a maneira como você faz compras. Inteligência, economia e organização em um só lugar.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Produto</h4>
            <ul className="space-y-4">
              {['Recursos', 'Premium', 'Depoimentos', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Sobre nós</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Carreiras</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Blog</a>
              </li>
              <li>
                <a href="mailto:superlistas.app@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">Contato</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>&copy; 2026 Superlistas. Todos os direitos reservados.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link to="/politica-privacidade" className="hover:text-primary-400 transition-colors text-center">Política de Privacidade</Link>
              <Link to="/termos-uso" className="hover:text-primary-400 transition-colors text-center">Termos de Uso</Link>
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <span>Feito com</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
            <span>para você economizar.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
