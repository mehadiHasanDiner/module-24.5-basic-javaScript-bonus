// How to search a movie and match with movie name
const moviesArray = [
  { id: 1, movieName: "kajer may jorina", budge: 15000000 },
  { id: 2, movieName: "ami keno pago may", budge: 25000000 },
  { id: 3, movieName: "shami keno ashami holo", budge: 30000000 },
  { id: 4, movieName: "kajer sele abdullah", budge: 12000000 },
  { id: 5, movieName: "Abdullah vai jindabad", budge: 89000000 },
  { id: 6, movieName: "abdullah vai no.1 ", budge: 90000000 },
  { id: 7, movieName: "valovashi 100 bar", budge: 250000000 },
  { id: 8, movieName: "Valovashi onekre biya ekjonre", budge: 565700000 },
];

function matchedProducts(name, search) {
  let searchedMovie = [];
  for (name of moviesArray) {
    if (name.movieName.toLowerCase().includes(search.toLowerCase())) {
      searchedMovie.push(name);
    }
  }
  console.log(searchedMovie);
}

const movies = matchedProducts(moviesArray, "Abdullah");
