# MarkV Tech — landing local

Cópia de trabalho exclusiva de `markvtech-portfolio`, preservando a fonte em `/Users/00markin/Codes/MarkV.Tech/markvtech-portfolio`. Estado: implementação local com verificações não interativas aprovadas; **QA visual e revisão editorial pendentes**. Não declarar pronta para publicação.

## Conteúdo e identidade

Paleta preta/verde e chuva Matrix reutilizadas. O repositório não contém cases comerciais ou portfólio completo. O próprio site é o único projeto apresentado, com tecnologias verificáveis na fonte. Sem clientes, resultados, depoimentos, telefone, e-mail ou formulário inventados. Conforme a orientação posterior, a CTA de contato aponta para `#contato`, sem redirecionar circularmente à própria homepage. A seção informa claramente que o canal direto está em definição e apresenta `markv.tech` apenas como endereço do portfólio. Ainda falta um destino de contato real confirmado pelo usuário.

Navegação: Sobre / Projeto / Contato. Seções: abertura, apresentação, projeto do próprio site, contato. Controles: detalhes do projeto, pausar animação e âncoras. Tipografia Arial/sistema, sem fontes externas. Um único canvas, pausa por visibilidade, movimento reduzido e limpeza no desmontar. React 18 usa `createRoot`.

## Verificações

```sh
./node_modules/.bin/tsc --noEmit --incremental false
./node_modules/.bin/eslint src --max-warnings 0
CI=true npm test -- --watchAll=false --runInBand --no-cache --watchman=false --detectOpenHandles
CI=true GENERATE_SOURCEMAP=false npm run build
```

Os comandos passaram. Seis testes em duas suítes; ver `qa/VALIDACAO.md`. Nenhuma dependência foi adicionada ou atualizada. Uma instalação limpa com `npm ci --ignore-scripts --no-audit --no-fund` também passou nos quatro comandos, sem depender dos links existentes e sem modificar os manifests. Apenas pacotes de registry.npmjs.org, nas versões do lockfile. Os scripts de instalação foram desativados; nenhum foi necessário para as verificações aprovadas. Logs em `qa/clean-install-evidence/`; instalação/cache temporários removidos após verificação. A instalação habitual do rascunho ainda reutiliza os links anteriores; não versionar `node_modules` ou caches.

## Arquivos principais

- `src/App.tsx`: composição e abertura, apresentação e contato.
- `src/components/Header.tsx`: marca e navegação.
- `src/components/Portfolio.tsx`: projeto e detalhes expansíveis.
- `src/components/MatrixBackground.tsx`: correção de canvas preservada, com pausa manual.
- `src/styles.css`: identidade e regras desktop/mobile.
- `src/index.tsx`: montagem React 18.
- `public/index.html`, `public/manifest.json`, `public/favicon.svg`: idioma, metadados e identificação.
- Testes em `src/App.test.tsx` e `src/components/MatrixBackground.test.tsx`.
- `build/`: build local verificado, sem publicação.
- `qa/`: evidências resumidas e patch para revisão.

## Próximo passo

Após liberar o navegador, usar preview local temporário (encerrar ao concluir), validar desktop 1440×900 e 1280×800 e mobile 390×844 e 320×740. Percorrer âncoras, teclado, detalhes, pausa, movimento reduzido, rotação e scroll. Registrar screenshots e verificar legibilidade, overflow e fidelidade ao preto/verde. Revisar o texto e confirmar e-mail, telefone ou outro destino real antes de habilitar contato efetivo. Depois integrar o patch ao repositório existente, repetir verificações e publicar somente com autorização explícita, sem criar repo duplicado ou alterar DNS/serviços alheios. Nenhum servidor foi iniciado neste Work.
