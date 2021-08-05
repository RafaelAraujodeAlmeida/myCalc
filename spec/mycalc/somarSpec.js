describe('Suite de testes da funcionalidade soma da calculadora', function(){
	
	var mycalc = require('../../src/js/mycalc.js')
	
	it('Deve somar dois numeros inteiros, 2 e 5, e retornar 7',function(){
		expect(mycalc.somar(2,5)).toEqual(7);
	})
	it('Deve somar dois numeros em formato de texto, 5 e -9, e retornar -4',function(){
		expect(mycalc.somar('5','-9')).toEqual(-4);
	})

	it('Deve somar 1.5 e 3.5 e retornar 5.0', function(){
		expect(mycalc.somar(1.5,3.5)).toEqual(5.0);
	})
	it('Deve somar 1.5 e 3.56 e retornar 5.06', function(){
		expect(mycalc.somar(1.5,3.56)).toEqual(5.06);
	})
});