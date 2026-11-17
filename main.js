import "./style.css";

const images = document.querySelectorAll("img");
const toggle = document.querySelector(".toggle");
const list = document.querySelector(".logos");

images.forEach(img => {
	const fileName = img.getAttribute("src").split("/").pop();
	if (fileName) img.parentElement.dataset.alt = fileName;
});

toggle.addEventListener("change", () =>
	list.classList.toggle("sorted", toggle.checked),
);
