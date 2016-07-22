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

- Começar a desenvolver seguindo a linha do *progressive enhancement* influencia os mais diversos aspectos dentro de um projeto.

>Por exemplo, se formos desenvolver um site para divulgar um produto, podemos pensar, antes de mais nada em: 

- [ ] Qual nosso público-alvo?
- [ ] Será que precisamos nos preocupar com navegadores antigos?
- [ ] Qual a parcela de visitantes do meu site que virá de dispositivos móveis?
- [ ] Quão importante é a integração com redes sociais?
- [ ] O que posso oferecer para meus visitantes com configurações mais limitadas?
