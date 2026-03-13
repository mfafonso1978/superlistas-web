# Estrutura do Projeto Superlistas Web

Este arquivo explica onde encontrar cada parte do seu site.

## Onde estão os arquivos?

O projeto está na pasta: `e:\Projetos\superlistas-web`

Dentro desta pasta, você encontrará:

1.  **`public/`**:
    *   **Coloque suas imagens AQUI**.
    *   Exemplo: Se você colocar uma imagem chamada `logo.png` aqui, ela estará disponível no site.

2.  **`src/`**:
    *   Aqui fica o código fonte do site.
    *   **`src/components/`**: Aqui estão as partes do site (Cabeçalho, Rodapé, Seções).
        *   `Hero.jsx`: A parte inicial com o celular.
        *   `Features.jsx`: A parte com os 3 cards (Comparativo, Gastos, Categorias).
        *   `SmartLists.jsx`: A parte das Listas Inteligentes.
        *   `Premium.jsx`: A parte escura sobre o Premium.
        *   `Footer.jsx`: O rodapé do site.

## Como colocar as imagens?

1.  Copie suas imagens (`image_f34280.jpg`, etc.) para a pasta `public` que está dentro de `superlistas-web`.
2.  O site deve reconhecê-las automaticamente se os nomes estiverem corretos.

## Como rodar o site?

Se o site parou, abra o terminal nesta pasta e digite:
`npm run dev`
