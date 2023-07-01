let gridWidth = 0;
const gridContainer = document.getElementById("grid-container");
const changeGridBtn = document.getElementById("btn");

changeGridBtn.addEventListener("click", () => {
	gridWidth = prompt("Enter a number between 1 and 100");
	if (gridWidth > 100 || gridWidth < 1) {
		alert("Please enter a number between 1 and 100");
		gridWidth = 4;
		return;
	}
	gridContainer.innerHTML = "";
	createGrid(gridWidth);
});

function createGrid(gridWidth) {
	for (let i = 0; i < gridWidth * gridWidth; i++) {
		const gridItem = document.createElement("div");
		gridItem.classList.add("grid-item");
		console.log(gridItem.classList[0]);
		gridContainer.append(gridItem);
		gridItem.style.width = `${100 / gridWidth}%`;
		gridItem.style.height = `${100 / gridWidth}%`;
	}
}
