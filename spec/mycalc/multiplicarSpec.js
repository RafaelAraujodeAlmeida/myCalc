describe('Suite de testes da funcionalidade multiplicação da calculadora', function(){
	
	var mycalc = require('../../src/js/mycalc.js')
	
	it('Deve multiplicar dois numeros inteiros, 2 e 3, e retornar 6',function(){
		expect(mycalc.multiplicar(2,3)).toEqual(6);
	});

	it('Deve multiplicar dois numeros inteiros, -5 e 3, e retornar -15',function(){
		expect(mycalc.multiplicar(-5,3)).toEqual(-15);
	});

	it('Deve multiplicar dois numeros de ponto flutuante, 1.5 e 3.4, e retornar 5.1',function(){
		expect(mycalc.multiplicar(1.5,3.4)).toEqual(5.1);
	});
	
	it('Deve multiplicar dois numeros de ponto flutuante, 1.50 e 3.42, e retornar 5.13',function(){
		expect(mycalc.multiplicar(1.50,3.42)).toEqual(5.13);

	});
});