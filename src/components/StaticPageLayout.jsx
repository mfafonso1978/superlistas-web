const StaticPageLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/5 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 break-words">{title}</h1>
        <p className="text-primary-400 text-lg font-medium mb-8">Aplicativo Superlistas</p>

        {subtitle && <p className="text-slate-300 text-lg leading-relaxed mb-10">{subtitle}</p>}

        <div className="space-y-10 text-slate-300">{children}</div>
      </div>
    </div>
  );
};

export default StaticPageLayout;
