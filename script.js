const botonEnviar = document.getElementById("enviar");
const lista = document.getElementById("lista");

const storagedItem = JSON.parse(localStorage.getItem("list"));

var idnum = 0;
window.addEventListener("load", cargarStorage);
botonEnviar.addEventListener("click", cambiartexto);
lista.addEventListener("click", removerItemList);

function cambiartexto() {
	idnum++;
	const info = document.getElementById("ingresarDatos").value;
	const itemList = document.createElement("li");
	itemList.id = `id${idnum}`;
	itemList.classList.add("list_item");
	itemList.classList.add("slide-in-elliptic-top-fwd");
	itemList.innerHTML = `<input type="checkbox"> ${info} <button value="id${idnum}" class="close">X</button>`;
	document.getElementById("lista").appendChild(itemList);
	const storageUl = JSON.stringify(lista.innerHTML);
	localStorage.setItem("list", storageUl);
}

function removerItemList(e) {
	if (e.target && e.target.classList.value === "close") {
		let remover = e.target.value;
		document.getElementById(remover).classList.add("fade-out");
		setTimeout(() => {
			document.getElementById(remover).remove();
		}, 500);
		const storageUl = JSON.stringify(
			document.getElementById("lista").innerHTML
		);

		localStorage.setItem("list", storageUl);
	}
}

function cargarStorage() {
	console.log(storagedItem);
	document.getElementById("lista").innerHTML = storagedItem;
}
