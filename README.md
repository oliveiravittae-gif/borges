# Borges 

Landing page B2B para lojistas, revendedores, construtoras e compradores em volume.

## Posicionamento comercial

Copy e categorias ficam em `src/data/site.ts`. Mensagens de WhatsApp passam por
`src/lib/whatsapp.ts`, com contexto de revenda, obra, categoria ou recorrência e
preservação dos parâmetros de campanha. O site não envia mensagens automaticamente.

Reposição, composição do pedido e próximas etapas são convites para consulta,
sem promessa de descontos, estoque, capacidade, prazo ou cobertura de entrega.
As fotografias são ilustrativas; modelos e especificações exigem confirmação
com o comercial. Não há integração com Supabase.

Validação da reformulação: builds Lovable e Pages, TypeScript, lint dos arquivos
alterados, âncoras do HTML e mensagens comerciais com simulação local de abertura
do WhatsApp. Prévia conferida em desktop e em larguras de 390 e 320 pixels,
incluindo menu móvel, Escape, retorno do foco e ausência de rolagem horizontal.
Essas verificações não confirmam atendimento humano nem condições de fornecimento.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/222090e7-2d23-486b-89c7-612f6c0a6d87).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## GitHub Pages

The site is published at https://oliveiravittae-gif.github.io/borges/.
Every push to `main` runs `.github/workflows/deploy.yml`; it can also be
started manually from Actions. Settings → Pages → Source must be **GitHub Actions**.

To reproduce the Pages build with Node.js 24:

```sh
npm ci
npm run build:pages
```

The Pages script enables `/borges/` and TanStack Start prerendering, verifies
the generated HTML and local asset paths, and publishes only `dist`.
The temporary SSR build in `dist-ssr` is never uploaded. This target supports
static pages; future server functions or dynamic server routes require hosting
with a server runtime.

The ordinary `npm run build` and `npm run dev` retain the Lovable configuration.
Keep `package-lock.json` synchronized with `package.json` when dependencies
change (`npm install --package-lock-only`); the existing Bun lockfile and Lovable
integration are preserved.
