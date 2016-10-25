# Aula 04 - Validando Formulários

## Diretivas

Relembrando: Diretivas são extensões da linguagem HTML que permitem a implementacão de novos comportamentos, de forma declarativa.

### ngRequired
Define um determinado campo como obrigatório.

### $valid e $invalid
Atuam consultando a validade de um campo ou formulário.

### $pristine (virgem, mata intocada) e $dirty (booleans)
Atuam verificando se um formulário ou campo já foi utilizado alguma vez.

### ngMinlength e ngMaxlength
Define o tamanho mínimo e máximo permitido. Isso não é uma máscara, é uma validação. Isso não vai impedir que seja digitado mais caracteres.

### $error
Atua consultando todos os erros de um campo ou formulário. $error é um objeto que contém as validações e osseus respectivos estados.

### ngPattern
Define uma RegExp para validar o campo.

Uma expressão regular em Javascript é declarado entre duas barras. /expressão/;

```html
var regexpTelefone = /^\d({4,5}-\d{4}$/;
regexpTelefone.test("9999-6666");
//true
```

### ngMessages

O ngMessages é um módulo externo ao Angular e que deve ser adicionada na aplicação para que possamos utilizar.

```js
angular.module("listaTelefonica", []); //Cria um módulo
```
