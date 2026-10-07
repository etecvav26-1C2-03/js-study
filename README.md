# js-study – Estudos de JavaScript

Repositório do grupo para estudar **JavaScript e DOM** juntos.
ETEC Vasco Antonio Venchiarutti • 1C2 Desenvolvimento de Sistemas

## Colaboradores

- Gabriel
- Kevin
- Felipe

## Estrutura do repositório

```
.
├── 1-learning/          # todo mundo junto aprendendo
│   ├── 01-command/
│   ├── 02-command/
│   └── 03-command/
├── A-exercices/         # exercícios da parte A (cada um faz o seu)
│   ├── gabriel/
│   ├── kevin/
│   └── felipe/
├── docs/                # PDFs de apoio
└── README.md
```

### `1-learning` – aprendendo juntos

Aqui ficam comandos soltos e testes que o grupo faz **junto**, para entender como o JavaScript funciona. Cada pasta é uma mini página com `index.html`, `style.css` e `script.js`. Para testar, é só abrir o `index.html` no navegador.

| Pasta | O que tem | Comandos |
|---|---|---|
| `01-command` | Botão que troca o texto de um parágrafo ao ser clicado | `getElementById`, `addEventListener`, `textContent` |
| `02-command` | Modo escuro: o botão liga e desliga uma classe no `<body>` | `classList.toggle`, `document.body` |
| `03-command` | _(ainda vazio)_ | |

### `A-exercices` – exercícios individuais

Aqui ficam os exercícios da **parte A** do caderno. Cada pessoa resolve **os seus** dentro da própria pasta (`gabriel/`, `kevin/`, `felipe/`), assim dá para comparar as soluções depois.

A parte A roda **no console** (F12 → Console, ou `node arquivo.js`), sem página HTML.

| Exercício | Tema |
|---|---|
| A1 | Console e variáveis |
| A2 | Tipos e conversão |
| A3 | Decisões com `if` |
| A4 | Repetições com `for` |
| A5 | Funções |
| A6 | Listas (arrays) |
| A7 | Objetos e lista de objetos |

Sugestão de nome para os arquivos: `a1.js`, `a2.js`, ... `a7.js`.

> A **parte B** (B1 a B8, DOM e página) também está no PDF e pode ganhar a pasta `B-exercices` quando a gente chegar nela.

## Materiais de apoio

Os PDFs ficam na pasta `docs/`:

- **Exercícios de JavaScript e DOM** – 15 exemplos resolvidos + 15 exercícios (partes A e B).
- **Como funciona um site** – visão geral: front-end e back-end, request e response, HTML/CSS/JS, DOM, eventos, terminal e siglas. Bom para ler antes de começar.

## Como usar

1. Leiam o exemplo resolvido do PDF e digitem (sem copiar e colar).
2. Rodem e confiram se a saída é igual à do caderno.
3. Façam o exercício na sua pasta.
4. Só olhem as respostas depois de tentar.

## Como enviar o seu exercício

```bash
git pull                                   # pega o que os outros mandaram
git add A-exercices/seu-nome/a1.js         # adiciona o seu arquivo
git commit -m "A1 resolvido - seu-nome"    # descreve o que fez
git push                                   # envia para o GitHub
```

Mexa só na **sua** pasta dentro de `A-exercices`, para não dar conflito com o código dos outros.