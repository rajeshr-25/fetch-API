async function fetchData() {
  try {
    //data fetching from pokeapi
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase(); // Get the value from input and convert to lowercase
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    ); // Fetch data from the PokeAPI
    const data = await response.json(); // Parse the response as JSON
    document.querySelector(".details").style.display = "block"; // Show the details section

    // pokemon sprite
    const pokemonSprite = data.sprites.front_default; // Get the front default sprite URL

    // pokemon type
    const pokemonType = data.types[0].type.name; // Get the first type of the Pokemon
    const type = document.getElementById("pokemonType"); // Get the paragraph element for displaying type
    type.innerHTML = `type: ${pokemonType}`; // Set the inner HTML to display the Pokemon type

    //pokemon height
    const pokemonHeight = data.height; // Get the height of the Pokemon
    const height = document.getElementById("pokemonHeight"); // Get the paragraph element for displaying height
    height.innerHTML = `Height: ${pokemonHeight}`; // Set the inner HTML to display the Pokemon height

    //pokemon weight
    const pokemonWeight = data.weight; // Get the weight of the Pokemon
    const weight = document.getElementById("pokemonWeight"); // Get the paragraph element for displaying weight
    weight.innerHTML = `Weight: ${pokemonWeight}`; // Set the inner HTML to display the Pokemon weight

    //abilities
    const pokemonAbilities = data.abilities
      .map((ability) => ability.ability.name)
      .join(", "); // Get all abilities of the Pokemon
    const abilities = document.getElementById("pokemonAbilities"); // Get the paragraph element for displaying abilities
    abilities.innerHTML = `Abilities: ${pokemonAbilities}`; // Set the inner HTML to display the Pokemon abilities

    //moves
    const pokemonMoves = data.moves.map((move) => move.move.name); // Get all moves of the Pokemon
    const moves = document.getElementById("pokemonMoves"); // Get the paragraph element for displaying moves
    moves.innerHTML = `Moves:
    <div style="max-height:120px;
    overflow-y:auto;
    padding:10px; background:#eee;
    border-radius:8px;
    font-size:14px; ">
    ${pokemonMoves.join(", ")}
    </div>`; // Set the inner HTML to display the Pokemon moves

    // Displaying the Pokemon image
    const imgElement = document.getElementById("PokemonImage"); // Get the image element
    imgElement.src = pokemonSprite; // Set the src attribute to the sprite URL
    imgElement.style.display = "block"; // Make the image visible

    if (!response.ok) {
      // Check if the response is not ok
      throw new Error("Pokemon not found"); // Throw an error if the Pokemon is not found
    }
  } catch (error) {
    console.error(error);
  }
}
