const contenedor = document.getElementById("contenedor");

// window.addEventListener("load", () => {
// 	const storageItem = JSON.parse(localStorage.getItem("list"));
// 	console.log(storageItem);
// 	document.getElementById("lista").innerHTML = storageItem;
// 	return;
// });

contenedor.addEventListener("click", (e) => {
	if (e.target.id === "enviar") {
		const itemList = document.createElement("li");
		const info = document.getElementById("ingresarDatos").value;
		itemList.classList.add("list_item slide-in-bck-center");
		itemList.innerHTML = `<input type="checkbox"> ${info} <button class="close">X</button>`;
		document.getElementById("lista").appendChild(itemList);
		const storageUl = JSON.stringify(
			document.getElementById("lista").innerHTML
		);
		console.log(storageUl);
		localStorage.setItem("list", storageUl);
	}

	if (e.target.classList.value === "close") {
		console.log("close");
		document.getElementById("lista").removeChild(itemList);
	}
});
