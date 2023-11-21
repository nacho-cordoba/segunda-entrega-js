// Alquiler de autos

let usuario = 'ignaciocordoba';
let contraseña = 'coderhouse';
login = true;

do {
	let ingresoUsuario = prompt('Ingrese su nombre de usuario');
	let ingresoContraseña = prompt('Ingrese su contraseña');
	if (usuario === ingresoUsuario && contraseña === ingresoContraseña) {
		alert('Bienvenido a coder Automobiles');
		login = false;
	} else {
		alert('Usuario y/o contraseña incorrectos. Intente nuevamente');
	}
} while (login);

const Auto = function (marca, modelo, anio, cambios, precio) {
	this.marca = marca;
	this.modelo = modelo;
	this.anio = anio;
	this.cambios = cambios;
	this.precio = precio;
};

let auto1 = new Auto('Audi', 'A4', '2016', 'Manual', 35000);
let auto2 = new Auto('Peugeot', '208', '2019', 'Automático', 27500);
let auto3 = new Auto('Volkswagen', 'Suran', '2023', 'Automático', 39000);
let auto4 = new Auto('Toyota', 'Corolla', '2020', 'Manual', 29700);

let listaAutos = [auto1, auto2, auto3, auto4];

function mostrarAutos(listaAutos, fn) {
	console.log('Autos disponibles para alquiler:');
	for (const auto of listaAutos) {
		fn(auto);
	}
}

mostrarAutos(listaAutos, console.log);

function buscarAuto() {
	let autoBuscado = prompt('Ingresé el auto que desea alquilar').toLowerCase().trim();
	let resultado = listaAutos.filter((x) => x.marca.toLowerCase().includes(autoBuscado));

	if (resultado.length > 0) {
		console.log('Seleccionó:');
		console.table(resultado);
	}
}

buscarAuto();
