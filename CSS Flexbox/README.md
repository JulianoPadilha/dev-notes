# CSS - Flexbox

Fontes:
 
[CSS Flexbox Origamid](https://www.origamid.com/cursos/css-flexbox/)

[Guia completo](https://origamid.com/projetos/flexbox-guia-completo/)

## Fundamentos do Flexbox

Existem dois diferentes grupos, os Flex Containers e os Flex Items (que são os itens que estão dentro do container).

## Flex Container
	Propriedades
		display
		flex-direction
		flex-wrap
		flex-flow
		justify-content
		align-items
		align-content

### display

display: flex;
	Define o elemento como um flex container, tornando seus filhos flex-items.

### flex-direction

Define a direção dos flex items. Por padrão ele e row (linha), por isso quando o display: flex; e adicionado, os elementos ficam em linha, um do lado do outro.

A mudança de row para column geralmente acontece quando estamos definindo estilos em media queries para o mobile. Assim você garante que o conteúdo seja apresentado em coluna única.

**flex-direction: row**
**flex-direction: row-reverse**
**flex-direction: column**
**flex-direction: column-reverse**

### flex-wrap

Define se os itens devem quebrar ou não a linha. Por padrão eles não quebram linha, isso faz com que os flex items sejam compactados além do limite do conteúdo.

Essa é geralmente uma propriedade que é quase sempre definida como flex-wrap: wrap; Pois assim quando um dos flex items atinge o limite do conteúdo, o último item passa para a coluna debaixo e assim por diante. 

**flex-wrap: nowrap**
**flex-wrap: wrap**
**flex-wrap: wrap-reverse**
	Quebra a linha de baixo pra cima

### flex-flow

O flex-flow é um atalho para as propriedades flex-direction e flex-wrap. Você não verá muito o seu uso, pois geralmente quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap que é nowrap.

E quando mudamos o flex-wrap para wrap, mantemos o padrão do flex-direction que é row.

**flex-flow: row nowrap**
**flex-flow: row wrap**
**flex-flow: column nowrap**

### justify-content

Alinha os flex items no container de acordo com a direção. A propriedade só funciona se os itens atuais não ocuparem todo o container. Isso significa que ao definir flex: 1; ou algo similar nos itens, a propriedade não terá mais função.

Excelente propriedade para ser usada em casos que você deseja alinhar um item na ponta esquerda e outro na direita, como em um simples header com marca e navegação.

**justify-content: flex-start**
**justify-content: flex-end**
**justify-content: center**
**justify-content: space-between**
**justify-content: space-around**

### align-items

O align-items alinha os flex items de acordo com o eixo do container. O alinhamento é diferente para quando os itens estão em colunas ou linhas.

Essa propriedade permite o tão sonhado alinhamento central no eixo vertical, algo que antes só era possível com diferentes hacks.

**align-items: stretch**
**align-items: flex-start**
**align-items: flex-end**
**align-items: center**
**align-items: baseline**

### align-content

Alinha as linhas do container em relação ao eixo vertical. A propriedade só funciona se existir mais de uma linha de flex-items. Para isso o flex-wrap precisa ser wrap.

Além disso o efeito dela apenas será visualizado caso o container seja maior que a soma das linhas dos itens. Isso significa que se você não definir height para o container, a propriedade não influencia no layout.

**align-content: stretch**
**align-content: flex-start**
**align-content: flex-end**
**align-content: center**
**align-content: space-between**
**align-content: space-around**

## Flex Item

Os Flex Items são os filhos diretos do Flex Container, lembrando que uma tag se torna flex container a partir do momento que você definir display: flex.

É possível que um Flex Item seja também um Flex Container, basta definir display: flex; nele. Assim os filhos desse item também serão flex items.

	Propriedades
		flex-grow
		flex-basis
		flex-shrink
		flex
		order
		align-self

### flex-grow

Define a habilidade de um flex item crescer. Por padrão o valor é zero, assim os flex items ocupam um tamanho máximo relacionado com conteúdo interno deles ou ao width definido.

Ao definir 1 para todos os flex items, eles tentarão ter a mesma largura e vão ocupar 100% do container. Digo tentarão pois caso um elemento possua um conteúdo muito largo, ele irá respeitar o mesmo.

Se você tiver uma linha com quantro itens, onde três são flex-grow: 1 e flex-grow 2, o flex-grow: 2 tentará ocupar 2 vezes mais espaço extra do que os outros elementos.

OBS: justify-content não funciona em items com flex-grow definido.

**flex-grow: número**
**flex-grow: 0**

### flex-basis

Indica o tamanho inicial do flex item antes da distribuição do espaço restante.

Quando definimos o flex-grow: 1; e possuímos auto no basis,o valor restante para ocupar container é distribuído ao redor do conteúdo do flex-item.

**flex-basis: auto**
**flex-basis: unidade** Pode ser em %, em, px e etc.
**flex-basis: 0**

### flex-shrink

Define a capacidade de redução de tamanho do item.

**flex-shrink: 1**
**flex-shrink: 0**
**flex-shrink: número**

### flex

Atalho para as propriedades flex-grow, flex-shrink e flex-basis. Geralmente você verá a propriedade flex nos flex-items ao invés de cada um dos valores separados.

Para melhor consistência entre os browsers, é recomendado utilizar a propriedade flex ao invés de cada propriedade separada.

### order

Modifica a ordem dos flex items. Sempre do menor para o maior, assim order: 1, aparece na frente de order: 5.

**order: número**
**order: 0**
	Padrão

### align-self

O align-self serve para definirmos o alinhamento específico de um único flex item dentro do nosso container. Caso um valor seja atribuído, ele passará por cima do que for atribuído no align-items do container.

**align-self: auto**
**align-self: flex-start**
**align-self: flex-end**
**align-self: center**
**align-self: baseline**
**align-self: stretch**


