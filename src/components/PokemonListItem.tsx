import { Pokemon } from "../types/Pokedex";

interface Props {
  pokemon: Pokemon;
  index: number;
  getDettaglio: () => void;
}

function PokemonListItem({ pokemon, index, getDettaglio }: Props) {
  return (
    <div
      style={{
        border: "solid 1px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        backgroundColor: "lightgray",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        color: "black",
        textAlign: "center",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      // Qui correggiamo per chiamare correttamente la funzione getDettaglio
      onClick={getDettaglio}
    >
      <img
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
          (index + 1) +
          ".png"
        }
        style={{ width: 120 }}
        alt={pokemon.name}
      />
      <p>{pokemon.name.toUpperCase()}</p>
    </div>
  );
}

export default PokemonListItem;
