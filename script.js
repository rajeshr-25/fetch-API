async function fetchData(){
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();// Get the value from input and convert to lowercase
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)// Fetch data from the PokeAPI
        const data = await response.json();// Parse the response as JSON
        const pokemonSprite = data.sprites.front_default;// Get the front default sprite URL
        const imgElement = document.getElementById("PokemonImage");// Get the image element
        imgElement.src = pokemonSprite;// Set the src attribute to the sprite URL
        imgElement.style.display = "block";// Make the image visible

 
        if(!response.ok){// Check if the response is not ok
            throw new Error("Pokemon not found");// Throw an error if the Pokemon is not found
        }
    }
    catch (error) {
        console.error(error);
    }

}