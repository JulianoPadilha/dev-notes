# Aula 05 - Aplicando Filtros

Os filtros nem sempre **filtram!**

## Filtros
Transformam o resultado de uma expressão, realizando operações como a formatação de data, a conversão de moeda e a ordenação de Array.

Para aplicar um filtro utilizamos *pipe* | e o nome do filtro.

Podemos utilizar mais e um filtro ao mesmo tempo usando o *pipe* para separar, sendo que o resultado de um filtro será aplicado ao outro.

### uppercase
Transforma uma String em letra maiúscula.

### lowercase
Transforma uma String em letra minúscula.

### date
Formata uma data usando máscara.

Formas de usar:

| date - Oct 29, 2016 

Colocando dois pontos podemos passar parâmtros para o filtro com a máscara.

| date:'dd/MM/yyyy HH:mm'

### filter
Filtra um Array com base em um critério.

| filter: critério da busca (geralmente atrelado a um ng-model)

| filter: {nome: criterio da busca} - sendo nome o objeto usado como filtro.

### orderBy
Ordena um Array com base em um critério.

| orderBy: 'parâmetro'

| orderBy: '+parâmetro' - ordena de forma decrescente

| orderBy: '-parâmetro' - ordena de forma ascendente

| orderBy: 'parâmetro': true - ordena de forma decrescente

| orderBy: 'parâmetro': false - ordena de forma ascendente

### currency
Converte um número para moeda.

### number
Formata um número.

### limitTo
Limita um Array ou uma String.


Ainda é possível utilizar filtros no controller por meio da injeção do $filter. **(Pesquisar mais sobre)**
