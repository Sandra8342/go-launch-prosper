## Contexto

O código do seletor (`src/routes/index.tsx`, linhas 77 e 89) já usa os emojis `🇧🇷` e `🇺🇸`. O que você está vendo como "BR" e "US" é o **fallback do Windows**: o Chrome/Edge no Windows não desenha bandeiras coloridas para emojis regionais e mostra as duas letras do código do país no lugar. Trocar por outro emoji não resolve — todo emoji de bandeira cai no mesmo fallback nesse sistema.

## Plano

Substituir os emojis por **mini-SVGs inline** das bandeiras do Brasil e dos EUA, que renderizam iguais em qualquer sistema operacional/navegador.

### Alterações

1. `src/routes/index.tsx` — no componente `LanguageSwitcher` (linhas ~65-92):
   - Trocar o emoji `🇧🇷` (linha 77) por um `<svg>` compacto da bandeira do Brasil (retângulo verde + losango amarelo + círculo azul), ~20×14px.
   - Trocar o emoji `🇺🇸` (linha 89) por um `<svg>` compacto da bandeira dos EUA (13 listras + cantão azul), ~20×14px.
   - Ajustar `w-8` → `w-9` se necessário para acomodar o SVG, mantendo o mesmo estilo de pill/ring/hover atual.
   - Manter `aria-label`, `title`, `aria-pressed` e toda a lógica de `setLang` inalterados.

Nada mais muda: paleta, tipografia, layout, comportamento e i18n permanecem idênticos.
