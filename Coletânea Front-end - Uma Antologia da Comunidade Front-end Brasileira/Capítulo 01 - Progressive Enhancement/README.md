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

Quando começamos por um cenário mais limitado, é natural querermos solucioná-lo adequadamente. Isso nos força a pensar e desenvolver de uma forma que favorece um HTML mais semântico e desacoplado de CSS e JavaScript. Ganha-mos não apenas um site que funciona bem para todos; ganhamos também um código **mais limpo e fácil de manter**.

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

* Se não temos orçamento e/ou prazo suficiente para desenvolver todas as funcionalidades desejadas, podemos entregar as que atendem aos cenários mais limirados primeiro.

* Se o não sabemos quais tecnologias os visitantes do site vão usar para acessar o conteúdo, começamos com o mínimo possível de tecnologias.

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

