# Aula 06 - Integrando com o back-end por AJAX

Em 1990, no CERN, Berners-Lee construiu o primeiro servidor, protocolo e navegador e também as primeiras páginas dando origem a World Wide Web (ou apenas Web).

No princípio era tudo **estático!**

## AJAX

AJAX -Asynchrnous JavaScript and XML. 

É uma combinação de várias tecnologias!

**HTML, CSS, DOM, JSON, XMLHttpRequest e JavaScript**

Quando falamos em AJAX estamos falando de todas essas tecnologias.

Tudo começou em 1996 quando a Microsoft introduziu o iframe no IE, que era capaz de carregar conteúdo de forma assíncrona. 

Tempo depois, em 1999, a Microsoft lançou o IE5 um componente ActiveX chamado XMLHTTP, que foi a base para a implementação do objeto XMLHttpRequest em outros navegadores como o Mozilla, Chrome e Opera, que utilizamos até hoje!

Exemplo de utilização do XMLHttpRequest para fazer uma chamada Assíncrona usando o método get:

```
var get = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            callback(xhr.responseText, xhr.status);
        }
    };
    xhr.open('GET', url);
    xhr.send(null);
};
```


## Integração com o Back-end utilizando AngularJS

### $http
O serviço $http do Angular permite a realização de requisições utilizando o XMLHttpRequest ou via JSONP:

* get (url, config)
* post (url, data, config)
* put (url, data, config)
* delete (url, config)
* head (url, config)
* jsonp (url, config)

O $http nos oferece a utilização de uma série de métodos. **Estudar sobre API RESTFul**

Injetamos o $http na function do nosso controller: 

```js
angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope, $http) {});
```

