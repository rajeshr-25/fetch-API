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

    const setText = (id, text) => document.getElementById(id).innerHTML = text;// Helper function to set inner HTML of an element by ID

    // pokemon sprite
    const pokemonSprite = data.sprites.front_default; // Get the front default sprite URL

    // pokemon type
    const pokemonType = data.types[0].type.name; // Get the first type of the Pokemon
    setText("pokemonType", `type: ${pokemonType}` )// Set the text of the element with ID "pokemonType" to display the Pokemon type

    //pokemon height
    const pokemonHeight = data.height; // Get the height of the Pokemon
    setText("pokemonHeight", `Height: ${pokemonHeight}` )// Set the text of the element with ID "pokemonHeight" to display the Pokemon height

    //pokemon weight
    const pokemonWeight = data.weight; // Get the weight of the Pokemon
    setText("pokemonWeight", `Weight: ${pokemonWeight}` )// Set the text of the element with ID "pokemonWeight" to display the Pokemon weight

    //abilities
    const pokemonAbilities = data.abilities
      .map((ability) => ability.ability.name)
      .join(", "); // Get all abilities of the Pokemon
      setText("pokemonAbilities", `Abilities: ${pokemonAbilities}` )// Set the text of the element with ID "pokemonAbilities" to display the Pokemon abilities

    //moves
    const pokemonMoves = data.moves.map((move) => move.move.name); // Get all moves of the Pokemon
    setText("pokemonMoves", `Moves:
    <div style="max-height:120px;
    overflow-y:auto;
    padding:10px; background:#eee;
    border-radius:8px;
    font-size:14px; ">
    ${pokemonMoves.join(", ")}
    </div>` )// Set the text of the element with ID "pokemonMoves" to display the Pokemon moves in a scrollable div

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
