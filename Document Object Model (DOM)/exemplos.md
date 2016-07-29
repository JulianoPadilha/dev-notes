# Exemplos de manipulação do DOM

>Site utilizado: https://www.airbnb.com.br/
>Testes feitos no console do browser.

- Selecione uma tag de cabeçalho com um nome de classe única e altere o texto.

```js
var text = document.querySelector('.text-branding');    
text.innerHTML = "Novo texto";
```

- Selecione qualquer elemento na página e remova ele.

```js
var button = document.querySelector('.btn.hide-sm');
button.parendNode.removeChild(button);
```

- Selecione qualquer elemento e altere uma das suas propriedades CSS.

```js
var button = document.querySelector('.btn.hide-sm');
button.style.color = "#000";
```

- Selecione uma seção específica e mova ela 250 pixels para baixo.

```js
document.querySelector('.space-top-8.space-8.text-center').style.marginTop = "250px";
```

- Selecione qualquer componente, como um painel e ajuste a sua visibilidade.

```js
document.querySelector('#new-header').style.backgroundColor = "red";
```

- Defina uma função chamada doSomething com um alerta de "Hello world" e em seguida execute.

```js
var doSomething = function(){
  alert("Hello World!");
};

doSomething();
```

- Selecione um parágrafo, adicione um event listener de clique nele e execute algo cada vez que o evento é clicado. 

```js
var click = document.querySelector('.space-top-8.space-8.text-center');

click.addEventListener('click', function(){
    alert("Olá, mundo!");
});
```
