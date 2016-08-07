# Capítulo 01 - Progressive Enhancement: construindo um site melhor para todos?

Com navegadores cada vez mais modernos, cheios de recursos, a tendência é que nossos sites também  fiquem cada vez mais sofisticados. Porém, não podemos esquecer: nem todo mundo que acessa nossos sites está usando um navegador com os últimos recursos.

Quando fazemos um site, normalmente o fazemos para um público imenso de pessoas. Não podemos esquecer que, nesse público imenso, temos:

* pessoas que não gostam de Javascript sendo executado em suas máquinas 

* pessoas que **não podem** atualizar seus navegadores

* pessoas acessando a internet a partir de despositivos limitados

* pessoas com dificuldades motoras, visuais e auditivas que nem sempre conseguem utilizar o mouse para navegar ou dependem de leitores de tela

* ainda temos um outro usuário a considerar, que não tem Javascript nem CSS habilitados: **as ferramentas de busca**

#####Como podemos desenvolver sites levando em conta esses cenários?

## Graceful degradation

Uma primeira forma de pensar é desenvolver seu site primeiro para o público geral, que tem acesso aos navegadores mais modernos e não tem restrições de acessibilidade para, em um segundo momento, procurar atender aos usuários com mais limitações. No mundo de desenvolvimento front-end, essa prática ficou mais conhecida como *graceful degradation*.

Porém, pensar dessa forma pode nos levar a alguns problemas, como no exemplo a seguir:

>Pegamos como exemplo para analisar: um botão de comprar em uma loja virtual. A compra foi implementada usando AJAX, para dar mais dinamicidade à navegação do usuário.

```html
<input type="hidden" name="produto" value="123456">
<input type="number" name="quantidade">
<a href="#" id="comprar"><img src="icone-comprar.png"></a>
```

```js
$("#comprar").click(function() {
    var dadosCompra = {
        produto: $("[name=produto]").val(),
        quantidade: $("[name=quantidade]").val()
    };

    // Enviamos os dados no formato JSON para o servidor.
	// atualizaPagina é uma função que vai ser executada depois que o servidor confirmar a compra.

	$.post("/compra", dadosCompra, atualizaPagina, "json");
});
```

- A quais problemas essa solução não atende?

Uma primeira possibilidade é pensar na acessibilidade da página: será que usuários com deficiência visual conseguirão comprar na nossa loja? Dificilmente. Afinal, nosso botão de comprar é uma imagem! O leitor de tela não vai conseguir ler o texto “comprar” a partir dela. Além disso, esse botão, por ser um link, pode gerar confusão nesses usuários.

>Podemos melhorar esta situação com um HTML mais semântico:

```html
<form>
    <input type="hidden" name="produto" value="123456">
    <input type="number" name="quantidade">
    <button type="submit" id="comprar">
        <img src="icone-comprar.png" alt="Comprar">
    </button>
</form>
```

O uso da tag `form` serve para indicar que estes controles, juntos, representam informações que serão enviadas para um servidor. Temos também a tag `button` com o tipo `submit` declarado, para indicar que essa imagem é um botão e que, ao ser clicado, enviará o formulário.

- Mas será que há algum outro caso que precisamos tratar? 

Sim, usuários sem JavaScript: como está a experiência atual para eles? Eles conseguem comprar no nosso site? O que acontece quando eles clicam no botão de compra? Absolutamente nada!

Tendo a preocupação com *graceful degradation*, precisamos lembrar de todos os cenários que deixamos de lado ao desenvolver nosso site com as últimas tecnologias. E, se precisamos lembrar desses cenários, qual a chance de esquecermos algum?

Mais ainda: agora precisamos implementar uma solução sem JavaScript. Será que é possível? Nosso servidor nos devolve um JSON como resultado, não uma página. Para mostrar algo útil para o usuário, **precisamos** de JavaScript, agora. Ou seja, por termos desenvolvido uma solução sem pensar nos casos mais limitados, acabamos caindo em um beco sem saída. Precisaremos **refazer boa parte da nossa solucão**, inclusive do lado do servidor.

- Como fazer, então, para não corrermos o risco de esquecermos esses cenários mais limitados?

**Começando por eles**; essa é a ideia do **progressive enhancement**.


## Progressive Enhancement

Para entender a diferença entre os dois, vamos usar o mesmo cenário: precisamos implementar o botão para comprar um produto em uma loja virtual.

Porém, vamos começar por um cenário bem limitado: um navegador baseado em texto (o navegador Lynx, por exemplo, http://lynx.browser.org/). Nesse tipo de navegador, a única ferramenta que temos disponível é o HTML. 

- Como implementar um botão de compra usando apenas HTML?

	* Com algo próximo do que já tínhamos:

```html
<form action="/comprar" id="comprar">
    <input type="hidden" name="produto" value="123456">
    <input type="number" name="quantidade">
    <button type="submit">Comprar</button>
</form>
```

Repare em uma diferença importante: o atributo `action` no formulário. Com ele, o navegador sabe para qual endereço no servidor os dados deste formulário devem ser enviados; não precisamos de JavaScript nenhum para ensinar isso para o navegador.

Repare, também, em uma outra diferença: colocamos o texto “Comprar” dentro do botão em vez da imagem.

Por  fim, vale observar que essa decisão de começar pelo cenário mais limitado infuencia também o lado servidor da aplicação: ao comprar, vamos enviar nossos dados no formato padrão do navegador e não no formato JSON.

Agora podemos passar para um cenário um pouco mais complexo: usuários com deficiência visual. Com eles, já podemos usar JavaScript. 

>Para implementar a compra com AJAX, como queríamos inicialmente, não teremos quase nenhum código agora:

```js
$("#comprar").submit(function() {
    $.post(this.action, $(this).serialize());
});
```

Veja que, agora, não precisamos mais nos preocupar com os dados do formulário individualmente nem com a URI da compra. Por estarmos usando um formulário semântico, podemos simplesmente pedir para o jQuery pegar os dados desse formulário e enviá-lo como o navegador faria, porém de forma assíncrona.

Quando começamos por um cenário mais limitado, é natural querermos solucioná-lo adequadamente. Isso nos força a pensar e desenvolver de uma forma que favorece um HTML mais semântico e desacoplado de CSS e JavaScript. Ganhamos não apenas um site que funciona bem para todos; ganhamos também um código **mais limpo e fácil de manter**.

No entanto, aplicar o **progressive enhancement** não é tão fácil como pode parecer à primeira vista. Diversas questões aparecem: *qual vai ser meu cenário mais limitado? Por onde começar? Como acrescentar funcionalidade sem quebrar o que eu já tinha?*


## Por onde começar?

Começar a desenvolver seguindo a linha do *progressive enhancement* influencia os mais diversos aspectos dentro de um projeto.

>Por exemplo, se formos desenvolver um site para divulgar um produto, podemos pensar, antes de mais nada em: 

- [ ] Qual nosso público-alvo?
- [ ] Será que precisamos nos preocupar com navegadores antigos?
- [ ] Qual a parcela de visitantes do meu site que virá de dispositivos móveis?
- [ ] Quão importante é a integração com redes sociais?
- [ ] O que posso oferecer para meus visitantes com configurações mais limitadas?

Como podemos perceber, estas questões estão muito mais relacionadas ao contexto do seu negócio do que a questão técnica. Responder essas perguntas adequadamente é muito importante para guiar o processo de aplicação do conceito de *progressive enhancement* corretamente dentro de um projeto.

Tendo claro o público-alvo do seu projeto, normalmente começam duas frentes de trabalho: 

* o desenvolvimento da lógica a aplicação (back-end)

* e o projeto da interface (front-end)

No desenvolvimento do back-end, saber quao o público-alvo vai influenciar em quais funcionalidades serão implementadas e como. Já no desenvolvimento do front-end, o paradigma do *progressive enhancement* influenciará diretamente o fluxo de desenvolvimento.

Conseguimos perceber até aqui que o *progressive enhancement* não é apenas uma forma de desenvolver o código front-end: **é uma forma diferente de pensar o desenvolvimento do produto como um todo.**

Sendo assim, uma possível resposta para a pergunta "por onde começar" é:
   
    * pelo planejamento do produto
Uma vez que se tenham bem claros os objetivos do produto, as decisões técnicas tornam-se simples.

Em um cenário real, dificilmente isso é possível de acontecer. Normalmente temos que lidar com um público-alvo pouco conhecido, dificuldades na hora de tomar decisões mais técnicas junto ao cliente e limitações de orçamento e no prazo de entrega.

Ainda com todos estes percalços, é possível aplica o *progressive enhancement*.

Veja só:

* Se não sabemos qual o cenário mais limitado a que vamos atender, podemos começar pelo mais limitado.

* Se não temos orçamento e/ou prazo suficiente para desenvolver todas as funcionalidades desejadas, podemos entregar as que atendem aos cenários mais limitados primeiro.

* Se não sabemos quais tecnologias os visitantes do site vão usar para acessar o conteúdo, começamos com o mínimo possível de tecnologias.

### Entregando com qualidade

Em todo projeto, temos três variáveis possíveis de serem controladas: orçamento, prazo e qualidade. No entanto, é impossível controlar as três **ao mesmo tempo**: se  fixamos prazo e qualidade, o produto sai mais caro; se  fixamos prazo e orçamento, a qualidade diminui; se  fixamos orçamento e qualidade, o desenvolvimento demorará mais.

Contudo, sacrificar a qualidade normalmente não é uma boa alternativa. Sendo assim, se o prazo não é suficiente para entregar todas as funcionalidades, não entregue nada mal feito; entregue o que for possível. E, se você estiver seguindo o *progressive enhancement*, as funcionalidades que você entregar são aquelas que influenciam os cenários mais limitados, ou seja, o maior número de usuários possível.

- Repare que atender ao cenário mais limitado primeiro não significa necessariamente começar a desenvolver pelos navegadores mais antigos, por exemplo. Novamente, **essa é uma decisão que cabe ao cliente do projeto**. O papel que cabe ao desenvolver é informar o cliente das consequências de incluir ou excluir determinadas tecnologias do projeto.

- Vale lembrar que com as tecnologias disponíveis atualmente, é possível fazer mais com menos. Os navegadores vêm evoluindo bastante e oferecendo ferramentas cada vez mais avançadas para resolver a maior parte dos problemas.

- Sem falar que o CSS e HTML vêm ganhando recursos poderossísimos que são capazes de nos livrar da necessidade de usar Javascript em diversos casos. 

>Um exemplo: a implementação de navegação em abas

Antigamente, esse tipo de solução precisava de Javascript para ser implementada; hoje em dia, é possível implementá-la apenas com CSS e HTML, tonando-a disponível para um público ainda maior de usuários. 


## Progressive Enhancement e HTML

Para começar pelo cenário mais restrito, precisamos antes pensar em quais tecnologias podemos usar nesse cenário. Há várias possibilidades mas, sem dúvida, todas elas têm suporte ao HTML.

Como sabemos, o HTML é a base de toda página na Internet e, portanto, todo usuário do nosso site, seja humano ou máquina, tem que entender pelo menos HTML; sempre podemos contar com ele.

>Atualmente, todos os navegadores, em sua última versão, trabalham com a versão 5 do HTML. Porém, o que isso significa? 

Quando dizemos HTML5, na verdade, estamos falando de uma série de novas funcionalidades agregadas à̀ linguagem HTML: novas tags, novos atributos, novos controles de formulário, novas APIs, além de modificações de sintaxe e semântica. São muitos novos recursos, de modo que os navegadores, em sua maior parte, ainda não implementam toda a especificação do HTML5.

Felizmente, a especificação da linguagem HTML já foi feita pensando em *progressive enhancement*. Para entender o porquê, vamos analisar o que acontece quando um navegador analisa o seguinte HTML:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Teste de HTML5</title>
    </head>
    <body>
        <header>
            <h1>Página com HTML5</h1>
            <span>Bacana, né?</span>
        </header>
        <section>
            <h1>Hora atual</h1>
            <time>22:39</time>
            <p>Um controle de form novo:</p>
            <input type="range" min="1" max="10">
        </section>
    </body>
</html>
```

- logo no começo do código, estamos usando a declaração DOCTYPE para indicar que estamos usando a última versão do HTML, ou seja, o navegador deve mostrar todo o seu potencial!

>E se o navegador não implementa suporte a todos esses recursos, o que acontece? Já na versão, a especificação do HTML recomenda que [1]:

- Se um agente de usuário encontrar um elemento que não reconhece, ele deve tentar renderizar seu conteúdo;

- Se um agente de usuário encontrar um atributo que não reconhece, ele deve ignorar a declaração completa deste atributo, isto é, o atributo e seu valor;

- Se um agente de usuário encontrar um valor de atributo que não reconhece, ele deve usar o valor padrão para aquele atributo.

Repare que a recomendação é bem favorável à aplicação do progressive enhancement: mesmo que o navegador não entenda exatamente o que estamos querendo dizer, ele vai mostrar o contúdo para o usuário; **podemos incrementar a semântica e a interatividade do nosso HTML sem quebrar os navegadores mais limitados!**

No exemplo dado anteriormente, se o navegador não suporta a tag <time> e o `input` do tipo `range`, ainda assim o usuário verá a hora e um controle de formulário (uma caixa de texto, que é o controle de formulário padrão).


## Progressive Enhancement e CSS

Uma vez que tenhamos a base - o HTML - de uma página bem definida, podemos começar a implementar o design com CSS.

Assim como o HTML, o CSS é uma tecnologia já antiga e que passou por uma grande evolução, culminando no que chamamos agora de **CSS 3**. Assim como o caso do HTML, os navegadores não implementam suporte a todas as novidades, mesmo porque elas continuam vindo, mas os navegadores ignoram as propriedades desconhecidas, de modo que também é muito fácil ir incrementando nosso visual de acordo com as funcionalidades disponíveis.

Além disso, o CSS tem uma outra característica peculiar que facilita o progressive enhancement: quando uma propriedade aparece duplicada, apenas a última declaração é considerada.

Veja como esse comportamento nos permite fazer progressive enhancement de um jeito fácil: basta ir acrescentando as funcionalidades mais recentes abaixo das mais antigas!

### Indo além com CSS

Quando pensamos em progressive enhancement, devemos pensar em dar a melhor experiência possível para os cenários limitados. Isso implica em tirar o maior proveito possível das ferramentas que temos nesses cenários.

A maior parte dos sites que vamos desenvolver no nosso dia a dia precisará de CSS para ser visualmente agradável e atrair mais usuários. Ou seja, mesmo nos cenários mais limitados, já estaremos dependentes de CSS.

Muitos requisitos de front-end que normalmente implementamos com JavaScript podem ser feitos apenas com CSS, ou seja, sem depender de mais uma tecnologia.

Implementações podem ser conferidas com mais detalhes em [http://css-tricks.com/examples/CSSTabs](http://css-tricks.com/examples/CSSTabs)


## Progressive Enhancement e JavaScript

Desenvolver pensando primeiro nos cenários mais limitados já evita que caiamos no tipo de armadilha mostrada na introdução deste capítulo, com o formulário AJAX.

No entanto, quando adicionamos JavaScript à̀ página, precisamos tomar certos cuidados para não quebrar o trabalho já feito, assim como no CSS.

Da mesma forma que devemos pensar no CSS como algo a mais em uma página, devemos também pensar no JavaScript dessa forma. Isso significa que, na medida do possível, o código JavaScript não deve interferir no seu HTML. Por exemplo, em vez de fazer um link virar uma ação em JavaScript com

```html
<a href="#" onclick="maisProdutos()">Mais produtos</a>
```

devemos preservar o HTML original

```html
<a href="mais-produtos.html">Mais produtos</a>
```

e adicionar a funcionalidade JavaScript usando o próprio JavaScript, em algo como

```js
document.querySelector(’[href="mais-produtos.html"]’).addEventListener(’click’, maisProdutos);
```

Dessa forma, nosso site continua funcionando perfeitamente, mesmo que o JavaScript apresente algum problema, e essa é uma das principais vantagens do progressive enhancement para o seu desenvolvimento. Esse tipo de pensamento é conhecido entre os desenvolvedores JavaScript como JavaScript não-obstrutivo.

É fato que, em muitos casos, algumas funcionalidades só estarão presentes para usuários com JavaScript habilitado. Por exemplo: imagine que queremos fazer uma caixa de busca para filtrar uma lista de resultados. Como podemos desenvolver algo deste tipo pensando em progressive enhancement?

A resposta para essa pergunta sempre é começando pelo cenário mais limitado. E o que podemos oferecer para nossos usuários só com HTML, por exemplo? Uma simples lista:

```html
<h1>Sobremesas</h1>
<ul class="resultados">
     <li><a href="receita?id=123">Bolo de nozes</a></li>
     <li><a href="receita?id=234">Estrogonofe de nozes</a></li>
     <li><a href="receita?id=345">Bolo de chocolate</a></li>
     <li><a href="receita?id=456">Torta de chocolate</a></li>
     <li><a href="receita?id=567">Torta de maçã</a></li>
</ul>
```

Depois de incrementar a página com o estilo, passamos à funcionalidade da busca. E, para implementá-la, podemos facilmente pensar em mudar nosso HTML para algo do tipo:

```html
<h1>Sobremesas</h1>
<input type="search" onkeyup="filtra()">
<ul class="resultados">
     <li><a href="receita?id=123">Bolo de nozes</a></li>
     <li><a href="receita?id=234">Estrogonofe de nozes</a></li>
     <li><a href="receita?id=345">Bolo de chocolate</a></li>
     <li><a href="receita?id=456">Torta de chocolate</a></li>
     <li><a href="receita?id=567">Torta de maçã</a></li>
</ul>
```

Porém, ao fazermos isso, sem percebermos, estamos oferecendo uma página “quebrada” para os usuários sem JavaScript. Afinal, para que serve esta caixa de busca para eles? **Nada**; portanto, ela simplesmente não deveria estar lá. Mas como fazemos para ela aparecer só para os usuários que têm JavaScript funcionando? **Inserindo-a via JavaScript!**

```js
var busca = document.createElement(’input’);
busca.type = ’search’;
var resultados = document.querySelector(’.resultados’);
resultados.parentNode.insertBefore(busca, resultados);
```

Ou seja, quando temos a preocupação do progressive enhancement na implementação das funcionalidades que dependem de JavaScript, uma boa prática é usar apenas JavaScript para acrescentá-las ao site. Com isso, asseguramos que não quebraremos o trabalho anterior e, de quebra, deixamos nosso código mais organizado.

### Lidando com JavaScript limitado

Um ponto que não gera dores de cabeça no HTML e no CSS mas que, no JavaScript, é bastante complicado é lidar com funcionalidades faltantes. Vimos que, com relação ao HTML, o navegador mostra informações de tags desconhecidas e, com relação ao CSS, o navegador ignora propriedades e valores não suportados; o mesmo não acontece com o JavaScript: qualquer comando que não seja suportado pelo navegador gerará um erro de JavaScript, consequentemente parando toda a execução do código.

Lidar com as limitações e diferenças entre os navegadores pode ser bastante trabalhoso. Por exemplo, para selecionar elementos da página, podemos usar a função `document.querySelector`, como  fizemos no exemplo anterior. No entanto, essa função não está presente em todos os navegadores. Para que nosso código funcione em todos os navegadores, podemos usar a função `document.getElementsByClassName`:

```js
var resultados = document.getElementsByClassName(’resultados’)[0];
```

Imagine agora, por exemplo, que você está construindo um site de uma rede de restaurantes e quer mostrar para um usuários os pratos exclusivos de sua região em destaque. Para isso, você pode perguntar em qual cidade o usuário está ou, mais interessante, tentar detectar onde ele está. Isso é possível por meio da API de geolo- calização dos navegadores:

```js
navigator.geolocation.getCurrentPosition(function(position) {
    // descobre a cidade baseado nas coordenadas
});
```

Porém, nem todo navegador tem suporte a essa API e, quando não há suporte, o objeto geolocation não está de nido e, portanto, o código anterior gera um erro.

Uma outra abordagem, mais simples e robusta, é vericar se o navegador do usuário tem a funcionalidade desejada, independente de qual seja. Neste nosso caso, é simples fazer isso: basta veri car se o objeto geolocation está de nido antes de usá-lo.

```js
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        // descobre a cidade baseado nas coordenadas
}); }
```

Nos casos em que a detecção da funcionalidade é mais complicada, podemos usar a biblioteca Modernizr (http://modernizr.com/) , cujo propósito é justamente detectar as funcionalidades disponíveis no navegador.


## Quando o Progressive Enhancement não é uma alternativa

A abordagem do progressive enhancement resolve muitos problemas do desenvolvedor front-end ao forçar o foco primeiro na parte mais importante de um site, que é prover o conteúdo. No entanto, progressive enhancement tem suas desvantagens e nem sempre é aplicável. 

Quando desenvolvemos pensando primeiro nos cenários mais limitados, conseguimos planejar nosso desenvolvimento de modo a tornar nosso site minimamente acessível nesses cenários. No entanto, isso pode ser restritivo para o processo criativo de desenvolvimento de um site. Imagine, por exemplo, que você precisa fazer uma página mostrando as funcionalidades de um aparelho celular novo. O jeito mais simples e que atende a todos os usuários é simplesmente montar uma lista dessas funcionalidades, possivelmente com imagens ilustrativas. Porém, pensando dessa forma, você pode acabar deixando de apresentá-las de uma forma mais criativa, como um menu interativo. Para não correr esse risco, vale a pena pensar primeiro em como queremos que nosso site  que no  nal para, daí, começar a implementar pelo cenário mais limitado. Essa ideia de projeto  nal, inclusive, pode servir de guia para soluções mais criativas mesmo nesses primeiros cenários.

É́ possível desenvolver uma versão mais simples, sem as funcionalidades principais, para os cenários mais limitados, usando progressive enhancement. Essa abordagem é seguida, por exemplo, pelo Gmail, o serviço de e-mail da Google. A versão principal do cliente web é desenvolvida usando recursos avançados de JavaScript. Para simpli car o desenvolvimento dessa versão e ainda permitir o acesso aos e-mails nos navegadores mais limitados, foi desenvolvida uma versão baseada apenas em HTML.

Mesmo nos cenários em que progressive enhancement não é aplicável, é interessante ter em mente as preocupações dessa forma de desenvolvimento. Desenvolver para a web é desenvolver para todos, independente de plataforma, navegador, língua e capacidades, e essa é a principal preocupação do progressive enhancement: fazer da web uma só, para todos, como idealizou o criador da web, Tim Bernes-Lee.