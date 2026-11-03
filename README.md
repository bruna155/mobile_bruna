# Programação Mobile

Curso Técnico em Desenvolvimento de Sistemas, 3ª série
CEEP Pedro Boaretto Neto, Cascavel/PR

Este é o repositório modelo da disciplina. Você não trabalha nele: você cria o
seu a partir dele.

## Como criar o seu repositório

1. Clique em **Use this template** no topo desta página, depois em
   **Create a new repository**.
2. Em *Repository name*, escreva `mob_seunome`. Tudo minúsculo, sem acento, sem
   espaço, só o primeiro nome. Exemplo: `mob_ana`.
3. Marque **Private** e crie.
4. No repositório novo, vá em *Settings* → *Collaborators* → *Add people* e
   adicione o professor.
5. Volte na aba *Code*, botão verde **Code** → aba **Codespaces** →
   **Create codespace on main**.

Sem o passo 4 a sua entrega não existe: a correção é feita por script, e um
repositório sem o professor como colaborador não aparece na listagem.

## Como rodar o app

Dentro do Codespace, no terminal:

```
cd app-laboratorio
npm run web
```

O VS Code avisa que a porta 8081 abriu e oferece **Open in Browser**. O app
aparece dentro de uma moldura de celular.

Na primeira vez que você cria o Codespace, ele instala as dependências sozinho.
Isso demora alguns minutos e você não precisa fazer nada além de esperar o
terminal parar de rolar.

## O que tem em cada pasta

```
app-laboratorio/    os exercícios das aulas. É aqui que você passa o trimestre
  App.js            a sua tela
  public/index.html a moldura de celular. Não precisa mexer
app-projeto/        o app do trimestre. Nasce na Aula 07
exercicios/         rascunhos que não são aplicativo
```

## Como entregar

Todo encontro termina com o seu trabalho no GitHub:

```
git add .
git commit -m "Aula 01 - exercicio 3"
git push
```

Um commit por exercício, com a mensagem dizendo qual é. Dentro do Codespace o
git já está autenticado, você não precisa configurar usuário nem senha.

Entrega atrasada vale 30% a menos, contando a data do commit.

## Pare o Codespace quando terminar

A conta de horas do GitHub corre enquanto a máquina está ligada, não enquanto
você digita. Terminou a aula, vá em [github.com/codespaces](https://github.com/codespaces)
e clique em **Stop**. Seus arquivos continuam lá.

## Se der problema

**O comando `npm run web` diz que não encontra nada:** você provavelmente está
na pasta errada. Rode `cd app-laboratorio` antes.

**Instalou uma biblioteca e o app quebrou:** use `npx expo install nome` e não
`npm install nome`. O npm pega a versão mais nova, que pode não combinar com a
versão do Expo do projeto.
