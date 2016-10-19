# Aula 02 - Usando Diretivas - Parte 1

## Diretivas

Diretivas são extensões da linguagem HTML que permitem a implementação de novos comportamentos, de forma declarativa.

### ngApp
Atual definindo as fronteiras da aplicação. Como assim "fronteiras"? O Angular irá percorrer o documento HTML em busca exatamente destas diretivas.

### ngController
Atua vinculando um elemento da View ao Controller. Onde irá nascer dessa relação o scope.

*Essa é a única forma de fazer vinculo entre View e Controller?* **Não!** O sistema de roteamento também nos permite fazer isso. (Ver futuramente)

### ngBind
Atua substituindo o elemento por uma expressão. Seu uso é similar a interpolação {{}}.

```js
angular.module("listaTelefonica", []); //Cria um módulo
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope) {
    $scope.app = "Lista Telefonica";
}); //Localiza um módulo e define um controller
```

```html
<div ng-controller="listaTelefonicaCtrl">
    <h4 ng-bind="app"></h4>
    <h5>{{app}}</h5> //Interpolação
</div>
```


### ngRepeat
Atua iterando sobre os itens de uma coleção (array) ou de um objeto.

Essa iteração pode ser feita de duas formas:

```html
<tr ng-repeat="contato in contatos">
    <td>{{contato.nome}}</td>
    <td>{{contato.telefone}}</td>
</tr>
```


```html
<tr ng-repeat="contato in contatos">
    <td ng-repeat="(key, value) in contato">
        {{value}}
    </td>
</tr>
```


### ngModel
Atua vinculando uma propriedade ao $scope, fazendo o inverso do ngBind.

O ngBind pega alguma coisa do $scope e exibe. O ngModel pega alguma coisa da View e define no scope.

*Em quais tipos de elementos eu aplico o ngModel?* **Basicamente em três!** Nos inputs, nos selects e nos textAreas. Sendo estes os mais comuns.

**Two way data binding** (Ler mais a respeito)

O two way data binding é um ciclo de notificação que o Angular traz embarcado.


### ngClick
Atua atribuindo um comportamente ao evento.

```html
<button ng-click="adicionarContato()">Adicionar Contato</button> //Invocamos uma função de deve estar obrigatoriamente disponível em nosso scope.
```


```js
$scope.adicionarContato = function(){
    $scope.contatos.push(); //push é um método do objeto array do JS.
}
```

Existem três formas de passar um objeto como parâmetro para o push();

1ª) Forma ruim
```js
$scope.adicionarContato = function(){
    $scope.contatos.push({nome: $scope.nome, telefone: $scope.telefone});
}
```

2ª) Forma boa
```html
<button ng-click="adicionarContato(nome, telefone)">Adicionar Contato</button>
```

```js
$scope.adicionarContato = function(nome, telefone){
    $scope.contatos.push({nome: nome, telefone: telefone});
}
```

3ª) Forma Indicada
```html
<input type="text" class="form-control" ng-model="contato.nome" placeholder="Nome">
<input type="text" class="form-control" ng-model="contato.telefone" placeholder="Telefone">
<button class="btn btn-primary btn-block" ng-click="adicionarContato(contato)">Adicionar Contato</button>
```

```js
$scope.adicionarContato = function(contato) {
    $scope.contatos.push(angular.copy(contato));
}
```