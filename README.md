# Studio Belo e Jô — Site Institucional

> _(Adicionar screenshot do hero após o deploy: `assets/img/hero-preview.png`)_

---

## Estrutura de arquivos

```
beloejo/
├── index.html              # Página principal
├── 404.html                # Página de erro
├── robots.txt              # Permissões para buscadores e IAs
├── sitemap.xml             # Mapa do site
├── llms.txt                # Resumo do negócio para IAs
├── .gitignore
├── README.md
└── assets/
    ├── styles.css          # Tokens :root, animações, componentes
    ├── app.js              # GoatCounter, menu, FAQ, scroll-reveal
    ├── tailwind-config.js  # Tailwind custom theme
    ├── logo.png            # Logo JB (380×221)
    ├── logo-horizontal.png # Logo horizontal (468×80)
    └── img/
        ├── servico-corte-feminino.jpg
        ├── servico-coloracao.jpg
        ├── servico-escova.jpg
        ├── servico-mechas.jpg
        ├── servico-sobrancelha.jpg
        ├── servico-progressiva.jpg
        └── servico-unhas.jpg
```

---

## Seções

| Seção | Âncora |
|-------|--------|
| Navegação fixa | — |
| Hero | `#hero` |
| Serviços | `#servicos` |
| Sobre nós | `#sobre` |
| Avaliações | `#avaliacoes` |
| Perguntas frequentes | `#faq` |
| Localização e contato | `#localizacao` |
| Rodapé | — |
| Botão WA flutuante | — |

---

## Tecnologia

- **HTML / CSS / JS** puro (sem build, sem backend)
- **Tailwind CSS** via CDN 3.4.1 — utilitários
- **Google Fonts** — Outfit (display) + DM Sans (corpo)
- **GoatCounter** — analytics sem cookies

---

## Design tokens

| Token | Valor |
|-------|-------|
| `--bg` | `#fafafa` |
| `--bg-2` | `#f3f1fb` |
| `--bg-3` | `#ffffff` |
| `--bg-4` | `#ede9f8` |
| `--accent` | `#9b7fe8` (lavanda) |
| `--accent-light` | `#b39deb` |
| `--accent-dark` | `#7c5fc5` |
| `--text` | `#1a1826` |
| `--text-2` | `#3d3850` |
| `--text-3` | `#6b6484` |
| `--text-4` | `#9898b2` |
| `--border` | `rgba(155,127,232,.18)` |
| `--radius` | `12px` |
| `--font-display` | `'Outfit', sans-serif` |
| `--font-body` | `'DM Sans', sans-serif` |

---

## Deploy e GoatCounter

### Deploy gratuito

Opções recomendadas (qualquer uma funciona):
1. **Vercel** — conectar repositório GitHub, deploy automático
2. **Netlify** — arrastar a pasta ou conectar GitHub
3. **Cloudflare Pages** — integração GitHub

### Domínio próprio

Após o deploy, apontar o DNS do domínio `beloejo.com.br` para o provedor escolhido e:
1. Atualizar `canonical` no `<head>` do `index.html`
2. Atualizar `og:url` no Open Graph
3. Atualizar `sitemap.xml` com a URL definitiva
4. **Remover** `<meta name="robots" content="noindex, nofollow">` de todas as páginas
5. Cadastrar o domínio no GoatCounter (painel da TeoCode)
6. Enviar o sitemap ao Google Search Console

### GoatCounter

Script no `<head>` de todas as páginas:
```html
<script data-goatcounter="https://teocode.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
```

**Eventos de CTA rastreados** (painel GoatCounter → Events):

| Evento | Localização |
|--------|-------------|
| `cta-nav` | Botão "Agendar" no nav (desktop) |
| `cta-menu-mobile` | Botão "Agendar" no menu mobile |
| `cta-hero` | Botão "Agendar agora" no hero |
| `cta-servico-corte-feminino` | Card Corte Feminino |
| `cta-servico-coloracao` | Card Coloração e Mechas |
| `cta-servico-escova` | Card Escova e Babyliss |
| `cta-servico-progressiva` | Card Progressiva |
| `cta-servico-sobrancelha` | Card Sobrancelha |
| `cta-servico-unhas` | Card Manicure |
| `cta-servico-barbearia` | Card Corte Masculino |
| `cta-servico-cachos` | Card Cachos e Tranças |
| `cta-contato-whatsapp` | Link WA na seção Localização |
| `cta-localizacao` | Botão WA na seção Localização |
| `cta-footer` | Ícone WA no footer |
| `cta-footer-contato` | Número WA no footer |
| `cta-flutuante` | Botão flutuante WA |

> **Nota:** o domínio precisa estar cadastrado no painel GoatCounter (teocode.goatcounter.com) para os eventos aparecerem. Enquanto for prévia, os cliques são registrados mas separados por domínio.
