const jokeText = document.querySelector(".joke-text");
const newJokeBtn = document.querySelector(".new-joke-btn");
const categoryForm = document.querySelector(".category-form");
const categorySelect = document.querySelector("#category-select");

function fetchJoke(category = "") {
    let url = "https://api.chucknorris.io/jokes/random";

    if(category) {
        url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            jokeText.innerText = data.value;
        })
        .catch(error => console.log(error));
}

// this funct
function fetchCategories() {
    fetch("https://api.chucknorris.io/jokes/categories")
        .then(response => response.json())
        .then(data => {
            data.forEach(category => {
                const option = document.createElement("option");
                option.value = category;
                option.text = category;
                categorySelect.add(option);
            });
        })
        .catch(error => console.log(error));
}

newJokeBtn.addEventListener("click", () => {
    const category = categorySelect.value;
    fetchJoke(category);
});

categoryForm.addEventListener("submit", event => {
    event.preventDefault();
    const category = categorySelect.value;
    fetchJoke(category);
});

fetchCategories();
fetchJoke();
