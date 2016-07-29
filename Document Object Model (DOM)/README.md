# Document Object Model - DOM

## O que é o DOM?

O Document Object Model (DOM) é uma interface de programação para documentos HTML e XML. Ele provê uma representação estruturada do documento e define um meio pelo qual a estrutura pode ser acessada por programas permitindo-os alterar a estrutura do documento, estilo e conteúdo. O DOM provê uma representação do documento como um conjunto estruturado de nós e objetos que têm propriedades e métodos. Essencialmente ele conecta páginas de internet a scripts ou linguagens de programação.

Uma página de internet é um documento. Este documento pode ser exibido numa janela de navegador, ou como código-fonte HTML. Mas é o mesmo documento em ambos os casos. O Document Object Model (DOM) provê uma outra forma de representar, armazenar e manipular o mesmo documento. O DOM é uma representação orientada a objeto completa da página, e pode ser modificada com uma linguagem de script como o JavaScript.

Todas as propriedades, métodos, e eventos disponíveis para manipular e criar páginas estão organizados em objetos (por exemplo, o objeto document representa o próprio documento, o objeto table implementa a interface DOM HTMLTableElement para acessar tabelas HTML, e assim por diante).

## DOM e JavaScript

O DOM não é uma linguagem de programação, mas sem ele, a linguagem JavaScript não teria nenhum modelo ou noção de páginas web, páginas XML e elementos com os quais ela geralmente lida. Todo elemento num documento—o documento como um todo, o cabeçalho, tabelas dentro do documento, cabeçalhos de tabelas, o texto dentro das células— faz parte do document object model para aquele documento, portanto eles podem ser acessados e manipulados fazendo-se uso do DOM e de uma linguagem de scripting como o JavaScript.

No início, JavaScript e o DOM eram fortemente ligados, mas eventualmente evoluíram em entidades separadas. O conteúdo da página é armazenado no DOM e pode ser acessado e manipulado via JavaScript, portanto nós podemos escrever esta equação aproximada:

`API(web ou página XML) = DOM + JS(linguagem de scripting)`

O DOM foi desenvolvido para ser independente de qualquer linguagem de programação em particular, tornando a representação estrutural do documento para uma única API consistente. 

## Como eu acesso o DOM?

Você não tem que fazer nada de especial para começar a usar o DOM. Navegadores diferentes tem implementações diferentes do DOM, e estas implementações exibem graus de conformidade variantes em relação ao verdadeiro padrão DOM, mas cada navegador usa algum document object model para tornar as páginas acessíveis para script.

Quando você cria um script–quer seja um elemento in-line `<script>` or através de uma instrução de carregamento extern –você pode imediatamente começar a fazer uso da API para os elementos document ou window para manipular o próprio documento ou para acessar os filhos do documento, que são os vários elementos na página. Sua programação em DOM pode ser algo simples como o seguinte código, que mostra uma mensagem atráves da função alert() do objeto window, ou pode usar métodos do DOM mais sofisticados para realmente criar novos conteúdos como no exemplo maior mais abaixo.

```html
<body onload="window.alert('welcome to my home page!');">
```

Aparte do elemento `<script>` no qual o Javascript é definido, este Javascript define uma função a ser executada quando o documento é carregado (e quando todo o DOM está disponível para uso). Esta função cria um novo elemento H1, adiciona texto ao elemento e então adiciona o H1 à árvore deste documento.

```html
<html>
<head>
<script>
// executa esta função quando o documento está carregado
window.onload = function() {
   // cria um par de elementos numa 
   // página HTML outrora vazia
   heading = document.createElement("h1");
   heading_text = document.createTextNode("Big Head!");
   heading.appendChild(heading_text);
   document.body.appendChild(heading);
}
</script>
</head>
<body>
</body>
</html>
```

## Tipos de dados importantes

`document`

Quando um membro retorna um objeto do tipo document (por exemplo, a propriedade ownerDocument de um elemento retorna o document ao qual pertence), este objeto é o próprio objeto document raiz.

`element`

element se refere a um elemento ou a um nó do tipo element retornado por um membro da API do DOM. Ai invés de dizer, por exemplo, que o método document.createElement() retorna uma referência de objeto para um node, nós apenas dizemos que o método retorna o element que acabou de ser criado no DOM. Objetos element implementam a interface DOM Element e também a interface mais básica Node.

`nodeList`

Um nodeList é um array de elementos, como o tipo que é retornado pelo método document.getElementsByTagName(). Itens em uma nodeList são acessados pelo índice em qualquer uma das duas formas:
- list.item(1)
- list[1]
Estas duas formas são equivalentes. Na primeira, item() é um único método do objeto nodeList. A última usa uma típica sintaxe de array para buscar o segundo item na lista.

`attribute`

Quando um attribute é retornado por um membro (por exemplo, pelo método createAttribute()), ele é uma referência de objeto que expõe uma interface especial (embora pequena) para atributos. Atributos são nós no DOM assim como os elementos o são, embora você raramente pode usá-los como tal.

`namedNodeMap`

Um namedNodeMap é como um array, mas os itens são acessados por nome ou índice, embora este último caso é meramente uma conveniência de enumeração, uma vez que estão em nenhuma ordem especial na lista. Um namedNodeMap tem um método item() para este propósito, e você também pode adicionar e remover itens de um namedNodeMap.

## Interfaces DOM

Este guia é sobre os objetos e as verdadeiras coisas que você pode usar para manipular a hierarquia do DOM. É muitas vezes uma questão de indiferença que o objeto representando o elemento HTML form pegue sua propriedade name da interface HTMLFormElement mas sua propriedade className da própria interface HTMLElement. Em ambos os casos, a propriedade que você quer está simplesmente no objeto form.

Mas a relação entre objetos e interfaces que eles implementam no DOM podem ser confusos, e portanto esta seção tenta dizer um pouco mais sobre as interfaces reais da especificação do DOM e como elas se tornam disponíveis.

### Interfaces e Objetos

Muitos objetos se valem de muitas interfaces diferentes. O objeto table, por exemplo, implementa uma Interface do elemento HTML Table especializada, que inclui métodos como createCaption e insertRow. Mas desde que ele também é um elemento HTML, table implementa a interface Element. E finalmente, com um elemento HTML também é, assim como o DOM lhe considera, um nó em uma árvore de nós que criam um modelo de objeto para uma página web ou uma página XML, o elemento table também implementa a mais básica interface Node, a partir da qual o Element deriva.

Quando você tem uma referência para um objeto table, como no exemplo a seguir, você rotineiramente usa todas as três interfaces indiferentemente no objeto, talvez sem saber.

```js
var table = document.getElementById("table");
var tableAttrs = table.attributes; // Node/Element interface
for(var i = 0; i < tableAttrs.length; i++){
  // HTMLTableElement interface: border attribute
  if(tableAttrs[i].nodeName.toLowerCase() == "border")
    table.border = "1"; 
}
// HTMLTableElement interface: summary attribute
table.summary = "note: increased border";
```

### Interfaces do núcle do DOM

Esta seção lista algumas das interfaces mais comumente usadas no DOM. A idéia não é descrever aqui o que estas APIs fazem, mas sim te dar uma idéia dos tipos de métodos e propriedades que você verá muitas vezes enquanto você usa o DOM.

Os objetos document e window são os objetos cuja interface você geralmente vai usar na maioria das vezes na programação com DOM. Em termos simples, o objeto window representa algo como o navegador, e o objeto document é a raiz do próprio documento. Element descende da interface genérica Node, e estas duas juntas fornecem muitos dos métodos e propriedades que você usa em elementos individuais.

A seguir está uma breve lista das APIs comuns para scripting usando o DOM em web e páginas XML.

- document.getElementById()

- document.getElementsByTagName()

- document.createElement()

- parentNode.appendChild()

- element.innerHTML

- element.style.left

- element.setAtrribute

- element.getAtrribute

- element.addEventListener

- window.content

- window.onload

- window.dump

- window.scrollTo

>Escrever sobre cada uma delas

>Fonte: [https://developer.mozilla.org/pt-PT/docs/Gecko_DOM_Reference/Introduction](https://developer.mozilla.org/pt-PT/docs/Gecko_DOM_Reference/Introduction)
