let tableBody = document.querySelector("#json tbody");

fetch('moviess.json').then((response) => {
    response.json().then((dados) => {
        dados.movies.forEach((movie) => {
            const row = tableBody.insertRow();
            row.insertCell().textContent = movie.Title;
            row.insertCell().textContent = movie.Year;
            row.insertCell().textContent = movie.Released;
            row.insertCell().textContent = movie.Runtime;
            row.insertCell().textContent = movie.Genre;
            row.insertCell().textContent = movie.Director;
            row.insertCell().textContent = movie.Writer;
            row.insertCell().textContent = movie.Actors;
            row.insertCell().textContent = movie.Plot;
            row.insertCell().textContent = movie.Language;
            row.insertCell().textContent = movie.Country;
            row.insertCell().textContent = movie.Awards;
            row.insertCell().textContent = movie.Metascore;
            row.insertCell().textContent = movie.imdbRating;
            row.insertCell().textContent = movie.imdbVotes;
            row.insertCell().textContent = movie.imdbID;
        });
    });
});
