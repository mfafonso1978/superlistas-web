import React, { useEffect } from "react";
import StaticPageLayout from "../../components/StaticPageLayout";

const posts = [
  {
    title: "5 estrategias para economizar no supermercado",
    excerpt: "Como organizar listas e comparar precos para reduzir gastos sem perder qualidade.",
  },
  {
    title: "Como criar uma rotina mensal de compras",
    excerpt: "Um passo a passo simples para planejar compras da casa com previsibilidade.",
  },
  {
    title: "Tecnologia no bolso: compras inteligentes com IA",
    excerpt: "Entenda como recursos inteligentes ajudam a decidir melhor antes de ir ao caixa.",
  },
];

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog - Superlistas";
  }, []);

  return (
    <StaticPageLayout title="Blog" subtitle="Conteudos e dicas praticas para economizar e organizar melhor suas compras.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white mb-3">{post.title}</h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </StaticPageLayout>
  );
};

export default BlogPage;
