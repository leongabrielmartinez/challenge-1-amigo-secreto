// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigoIngresado = '';
let amigos = [];

function validarTextoVacio(texto) {
	if (texto != '') {
		return false;
	}
	return true;
}

function agregarAmigo() {
	amigoIngresado = document.getElementById('amigo').value;
	if (validarTextoVacio(amigoIngresado)) {
		alert('Por favor, inserte un nombre.');
	} else {
		amigos.push(amigoIngresado);
		document.getElementById('amigo').value = '';
	}

	actualizarLista(amigos);
}

function actualizarLista() {
	let lista = document.getElementById('listaAmigos');
	lista.innerHTML = '';

	for (let amigo of amigos) {
		let li = document.createElement('li');
		li.textContent = amigo;
		lista.appendChild(li);
	}
}

function sortearAmigo() {
	if (amigos.length === 0) {
		document.getElementById('resultado').innerHTML = 'No hay amigos en la lista.';
		return;
	}

	let indiceAleatorio = Math.floor(Math.random() * amigos.length);
	let amigoSorteado = amigos[indiceAleatorio];

	document.getElementById('resultado').innerHTML = `El amigo seleccionado es: <strong>${amigoSorteado}</strong>`;
}
