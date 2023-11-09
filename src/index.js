
const returnDados = document.getElementById("movielist")

fetch ("data/movies/movies.json").then(response => {
    response.json().then((movies)=> { 


        movies.map(movies => {
            returnDados.innerHTML =+ `<h1> ${movies.title}</h1>`
            

            const title = document.createElement("h1");
           title.textContent = "Title: " + movies.title


           returnDados.appendChild(title)
   

        })
       



        






















    })
})