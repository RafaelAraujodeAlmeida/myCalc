describe('Suite de testes da funcionalidade divisão da calculadora', function(){
	
	var mycalc = require('../../src/js/mycalc.js')
	
	it('Deve dividir dois numeros inteiros, 9 e 3, e retornar 3',function(){
		expect(mycalc.dividir(9,3)).toEqual(3);
	});

	it('Deve dividir dois numeros inteiros, -15 e 3, e retornar -5',function(){
		expect(mycalc.dividir(-15,3)).toEqual(-5);
	});

	it('Deve dividir dois numeros de ponto flutuante, 8.5 e 2.5, e retornar 3.4',function(){
		expect(mycalc.dividir(8.5,2.5)).toEqual(3.4);
	});
	
	it('Deve dividir dois numeros de ponto flutuante, 8.73 e 2.25, e retornar 3.88',function(){
		expect(mycalc.dividir(8.73,2.25)).toEqual(3.88);

	});
});