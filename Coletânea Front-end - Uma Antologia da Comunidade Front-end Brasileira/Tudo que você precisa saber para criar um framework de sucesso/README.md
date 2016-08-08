# Tudo que você precisa saber para criar um framework de sucesso 

Quando criamos um produto/serviço, queremos resolver um problema para alguém. Como desenvolvedores, nós podemos criar um *checklist* de problemas predefinidos que temos aos iniciar um projeto, afinal todo projeto que se preze deveria ser preparado para ser acessível, semântico, performático, testável e sustentável. Há alguns anos, um grande problema começou a ganhar um pouco mais de popularidade: a reutilização de trechs de código. Seja HTML, CSS ou JavaScript, esses trechos, conhecidos como módulos, funcionam como peças de *LEGO* que, somadas, estrategicamente, criam projetos flexíveis, padronizados e organizados.

### Por que é tão difícil criar um padrão?

Nosso cérebro é formado de duas áreas responsáveis pelo armazenamento da memória. A primeira delas é responsável pela memória de curta duração ou memória de trabalho; e a segunda é a memória de longa duração. Como a memória de curta duração possui uma capacidade limitada, existe uma camada anterior conhecida como **armazenamento sensorial**, responsável pela triagem do que será armazenado ou não. Para isso, ela precisa definir em segundos o que vai armazenar na memória de curta duraçnao e o que ela vai esquecer. O que não for armazenado pelo sistema de gerenciamento de memória é ignorado, gerando um reaprendizado o tempo todo sobre aquilo que não foi guardado.

A maior dificuldade para os manipuladores da mente, como designers, é conseguir tornar o reconhecimento das ações, objetivos e interações na interface tão simples e intuitivos a ponto de o usuário relacionar tal comportamento com algo que está guardado na memória de longa duração, também conhecida como memória semântica. Por exemplo, o slide de uma foto com um dedo deslizando, um logo no canto superior esquerdo que o leva para a página inicial, ou reconehcer que o ícone de um lápis significa editar. 

Sabendo, então, que o reconhecimento dos padrões é feito baseado na experiência de armazenamento de cada ser humano, como uma pessoa pode ser achar suficiente para criar os padrões que serão utilizados por toda uma equipe, local, remota e às vezes até internacional? **Criar padrões é algo extremamente díficil.**

### Guerra contra os frameworks prontos

Um framework pode ser o responsável pelo sucesso do seu site e da sua aplicação e lhe poupar milhares de dólares. Porém, mal utilizado, pode representar o gargalo do desenvolvimento do seu produto e levar o seu projeto ao fracasso.

As pessoas costumam associar a escolha da utilização de um framework ao ganho de tempo. Tem com certeza é a coisa mais crítica dentro de um projeto, principalmente startups. 

Na maioria dos casos, o desenvolvedor não inspeciona o código do framework, passando a criar um outro arquivo CSS para customizar o seu projeto. Em muitos outros casos, o design do projeto é influenciado pelo framework, passando ater limitações quanto à escolha de espaçamentos, grid e outras variações que já estão pre-definidas no framework. Tudo isso é uma inversão de valores quanto a um projeto. Como podemos aceitar que um código de um projeto - que é o *core* da sua aplicação - está sendo definido por um framework terceiro só por agilidade?

Por conta destes pensamentos, **defende-se a criação do seu próprio framework**, em que o time analisará os artefatos presentes na aplicação, padrões de espaçamentos, grids, fontes, palhetas de cores e interações serão os guias para a criação de módulos e um projeto reutilizável e sustentável.

### Organização e Padronização

Pensar em aplicações é muito comum para programadores back-end e até mesmo programadores JavaScript, mas há um grupo muito grande de desenvolvedores front-end que atuam mais nessa camada estrutural de HTML e CSS, por isso não podemos e nem vamos ignorá-los. Vamos começar pensando sobre a organização do projeto.

Para discutirmos sobre organização, é necessário rever seus atuais padrões em projeto. Responda essas perguntas sobre o seu projeto:

- Qual o padrão de comentários por seção e inline?

- As classes do seu projeto são feitas com hífen (-), underscore (__) ou camelCase (aA)?

- Que tipo de formato de cores você usa no seu projeto? Hexadecimal, HSL? RGB? RGBA? Nome da cor?

- Comentários, classes e documentações estão em que idioma? Português? Inglês? Misto?

Para componentizar sua página de maneira sustentável, você precisa explorar ao máximo a organização e padronização do projeto. O problema na verdade está em nosso histórico como desenvolvedores, pois sempre fomos acostumados a desenvolver da seguinte forma:

- Reset (zerar os estilos para iniciar um projeto);

- Estrutura (criar a estrutura base do projeto, geralmente composto por header, main, footer e colunas macro);

- Página (definir customizações para cada página do projeto).

Esse modelo tem sua utilidade, mas desenvolver através de fluxo de páginas é muito cruel com o CSS, pois passamos sempre a incrementar o código, sem observar o que já foi criado e o que pode ser reutilizado. Depois de um tempo, ninguém entenderá o seu CSS, nem você mesmo, passando a viver triste e sozinho, abandonado no mundo das folhas de estilo sem organização.

Para quem está começando, recomenda-se sempre utilizar o modelo mais básico de um projeto organizado:

- Reset (zerar os estilos para iniciar um novo projeto);

- Base (criar a base do projeto, gerlmente composto por header, main, footer e demais estruturas base);

- Modules (define o estilo para cada componente de forma isolada, assim como seus estados de interação);

- Layout (faz as mudanças que um componente ou que a base pode ter para se ajustar a uma página ou contexto específico).
- 
Nesse caso, teoricamente acabamos com o conceito de desenvolvimento de páginas e passamos a tratar qualquer projeto como uma aplicação. Infelizmente, ainda é necessário utilizar um arquivo como o “layout” para funcionar como um coringa, a fim de permitir customizações por questões de layout de página. Mas, quanto menos utilizá-lo, mais modularizado e sustentável será o seu projeto.

Existe ainda uma outra forma de criar o seu modelo de projeto, focado em tematização:

- Reset (zerar os estilos para iniciar um novo projeto);

- Base (criar a base do projeto, gerlmente composto por header, main, footer e demais estruturas base);

- Theme (estilizar o projeto quanto ao visual temático, como cores, fundos e fontes).

Porém, colocar todos os componentes na “base” é bastante confuso e contraproducente. Sendo assim, passei (**Bernard De Luna**) a adotar um modelo mais completo para organização de projeto:

- Reset (zerar os estilos para iniciar um novo projeto);

- Base (criar a base do projeto, gerlmente composto por header, main, footer e demais estruturas base);

- Components (define o estilo para cada componente de forma isolada, assim como seus estados de interação);

- Form (define o estilo para todos os objetos de formulário, assim como seus estados de interação);

- Typography (define o estilo para todos os objetos textuais, assim como fontes externas e *icon fonts*).

O interessante desse modelo é a atenção que você pode dar a um componente específico. Por exemplo, caso um projeto tenha uma gama de variações muito grande de um componente botão, você pode dar independência a ele, isolando-o do item “components”. Alguns exemplos de componentes que, dependendo de suas complexidades e tamanhos, podem virar um projeto próprio:

- buttons

- table

- tabs

- news

- post

- grid


### Nomenclatura

>Uma das coisas em que eu mais presto atenção ao olhar um código é a nomenclatura utilizada para definir as classes de um projeto. Veja bem, digo apenas classes, pois não vejo sentido em utilizar ID para estilização, visto que uma classe pode ser altamente reutilizada e o ID só pode haver um por HTML. Sabendo que cada um pode ter o seu próprio estilo de nomear objetos, mostrarei o meu padrão de nomenclatura para um botão.
(**Bernard De Luna**)

```html
<!-- botão -->
<a class="btn"></a>
```

>Perceba que o botão recebe o nome de `btn`, um prefixo que funciona bem para português ou inglês. Sempre que possível, eu utilizo três letras no prefixo, seguido de hífen para separar as palavras do nome. Veja a seguir:
(**Bernard De Luna**)

```html
<!-- botão -->
<a class="btn btn-primary"></a>
```

Esse é o ponto em que algumas pessoas divergem. Muitos dizem que, a partir do momento em que utilizamos CSS3, podemos utilizar os novos seletores para resgatar o prefixo `btn-`, não precisando repetir a escrita no HTML. Caso você não conheça, eis os dois seletores CSS  citados como soluções:

```css
/* todos os itens que COMECEM na classe com o prefixo "btn-" */
[class^=btn-] {}

/* todos os itens que POSSUEM na classe o prefixo "btn-" */
[class*=btn-] {}
```

Essa solução pode ser muito custosa para o CSS, não só de escrita, aceitação, como também de performance. Assim, prefira-se orientar as classes ao objeto que quer-se estilizar, garantindo melhor performance, intuitividade e documentação dos componentes. Sobre performance, segue uma lista criada por **Steve Souders**, que mostra como os *regex selectors* baseados em atributos são ruins para performance no browser:

1) ID, e.g. `#header`

2) Class, e.g. `.promo`

3) Type, e.g. `div`

4) Adjacent sibling, e.g. `h2 + p`

5) Child, e.g. `li > li`

6) Descendant, e.g. `ul a`

7) Universal, i.e. `*`

8) Attribute, e.g. `[type="text"]`

9) Pseudo-classes/-elements, e.g. `a:hover` 

>Embora o ID seja o seletor mais performático, o fato de não ser reutilizável é o bastante para adotar classes como seletores principais do seu projeto.