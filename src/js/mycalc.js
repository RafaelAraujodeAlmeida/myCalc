var mycalc = {
	somar : function(n1,n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);
		var resultado = n1 + n2;

		return Math.round(resultado * 100) / 100;
	},


	subtrair: function(n1,n2){
		var resultado = n1 - n2;

		return Math.round(resultado * 100) / 100;

	},

	multiplicar: function(n1,n2){

		var resultado = n1 * n2;

		return Math.round(resultado * 100) / 100;
	},


	dividir : function(n1,n2){

		var resultado = n1 / n2;

		return Math.round(resultado * 100) / 100;
	}
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
	module.exports = mycalc;
}