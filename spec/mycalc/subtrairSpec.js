describe('Suite de testes da funcionalidade subtração da calculadora', function(){
	
	var mycalc = require('../../src/js/mycalc.js')
	
	it('Deve subtrair dois numeros inteiros, 2 e 5, e retornar -3',function(){
		expect(mycalc.subtrair(2,5)).toEqual(-3);
	});

	it('Deve subtrair dois numeros inteiros, 5 e 3, e retornar 2',function(){
		expect(mycalc.subtrair(5,3)).toEqual(2);
	});

	it('Deve subtrair dois numeros de ponto flutuante, 6.5 e 3.4, e retornar 2.1',function(){
		expect(mycalc.subtrair(6.5,3.4)).toEqual(3.1);
	});
	
	it('Deve subtrair dois numeros de ponto flutuante, 4.55 e 3.45, e retornar 1.10',function(){
		expect(mycalc.subtrair(4.55,3.45)).toEqual(1.10);
	});
});