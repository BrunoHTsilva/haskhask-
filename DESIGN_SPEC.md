# Especificação de Design e Identidade Visual: SudoFluxo

## 1. Filosofia e Conceito Principal

**"Terminal Cyberpunk Moderno"**

A estética SudoFluxo é inspirada em interfaces de terminais de computador de ficção científica, mas com uma abordagem moderna, limpa e funcional. O objetivo é criar uma experiência imersiva e de alta tecnologia que seja visualmente impressionante sem sacrificar a legibilidade e a usabilidade.

**Princípios Chave:**
- **Clareza acima de tudo:** Mesmo com a estilização, a informação deve ser fácil de ler e entender.
- **Imersão Visual:** Elementos como grades, scanlines e efeitos de brilho criam uma atmosfera coesa.
- **Minimalismo Funcional:** Apenas os elementos essenciais são exibidos. O design evita desordem.
- **Feedback Interativo:** Animações e transições sutis fornecem feedback ao usuário, dando a sensação de um sistema "vivo".

---

## 2. Paleta de Cores

A paleta é estritamente limitada para reforçar a identidade de um monitor de terminal monocromático.

| Cor                 | Hex Code   | Variável Tailwind      | Uso Principal                                                              |
| ------------------- | ---------- | ---------------------- | -------------------------------------------------------------------------- |
| **Verde Neon**      | `#00ff41`  | `cyber-green`          | Cor de destaque primária: textos, ícones, bordas, CTAs, efeitos de brilho. |
| **Preto Absoluto**  | `#000000`  | `cyber-black`          | Cor de fundo principal da página e de componentes.                         |
| **Preto Suave**     | `#050505`  | `cyber-dark`           | Fundos secundários (ex: footer) para criar uma sutil profundidade.         |
| **Verde Escuro**    | `#003b00`  | `cyber-dim`            | Elementos de fundo, sombras de texto, ou estados de baixo destaque.        |
| **Verde-Branco**    | `#ccffcc`  | `cyber-bright`         | Cor para parágrafos longos e textos de corpo para máxima legibilidade.     |

---

## 3. Tipografia

A consistência tipográfica é crucial para a estética de terminal. Utilizamos uma única família de fontes monoespaçadas.

- **Fonte Principal:** `Share Tech Mono`, `monospace`
- **Importação (Google Fonts):** `@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');`

### Hierarquia e Estilo de Texto:

- **Títulos Principais (H1, H2):**
  - **Peso:** `font-bold`
  - **Transformação:** `uppercase`
  - **Espaçamento:** `tracking-tighter` (mais justo)
  - **Efeitos:** Efeito de brilho (glow) com a cor Verde Neon. Ex: `drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]`.

- **Subtítulos (H3, Meta-informações):**
  - **Peso:** `font-bold`
  - **Transformação:** `uppercase`
  - **Espaçamento:** `tracking-[0.3em]` (bem espaçado)
  - **Cor:** Verde Neon com opacidade reduzida (`text-cyber-green/60`).
  - **Decoração:** Frequentemente prefixado com `//` para simular comentários de código.

- **Corpo de Texto (Parágrafos):**
  - **Tamanho:** `text-lg` ou `text-xl`
  - **Altura da Linha:** `leading-relaxed` (espaçamento confortável)
  - **Cor:** `text-cyber-bright/90` para conforto visual em textos longos.

- **Links de Navegação / UI:**
  - **Decoração:** Envolvidos por colchetes, como `[ INÍCIO ]`.
  - **Estado Hover:** Mudança de cor para `text-white` ou um verde mais brilhante.

---

## 4. Componentes e Padrões de UI

- **Botões (CTAs):**
  - **Padrão:** Fundo transparente, borda de `1px` sólida na cor Verde Neon. Texto em maiúsculas.
  - **Hover:** Cores invertidas: fundo Verde Neon, texto Preto. Transição suave.

- **Containers e Cartões:**
  - **Fundo:** `bg-cyber-dark/50` ou `bg-black/80`.
  - **Bordas:** `1px` na cor Verde Neon com opacidade (`border-cyber-green/30`).
  - **Efeito:** `backdrop-blur-sm` para um efeito de "vidro" fosco sobre o fundo.

- **Tratamento de Imagens:**
  - **Moldura:** Borda proeminente de `2px` em Verde Neon.
  - **Cantos Decorativos:** Pequenos L-shapes nos quatro cantos para um visual de "mira" ou "HUD" (Heads-Up Display).
  - **Efeitos:** `grayscale` por padrão, que é removido no `hover`. Leve `zoom-in` (`scale-110`) no `hover`.
  - **Overlays:** Sobreposição sutil de padrões (scanlines, grids) para integrar a imagem à estética geral.

- **Ícones:**
  - **Biblioteca:** `lucide-react` (ou similar com estilo de linhas finas).
  - **Estilo:** Simples, técnicos e sempre renderizados na cor Verde Neon.

---

## 5. Efeitos Visuais e Animações

- **Efeito de Brilho (Glow):** Aplicado a textos e elementos importantes usando `drop-shadow` ou `box-shadow` com a cor Verde Neon. Essencial para a identidade visual.

- **Animação de "Digitação" (Typewriter Effect):**
  - **Propósito:** Usada em áreas de destaque (como o Hero) para introduzir conteúdo de forma dinâmica, simulando a resposta de um sistema ou o carregamento de um protocolo.
  - **Implementação:** Geralmente alcançada com JavaScript (ex: `React Hooks useState` e `useEffect`) que, através de um `setInterval`, adiciona um caractere de cada vez a uma string visível.
  - **Cursor Piscante:** A animação é sempre acompanhada por um caractere de cursor (normalmente `_`) com uma animação de `blink` (opacidade alternando entre 0 e 1) para completar a ilusão de um terminal ativo.

- **Animação de Pulso/Blink:** Aplicada a ícones de status (`animate-pulse`) ou cursores de texto (`animate-blink`) para simular um terminal ativo.
- **Scanlines Globais:** Um `div` fixo sobre toda a tela com um gradiente linear repetido para simular as linhas de um monitor CRT antigo.
- **Fade-in ao Rolar:** Seções aparecem suavemente (`opacity-0` para `opacity-100`) quando entram na área visível, mantendo o foco do usuário.
- **Fundo de Grade (Grid):** Um fundo com linhas finas na cor Verde Neon, com baixa opacidade, para reforçar a aparência de um ambiente de engenharia ou blueprint.
