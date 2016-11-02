# Aula 07 - Organizando um Projeto com AngularJS

## Como organizar o código do seu projeto?

**1ª forma: Inline Style**
Tudo no mesmo arquivo. Ou seja, tudo dentro do index.html.

Quando utilizar:
* Projetos muito simples
* Protótipos
* Provas de conceito
* Hello World

```
> app/
    > index.html
    > angular.js
```

**2ª forma: Stereotyped Style**
Os componentes do mesmo tipo juntos.

Quando utilizar:
* Projetos pequenos
* Poucos componentes
* Pouco código em cada componente
* Domínio único

```
> app/
    > css/
        > app.css
    > js/
        > app.js
        > controllers.js
        > directives.js
        > filters.js  
        > services.js
    > lib/
        > angular.js
    > view/
        > login.html
        > lista.html
    > index.html         
```

**3ª forma: Specific Style**
Um arquivo para cada componente.

Quando utilizar:
* Projetos médios
* Muitos componentes
* Número de linhas em cada arquivo já começa a incomodar
* Domínio relativamente extenso

```
> app/
    > css/
        > app.css
    > js/
        > controllers/
            > loginCtrl.js
            > listaCtrl.js
        > directives/
            > panelDirective.js
            > tableDirective.js
        > services/
            > loginService.js
            > listaService.js
        > app.js
    > lib/
        > angular.js
    > view/
        > login.html
        > lista.html
    > index.html             
```

**4ª forma: Domain Style**
Agrupando os arquivos por domínio.

Quando utilizar:
* Projetos grandes
* Utilização de módulos
* Domínio extenso

```
> app/
    > app/
        > app.css
        > app.js
    > login/
        > login.html
        > login.css
        > loginCtrl.js
        > loginService.js
    > lista/
        > lista.html
        > lista.css
        > listaCtrl.js
        > listaService.js
    > shared/
        > panelDirective.js
        > tableDirective.js
    > lib/
        > angular.js
    > index.html            
```