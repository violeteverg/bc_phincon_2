const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
let nextPageUrl = null;
let prevPageUrl = null;
let currentUrl = BASE_URL;
let currentPage = 1;
let totalPages = 0;
let startPage = 1;
let endPage = 5;

// Fungsi get api
async function getPokemon(url) {
  const data = await fetch(url).then((res) => res.json());
  totalPages = Math.ceil(data.count / 20);

  nextPageUrl = data.next;
  prevPageUrl = data.previous;

  const getPokemon = data.results;
  const promises = getPokemon.map((pokemon) =>
    fetch(pokemon.url).then((res) => res.json())
  );

  let datas = [];
  const result = await Promise.all(promises);
  result.forEach((data) => {
    datas.push({
      name: data.species.name,
      image: data.sprites.front_default,
    });
  });

  const container = document.getElementById("pokemon-card");
  container.innerHTML = "";

  datas.forEach((data) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add(
      "card",
      "border-2",
      "border-red-500",
      "text-center"
    );
    pokemonCard.innerHTML = `
      <img class="mx-auto w-[200px]" src="${data.image}" alt="${data.name}" />
      <h3 class="font-bold text-white bg-red-500 border-2 border-red-500">${data.name}</h3>
    `;
    container.appendChild(pokemonCard);
  });

  updatePagination();
}

function updatePagination() {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  const jumpPrevButton = document.createElement("div");
  jumpPrevButton.innerHTML = "<<";
  jumpPrevButton.classList.add(
    "min-w-10",
    "p-4",
    "bg-red-500",
    "text-white",
    "rounded-lg"
  );
  jumpPrevButton.addEventListener("click", () => {
    currentPage = 1;
    startPage = 1;
    endPage = 5;
    currentUrl = `${BASE_URL}?offset=0&limit=20`;
    getPokemon(currentUrl);
  });
  paginationContainer.appendChild(jumpPrevButton);

  //prevv button
  const prevButton = document.createElement("button");
  prevButton.id = "prev-btn";
  prevButton.innerText = "<";
  prevButton.classList.add(
    "min-w-10",
    "p-4",
    "bg-red-500",
    "text-white",
    "rounded-lg"
  );
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      currentUrl = `${BASE_URL}?offset=${(currentPage - 1) * 20}&limit=20`;
      getPokemon(currentUrl);
    }
  });
  paginationContainer.appendChild(prevButton);

  console.log("page", currentPage);

  if (currentPage >= 5) {
    startPage = currentPage - 4;
    endPage = currentPage;
  } else if (currentPage < 5) {
    startPage = 1;
    endPage = 5;
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement("a");
    console.log("start Page", i);
    pageButton.href = "#";
    pageButton.innerText = i;
    pageButton.classList.add(
      "min-w-10",
      "bg-red-500",
      "flex",
      "justify-center",
      "p-4",
      "rounded-lg",
      "text-white"
    );
    if (i === currentPage) {
      pageButton.classList.add(
        "active",
        "bg-white",
        "!text-red-500",
        "border",
        "border-red-500"
      );
    }
    pageButton.addEventListener("click", () => {
      currentPage = i;
      currentUrl = `${BASE_URL}?offset=${(i - 1) * 20}&limit=20`;
      getPokemon(currentUrl);
    });
    paginationContainer.appendChild(pageButton);
  }

  //next buttooon
  const nextButton = document.createElement("button");
  nextButton.id = "next-btn";
  nextButton.innerText = ">";
  nextButton.disabled = currentPage === totalPages;
  nextButton.classList.add(
    "min-w-10",
    "p-4",
    "bg-red-500",
    "text-white",
    "rounded-lg"
  );
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      currentUrl = `${BASE_URL}?offset=${(currentPage - 1) * 20}&limit=20`;
      getPokemon(currentUrl);
    }
  });
  paginationContainer.appendChild(nextButton);

  const jumpNextButton = document.createElement("button");
  jumpNextButton.id = "jumpNext-btn";
  jumpNextButton.innerHTML = ">>";
  jumpNextButton.classList.add(
    "min-w-10",
    "p-4",
    "bg-red-500",
    "text-white",
    "rounded-lg"
  );
  jumpNextButton.addEventListener("click", () => {
    currentPage = totalPages;
    currentUrl = `${BASE_URL}?offset=${totalPages * 20 - 20}&limit=20`;
    getPokemon(currentUrl);
  });
  paginationContainer.appendChild(jumpNextButton);
}

getPokemon(currentUrl);
