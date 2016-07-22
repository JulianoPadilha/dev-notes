# Aula 07 - Function (Parte 1)

## Function

- A linguagem Javascriot não tem:

	* Classe

	* Construtor

	* Método

	* Módulo

	* Mas tem Função!

- As funções são responsáveis pelo poder da linguagem Javascript pois são capazes de simular todos os elementos acima. 

- Uma função é um objeto que **contém um bloco de código executável**.

- Esse bloco é **isolado**, não sendo possível acessá-lo externamente. 

	* A função é o tipo de estrutura que vai conferir encapsulamento à linguagem Javascript.

- Na linguagem Javascript, as funcões são de **primeira classe**.
	
	* Função de primeira classe é aquela que pode ser **atríbuida a uma variável, passada como parâmetro** ou ser **retornada de uma outra função**.

	* Isso oferece um grande poder em reuso de código.

### Criando funções

- Function Declaration

![](imagens/function_declaration.png)

- Function Expression

![](imagens/function_expression.png)

- Named Function Expression

	* O nome da função pode ser útil pois aparece no stack trace, listas de breakpoints e demais ferramentas de debbuging.

![](imagens/named_function_expression.png)

### Qual é a diferença entre function **declaration** e **expression**?

- Function Declaration: **A função é carregada antes do código ser interpretado**

```
soma(2, 2) //4

function soma(a, b) {
	return a + b;
}
```

- Function Expression: **A função é carregada durante a interpretação do código**

```
soma(2, 2) //soma is not defined

var soma = function(a, b) {
	return a + b;
}
```

## Invocando uma função

### Invocando uma função diretamente no escopo **global**

- Invocando uma função **diretamente**

![](imagens/invocando_function_diretamente.png)

- Invocando uma função como **parâmetro**

![](imagens/invocando_function_parametro.png)

PS: É muito comum passar funções por parâmetro. Isso é conhecido como Lambda.

- Invocando o **retornando** de uma função

![](imagens/invocando_returno_de_uma_funcao.png)


### Invocando uma função por meio de um **Objeto**

- Utilizando uma função como método, declarada dentro do objeto.

![](imagens/invocando_funcao_meio_objeto.png)

- Utilizando uma função externalizada dentro do objeto.

![](imagens/invocando_funcao_externalizada_meio_objeto.png)


### Invocando uma função com **call** e **apply**

- **call e apply**

	* Toda função possui os métodos call() e apply().

	* Eles são utilizados para indicar em qual escopo uma função deve ser executada.

	* A diferença é basicamente a forma como é utilizado:

		* função.call(escopo, parametro1, parametro2)

		* função.apply(escopo, parametros)

- Invocando uma função com call

![](imagens/invocando_function_with_call.png)

- Invocando uma função com apply

![](imagens/invocando_function_with_apply.png)

	* No apply os parâmetros são passados como um array.


### Invocando uma função por meio do operador **new**

- Funções Fábrica vs. Funções Construtora

![](imagens/funcoes_fabrica_vs_funcoes_construtoras.png)

- **Não esqueça de utilizar o operador new quando utilizar funções construtoras**


### Closures 

- Significado: Encerramento, fechamento, encarceramento.. 

- Retornando uma função dentro de outra função

![](imagens/exemplo_closures.png)

