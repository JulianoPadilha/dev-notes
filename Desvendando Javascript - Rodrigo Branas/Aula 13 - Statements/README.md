# Aula 13 - Statements

## Statments

Alguns do mais conhecidos:

**for, if, else, continue, while, switch, break, throw, try** e **catch**

### for

O `for` é dividido em três etapas: uma de inicialização, uma condição de parada e outra de incremento. Lembrando que podemos omitir qualquer uma delas, ou até todas.

EXEMPLO:
```js
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus massa vel facilisis iaculis. Duis malesuada ligula in arcu consectetur vestibulum.";

var toHackerCase = function(text){
    for(var i = 0; i < text.length; i++){
        console.log(text.charAt(i)); //charAt() retorna o primeiro caractere de uma string.
    }
};
toHackerCase(text);
```

### if

```js
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus massa vel facilisis iaculis. Duis malesuada ligula in arcu consectetur vestibulum.";

var toHackerCase = function(text){
    var hackerTextArray = [];
    for(var i = 0; i < text.length; i++){
        if(text.charAt(i) === "o"){
            hackerTextArray.push(0); //Substitui a letra "o" por 0 e e dá um push para o array.
        } else {
            hackerTextArray.push(text.charAt(i));
        }
    }
    return hackerTextArray.join(""); //Junta os elementos de um array em uma string.
};
console.log(toHackerCase(text));
```

Porém, o acesse de if e else pode causar a confusão abaixo. Dificultando a manutenção e leitura

```js
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus massa vel facilisis iaculis. Duis malesuada ligula in arcu consectetur vestibulum.";

var toHackerCase = function(text){
    var hackerTextArray = [];
    for(var i = 0; i < text.length; i++){
        if(text.charAt(i) === "o"){
            hackerTextArray.push(0); 
        } else if (text.charAt(i) === "l"){
            hackerTextArray.push(1);
        } else if (text.charAt(i) === "e"){
            hackerTextArray.push(3);
        } else if (text.charAt(i) === "a"){
            hackerTextArray.push(4);
        } else if (text.charAt(i) === "s"){
            hackerTextArray.push(5);
        } else if (text.charAt(i) === "t"){
            hackerTextArray.push(7);
        } else {
            hackerTextArray.push(text.charAt(i));
        }
    }
    return hackerTextArray.join(""); //Junta os elementos de um array em uma string.
};
console.log(toHackerCase(text));

// L0r3m ip5um d010r 5i7 4m37, c0n53c737ur 4dipi5cing 31i7. V357ibu1um rh0ncu5 m4554 v31 f4ci1i5i5 i4cu1i5. Dui5 m4135u4d4 1igu14 in 4rcu c0n53c737ur v357ibu1um.
```

### Continue

O continue serve para que possamos pular para a próxima iteração do nosso laço. 

```js
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus massa vel facilisis iaculis. Duis malesuada ligula in arcu consectetur vestibulum.";

var toHackerCase = function(text){
    var hackerTextArray = [];
    for(var i = 0; i < text.length; i++){
        if(text.charAt(i) === "o"){
            hackerTextArray.push(0); 
            continue;
        }
        if (text.charAt(i) === "l"){
            hackerTextArray.push(1);
            continue;
        } 
        if (text.charAt(i) === "e"){
            hackerTextArray.push(3);
            continue;
        }
        if (text.charAt(i) === "a"){
            hackerTextArray.push(4);
            continue;
        }
        if (text.charAt(i) === "s"){
            hackerTextArray.push(5);
            continue;
        }
        if (text.charAt(i) === "t"){
            hackerTextArray.push(7);
            continue;
        }
        hackerTextArray.push(text.charAt(i));
    }
    return hackerTextArray.join(""); //Junta os elementos de um array em uma string.
};
console.log(toHackerCase(text));
```

### Switch

```js
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus massa vel facilisis iaculis. Duis malesuada ligula in arcu consectetur vestibulum.";

var toHackerCase = function(text){
    var hackerTextArray = [];
    for(var i = 0; i < text.length; i++){
        switch(text.charAt(i)){
            case "o"
                hackerTextArray.push(0);
                break;
            case "l"
                hackerTextArray.push(1);
                break;
            case "e"
                hackerTextArray.push(3);
                break;
            case "a"
                hackerTextArray.push(4);
                break;
            case "s"
                hackerTextArray.push(5);
                break;
            case "t"
                hackerTextArray.push(7);
                break;
            default:
                hackerTextArray.push(text.charAt(i));
        }
    }
    return hackerTextArray.join(""); //Junta os elementos de um array em uma string.
};
console.log(toHackerCase(text));
```

### While

```js
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus massa vel facilisis iaculis. Duis malesuada ligula in arcu consectetur vestibulum.";

var toHackerCase = function(text){
    var hackerTextArray = [];
    var i = 0;
    while(i < text.length){
        switch(text.charAt(i)){
            case "o"
                hackerTextArray.push(0);
                break;
            case "l"
                hackerTextArray.push(1);
                break;
            case "e"
                hackerTextArray.push(3);
                break;
            case "a"
                hackerTextArray.push(4);
                break;
            case "s"
                hackerTextArray.push(5);
                break;
            case "t"
                hackerTextArray.push(7);
                break;
            default:
                hackerTextArray.push(text.charAt(i));
        }
        i++;
    }
    return hackerTextArray.join(""); //Junta os elementos de um array em uma string.
};
console.log(toHackerCase(text));
```

## Estrutura para tratamento de erros

### Throw

```js
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus massa vel facilisis iaculis. Duis malesuada ligula in arcu consectetur vestibulum.";

var toHackerCase = function(text){
    if(!text) throw"Invalid text!";
    var hackerTextArray = [];
    var i = 0;
    while(i < text.length){
        switch(text.charAt(i)){
            case "o"
                hackerTextArray.push(0);
                break;
            case "l"
                hackerTextArray.push(1);
                break;
            case "e"
                hackerTextArray.push(3);
                break;
            case "a"
                hackerTextArray.push(4);
                break;
            case "s"
                hackerTextArray.push(5);
                break;
            case "t"
                hackerTextArray.push(7);
                break;
            default:
                hackerTextArray.push(text.charAt(i));
        }
        i++;
    }
    return hackerTextArray.join(""); //Junta os elementos de um array em uma string.
};
console.log(toHackerCase(text));
console.log(toHackerCase()); //Invalid text!
```

### Try and Catch

```js
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus massa vel facilisis iaculis. Duis malesuada ligula in arcu consectetur vestibulum.";

var HackerTextError = function(message){
    this.message = message;
    this.name = "HackerTextError";
}

var toHackerCase = function(text){
    if(!text) throw new HackerTextError("Invalid text!");
    var hackerTextArray = [];
    var i = 0;
    while(i < text.length){
        switch(text.charAt(i)){
            case "o"
                hackerTextArray.push(0);
                break;
            case "l"
                hackerTextArray.push(1);
                break;
            case "e"
                hackerTextArray.push(3);
                break;
            case "a"
                hackerTextArray.push(4);
                break;
            case "s"
                hackerTextArray.push(5);
                break;
            case "t"
                hackerTextArray.push(7);
                break;
            default:
                hackerTextArray.push(text.charAt(i));
        }
        i++;
    }
    return hackerTextArray.join(""); //Junta os elementos de um array em uma string.
};
try {
   console.log(toHackerCase()); //Erro: Invalid text!
} catch(e){
    console.log("Erro: " + e.messsage + " " + e.name);
}
console.log(toHackerCase(text));
```