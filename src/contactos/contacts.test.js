const { default: contactos } = require("./contactos");

const expect = global.expect;
describe('contactos', ()=> {
	const variosContactos = [{
		nombre: 'John',
		email: 'john@gmail.com',
		id: 1,
	}, {
		nombre: 'Jane',
		email: 'jane@gmail.com',
		id: 2,
	}, {
		nombre: 'Yolo',
		email: 'yolo@gmail.com',
		id: 3,
	}];
	describe('incluir', () => {
		beforeEach(() => {
			contactos.reiniciar();
		});
		test('Debe agregar un contacto con props {name, email, id}',() => {
			const contacto = variosContactos[0]
			contactos.incluir(contacto)
			// lo que tenemos
			const actual = contactos.db()
			// lo que esperamos
			// Funcion de iguala toEquals
			const esperado = [contacto]
			expect(actual).toEqual(esperado)
		});
		test('Debe mostrar un error si no contiene los props {name, email, id}', () => {
			const contactoMalo = {
				nombre: 'Steven',
				email: 'ray@gmail.com',
			};
			expect(() => contactos.incluir(contactoMalo)).toThrow('Formato inválido')
		});
	});
	describe('borrar', () => {
		beforeEach(() => {
			contactos.reiniciar();
			variosContactos.forEach( x => contactos.incluir(x));
		});
		test('Debe borrar solo el primer contacto', () => {
			contactos.borrar(1)
			const actual = contactos.db()
			const esperado = [
				variosContactos[1]
				,{
					nombre: 'Yolo',
					email: 'yolo@gmail.com',
					id: 3,
				}
			];
			expect(actual).toEqual(esperado)
		});
	});
})












// // https://facebook.github.io/jest/

// import contactos from './contactos';

// // https://facebook.github.io/jest/docs/expect.html
// const expect = global.expect;

// describe('contactos', () => {

// 	const variosContactos = [{
// 		nombre: 'John',
// 		email: 'john@gmail.com',
// 		id: 1,
// 	}, {
// 		nombre: 'Jane',
// 		email: 'jane@gmail.com',
// 		id: 2,
// 	}, {
// 		nombre: 'Yolo',
// 		email: 'yolo@gmail.com',
// 		id: 3,
// 	}];

// 	describe('incluir', () => {
// 		beforeEach(() => {
// 			contactos.reiniciar();
// 		});

// 		test('Debe agregar un contacto con props {nombre, email, id}', () => {
// 			const contacto = variosContactos[0];

// 			contactos.incluir(contacto);

// 			const actual = contactos.db();
// 			const esperado = [contacto];
// 			expect(actual).toEqual(esperado);
// 		});

// 		test('Debe mostrar un error si no contiene los props {nombre, email}', () => {
// 			const contacto = {
// 				nombre: 'Steven',
// 				email: 's@gmail.com',
// 			};

// 			expect(() => contactos.incluir(contacto)).toThrow('Formato inválido');
// 		});

// 	});

// 	describe('borrar', () => {
// 		beforeEach(() => {
// 			contactos.reiniciar();
// 			variosContactos.forEach(contacto => contactos.incluir(contacto));
// 		});

// 		test('Debe borrar solo el primer contacto', () => {
// 			contactos.borrar(1);

// 			const actual = contactos.db();
// 			const esperado = [
// 				variosContactos[1],
// 				variosContactos[2],
// 			];

// 			expect(actual).toEqual(esperado);
// 		});

// 		test('No debe borrar ningún contacto si el id no se encontró', () => {
// 			contactos.borrar(100);
// 			const actual = contactos.db();
// 			const esperado = variosContactos;

// 			expect(actual).toEqual(esperado);
// 		});

// 	});

// 	describe('starwars', () => {

// 		test('Debe contener personajes de starwars', (done) => {
// 			const url = 'http://swapi.co/api/people';
// 			contactos.starwars(url)
// 				.then(count => {
// 					expect(count).toBeGreaterThan(0);
// 					done();
// 				});
// 		});

// 		test('Debe fallar si la url es incorrecta', async () => {
// 			const url = 'http://swapi.co/api/yolo';
// 			const actual = contactos.starwars(url);
// 			await expect(actual).rejects.toEqual(Error('Request failed with status code 404'));
// 		});
// 	});
// });
