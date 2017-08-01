
const url = "https://api.themoviedb.org/3/discover/movie?api_key=461db800c27fdda30417dbf9e3f33b67&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
const list = document.getElementById("list");

function createTitle(title) {
  const title = document.createElement("h2");
   title.innerHTML = title + "";
  return title;
}

function createImage(imageURL) {
  const image = document.createElement("img");
  image.setAttribute('src', imageURL);
  image.setAttribute('height', 150);
  
  return image;
}

function createItem(movie) {
  const urlImage = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  const image = createImage(urlImage);
  const title = createTitle(movie.title);
  const el = document.createElement("li");
  el.classList.add('item');
  el.appendChild(title);
  el.appendChild(image);
  return el;
}

fetch(url)
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
     json.results.forEach(function (el) {
       list.appendChild(createItem(el));
     });  
})
