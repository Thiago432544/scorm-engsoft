# Simulado de Engenharia de Software (SCORM)

Pacote SCORM 1.2 com 287 questões de verdadeiro ou falso sobre *Engenharia de Software Moderna* (Valente, 2020), capítulos 1, 2, 3 e 8. Cada questão traz a justificativa com a citação do livro.

## Como funciona

- O aluno escolhe os capítulos e a quantidade de questões (10, 20, 30, 50 ou todas); elas são sorteadas a cada tentativa.
- Depois de cada resposta aparece o gabarito e a justificativa. Dá para responder pelo teclado com `V` e `F`.
- No fim aparecem a nota, os acertos por capítulo e a revisão de cada resposta.
- Num LMS, registra a nota (0–100), a situação `passed`/`failed` (mínimo de 70%) e cada resposta como interação `true-false`. Se o aluno refizer, fica a melhor nota.
- Sem LMS, a página funciona sozinha, só não registra a nota.

## Usar

**No LMS:** gere o zip (abaixo) ou compacte o conteúdo de `pacote/` com o `imsmanifest.xml` na raiz, e importe como pacote SCORM 1.2.

**Local:** abra `pacote/index.html` no navegador, ou sirva a pasta:

```sh
python -m http.server 8000 --directory pacote
```

A nota mínima fica em `adlcp:masteryscore`, no `pacote/imsmanifest.xml`.

## Atualizar o banco de questões

O banco vem das respostas de um Google Forms exportadas para `.xlsx`, com as colunas `Tópico da questão`, `Questão`, `Resposta` (Verdadeira/Falsa) e `Citações e referências`.

```sh
pip install openpyxl
python build.py caminho/para/banco.xlsx
```

O script regrava `pacote/questoes.js`, descarta questões duplicadas e gera `dist/SCORM_EngSoft.zip`. Ele lê apenas as colunas da questão; nome, e-mail e matrícula de quem enviou não entram no pacote. A planilha não é versionada (veja `.gitignore`).
