# Web Storage

A API de Web Storage fornece mecanismos para que os navegadores possam armazenar dados através de chave/valor de uma forma mais eficiente que os cookies.

## Conceitos e formas de uso
>A API de Web Storage fornece duas maneiras de armazenar dados:

- `sessionStorage`

O sessionStorage mantém as informações armazenadas por origem e permanece disponível enquanto há uma sessão aberta no navegador(mesmo a página sendo recarregada). Caso o browser seja fechado a sessão será limpa e as informações serão perdidas.

- `localStorage`

O localStorage é muito parecido com o sessionStorage, a diferença é que mesmo que o navegador seja fechado, os dados permanecem armazenados.


Esses mecanismos estão disponíveis a partir das seguintes propriedades `Window.sessionStorage` e `Window.localStorage` (para um maior suporte, o objeto Window implementa os objetos  Window.LocalStorage e Window.SessionStorage) — ao invocar uma dessas propriedades, é criada uma instância do objeto Storage, que fornece métodos para inserir, recuperar e remover os dados.

## Web Storage interfaces

**Storage**
Permite que você insira, recupere e remova dados de um domínio no storage(session ou local).

**Windows**
A API de Web Storage estende o objeto `Window` com duas novas propriedades — `Window.sessionStorage` e `Window.localStorage` —  fornecendo acesso à sessão do domínio atual e local para o objeto Storage respectivamente.

**StorageEvent**
Um evento de storage é chamado em um objeto window do documento quando ocorre uma mudança no storage.

## Propriedades

`Storage.lenght` [apenas leitura]
Retorna um inteiro que representa o número de itens de dados armazenados no objeto de armazenamento.

## Métodos

`Storage.key()`
Retorna o nome da chave passada como parâmetro.

`Storage.getItem()`
Quando passado o nome de uma chave, irá retornar o valor dessa chave.

`Storage.setItem()`
Quando passado o nome de uma chave, irá adicionar a chave no storage ou atualizar o valor da chave caso ela já exista.

`Storage.removeItem()`
Quando passado o nome da chave, irá remover a chave do storage.

`Storage.clear()`
Quando chamado, vai esvaziar todas as chaves fora do armazenamento.

## Navegação privada /modo de navegação anônima

Boa parte dos navegadores atuais suportam a opção de privacidade chamada modo de "Navegação privada ou anônima", que basicamente torna a sessão de navegação privada e não deixa rastros depois que o navegador é fechado. Este modo é incompatível com armazenamento na Web por razões óbvias. Os fabricantes de navegadores estão experimentando com diferentes cenários como lidar com essa incompatibilidade.