# Aula 01 - Introdução e Hello World

**AngularJS** é um framework para o desenvolvimento de aplicações web utilizando a linguagem JavaScript!

## AngularJS...:

- Foi criado por **Misko Hevery** e **Adams Abrons** em 2009.

- Não foi criado pelo **Google**. Foi adotado posteriormente quando Misko Hevery foi trabalhar na empresa.

- Atualmente, o projeto AngularJS é mantido pelo Google!

- O objetivo inicial foi **facilitar** a criação de aplicações web!

    *Já pensou quanto código precisamos escrever para cria uma **aplicação simples**?*

- Permite estruturar a arquitetura da aplicação em **camadas** bem definidas.

- Permite a criação de **componentes** reusáveis e modulares.

- Fornece a **infraestrutura** necessária para integrar com o back-end (por AJAX).

- Facilita a **automação de testes**. Já traz nativamente um framework chamado *ngMock* que permite a injeção de componentes nos testes.

## Por que eu deveria utilizar AngularJS?

* Produtividade
    - Uso de componentes reutilizáveis
    - 2 way data binding

* Continuidade
    - Mantido pelo Google
    - Angular2.0
    - Comunidade ativa
    - Vários plugins e bibliotecas
    - Ferramentas

* Comunidade
    - Suporte
    - Livros
    - Cursos
    - Vídeos
    - Tutoriais

* Totalmente escrito em JavaScript

### Toda a aplicação vai rodar no browser do cliente?

# SIM!

## Arquitetura do Framework

O AngularJS segue uma arquitetura muito bem definida. 

Mas o que é arquitetura? Qual a diferença entre arquitetura e design?

Arquitetura diz respeito a parte mais tecnológica do projeto. Design é a interação entre as camadas. 

### Surgimento do padrão MVC

Model-View-Controller

- Padrão criado por Trygve Reenskaug em 1978 na Xerox (PARC).

- Separa muito bem as responsabilidades.

### View

É o que o cliente vê.

### Controller

Responsável pelo que a View consome.

### Scope

Faz a mediação entre a View e o Controller.


## Hello World

```js
angular.module("helloWorld", []);
```

O "helloWorld" é definido como o nome do módulo da nossa aplicação.

O segundo parâmetro, no caso o colchetes, é a injeção de novos módulos, ou seja, a importação de novos módulos que vão trazer consigo componentes, filtros, serviços, etc..

### Criação do Controller

Podemos criar o controller por meio de duas opções. 

Podemos pegar o retorna da criação do módulo em uma variável local que podemos usar para registrar componentes como controller. **Porém ela ficara exposta no escopo global**.

```js
var app = angular.module("helloWorld", []);
```

Ou podemos localizar o módulo de forma similar a criação, porém sem o segundo parâmetro. Criamos então um controller com o nome "helloWorldCtrl" e uma função onde será o local exato onde vamos declarar o controller.

**Lembra que a gente tem um scope compartilhado entre View e Controller?**
    Esse scope é injetado como dependência para dentro do controller e ele será a porta de entrada pra View.

Se quisermos mostrar a frase "Hello World" na View usamos o $scope.

```js
angular.module("helloWorld").controller("helloWorldCtrl", function($scope) {
    $scope.message = "Hello World!"; 
});
```

A View não é um arquivo. A View é o local onde colocamos o atributo ng-controller. Podemos usar no body, em uma div, etc.. Ou seja, a View nada mais é do que um conjunto de tags. Sendo assim, podemos ter no nosso HTML vários ng-controller criando várias Views associadas a um controller diferente. 

E para exibir a mensagem usamos a interpolação {{}} da expressão. Com isso podemos mostrar qualquer coisa que esteja em scope. E não precisamos escrever $scope.message. Já está implicito que porque estamos no helloWorldCtrl, já estamos acessando o scope.

```html
<body>
    <div ng-controller="helloWorldCtrl">
        {{message}}
    </div>
</body>
```

Um pequeno detalhe: 

```js
angular.module("helloWorld", []); // Isso cria um módulo
angular.module("helloWorld"). // Isso localiza um módulo

```

