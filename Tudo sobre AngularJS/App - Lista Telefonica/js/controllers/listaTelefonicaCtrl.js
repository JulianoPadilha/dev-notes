angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = [
		{nome: "Pedro", telefone: "919192819", data: new Date(), operadora: {nome: "Oi", codigo: 12, categoria: "Celular"}, cor: "pink"},//Objetos
		{nome: "Ana", telefone: "9218928198", data: new Date(), operadora: {nome: "Tim", codigo: 12, categoria: "Celular"}, cor: "red"},
		{nome: "Maria", telefone: "829189218", data: new Date(), operadora: {nome: "Vivo", codigo: 12, categoria: "Celular"}, cor: "green"}
	];
	$scope.operadoras = [
		{nome: "Oi", codigo: 12, categoria: "Celular", preco: 2},
		//Objetos
		{nome: "Tim", codigo: 41, categoria: "Celular", preco: 1},
		{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 3},
		{nome: "GVT", codigo: 17, categoria: "Fixo", preco: 2},
		{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 1}
	]; //Criamos um array de operadoras
	$scope.adicionarContato = function(contato){
		$scope.contatos.push(angular.copy(contato)); //push é um método do objeto array do JS.
		delete $scope.contato; //Deleta o objeto da referência e limpa os campos dos inputs.
		$scope.contatoForm.$setPristine();
	}
	$scope.apagarContatos = function(contatos) {
		$scope.contatos = contatos.filter(function(contato) {
			if(!contato.selecionado)
				return contato;
		});
	}
	$scope.isContatoSelecionado = function(contatos) {
		return contatos.some(function(contato){
			return contato.selecionado;
		});
	}
	$scope.ordenarPor = function(campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	}
}); //Localiza um módulo e define um controller