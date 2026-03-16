# 🏗️ Exercícios de ReactJS - Reutilização e Estados Dinâmicos

Este repositório contém a ultima rodada de exercícios práticos, focada na construção de interfaces modulares e na integração entre propriedades (**Props**) e estados (**State**) em componentes de classe.

## 🛠️ Conceitos Avançados Explorados

* **UI Driven by State**: Interfaces que alteram cores e estilos automaticamente com base nos dados do estado.
* **Encapsulamento**: Cada componente gerencia seu próprio ciclo de vida e dados de forma independente.
* **Componentes Reutilizáveis**: Criação de moldes lógicos que podem ser replicados com diferentes entradas de dados.
* **Props as Initial State**: Técnica de utilizar propriedades recebidas do pai para definir o estado inicial do filho.

---

## 📋 Atividades Realizadas

### 1. Inicialização de Estado via Props (Componente Nome)

* **Componentes**: `Nome` e `App`.
* **Objetivo**: O componente `Nome` recebe `nome_inicial` e `nome_final` via props. No `constructor`, ele utiliza a prop inicial para alimentar seu estado interno.
* **Lógica**: Ao clicar no botão interno do componente, o estado é atualizado para o valor da segunda prop (`nome_final`).
* **Aprendizado**: Como transformar dados imutáveis (Props) em dados mutáveis (State) dentro do componente.

### 2. Alteração de Dados e Estilo Dinâmico

* **Componente**: `App`.
* **Objetivo**: Alterar o nome, sobrenome e a **cor visual** da interface simultaneamente.
* **Lógica**: Ao clicar no botão "Alterar", uma Arrow Function atualiza o `state`, refletindo as mudanças de texto e a cor de destaque (CSS Inline) de forma atômica.
* **Aprendizado**: Sincronização de conteúdo e identidade visual via reatividade.

### 3. Reutilização de Componentes em Larga Escala

* **Componente**: `App` orquestrando múltiplos componentes `Nome`.
* **Objetivo**: Reutilizar o componente `Nome` três vezes na mesma tela, cada um com pares de nomes diferentes (Janaine/Cristiane, Ana/Clara, Maria/Eduarda).
* **Aprendizado**: Demonstração prática do poder de componentização: alterando um único arquivo (`Nome.jsx`), impactamos todas as instâncias no sistema.

---

## 🎨 Padrão de Interface

As atividades seguem o "Padrão Esmeraldo Junior":

* **Header de Contexto**: Bloco de código escuro com o enunciado para facilitar a revisão técnica.
* **Div de Resolução**: Container estilizado com sombras e bordas arredondadas para destacar a funcionalidade.
* **Feedback Visual**: Transições suaves (`transition`) em mudanças de cores de botões e textos.

---

## 💻 Como Executar

1. Clone o repositório: `https://github.com/EsmeraldoCarneiro/Exercicios-07_JS_JSX_HTML_React.git`
2. Certifique-se de que o `Vite` está configurado.
3. Instale as dependências: `npm install`
4. Inicie o projeto: `npm run dev`

---

**Desenvolvido por:** Esmeraldo Junior 👨‍💻

*Analista e Desenvolvedor de Sistemas*
