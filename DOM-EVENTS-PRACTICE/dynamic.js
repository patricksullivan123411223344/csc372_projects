const names = ["Patrick", "Johnny", "Tim"];
let index = 0;

const namesTarget = document.getElementById("nameTarget");
const button = document.getElementById("changeNameBtn")

button.addEventListener("click", () => {
    index++;

    if (index === names.length) {
        index = 0;
    }

    namesTarget.textContent = names[index];
});

