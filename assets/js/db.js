"use strict";

window.addEventListener("load", function () {
	const main = document.querySelector("main");
	const menu = document.querySelector("#menu");
	const filter = document.querySelector("#filter");

	class RecolectorDatos {
		constructor(apiUrl) {
			this.apiUrl = apiUrl;
		}

		async getProduct() {
			try {
				const response = await fetch(this.apiUrl);
				if (!response.ok) {
					throw new Error("Fallo en la conexion");
				}
				const products = await response.json();
				return products;
			} catch (error) {
				console.error("Error al obtener los datos", error);
			}
		}
	}

	async function displayCategories() {
		const colector = new RecolectorDatos(
			"https://rene-rlopez.github.io/datadesserts/db.json"
		);
		const categorias = await colector.getProduct();

		categorias.categories.forEach((element) => {
			let item = document.createElement("div");
			item.className = "item";
			let img = document.createElement("img");
			img.src = element.image;
			let title = document.createElement("h3");
			title.textContent = element.name;
			item.append(img, title);
			filter.appendChild(item);
		});
	}

	displayCategories();

	async function displayProducts() {
		const colector = new RecolectorDatos(
			"https://rene-rlopez.github.io/datadesserts/db.json"
		);
		const productos = await colector.getProduct();

		productos.productos.forEach((element) => {
			let card = document.createElement("div");
			card.className = "dessert";
			let img = document.createElement("img");
			img.src = element.image;
			img.loading = 'lazy';
			let title = document.createElement("h3");
			title.textContent = element.name;
			title.className = "title-filter ft-color01";
			let desc = document.createElement("p");
			desc.textContent = element.description;
			desc.className = "desc";
			let tipo = document.createElement("p");
			tipo.textContent = element.category;
			tipo.className = "title-filte filtro";
			card.append(img, title, tipo, desc);
			menu.appendChild(card);
		});
	}

	displayProducts();

	document.addEventListener("keyup", (e) => {
		if (e.target.matches("#text")) {
			document.querySelectorAll(".title-filter").forEach((item) => {
				let parent = item.parentElement;

				item.textContent
					.toLocaleLowerCase()
					.includes(e.target.value.toLocaleLowerCase())
					? parent.classList.remove("filtro")
					: parent.classList.add("filtro");
			});
		}
	});
});