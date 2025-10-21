import { useEffect, useState } from "react";
import PokemonListItem from "./components/PokemonListItem";
import DettaglioPokemon from "./components/DettaglioPokemon";
import { Pokedex, Pokemon, PokemonDetail } from "./types/Pokedex";

function App() {
  const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon");
  const [listaPokemon, setListaPokemon] = useState<Pokemon[]>([]);
  const [dettaglioPokemon, setDettaglioPokemon] = useState<PokemonDetail>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Pokedex) => {
        console.log(data);
        setUrl(data.next);
        setListaPokemon(data.results);
      });
  }, []);

  function caricaAltri() {
    fetch(url)
      .then((res) => res.json())
      .then((data: Pokedex) => {
        console.log(data);
        setUrl(data.next);
        setListaPokemon([...listaPokemon, ...data.results]);
      });
  }

  function getDettaglioPokemon(urlDettaglio: string) {
    fetch(urlDettaglio)
      .then((res) => res.json())
      .then((data) => {
        console.log("Dettaglio pokémon: ", data);
        setDettaglioPokemon(data);
        // Scorri in cima alla pagina
        window.scrollTo(100, 100);
      });
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pokédex</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            maxWidth: "50%",
          }}
        >
          {listaPokemon?.map((pokemon, index) => (
            <PokemonListItem
              key={pokemon.name}
              pokemon={pokemon}
              index={index}
              getDettaglio={() => getDettaglioPokemon(pokemon.url)}
            />
          ))}
        </div>

        <div
          style={{
            flex: 1,
            maxWidth: "45%",
            paddingLeft: "20px",
            borderLeft: "solid 1px lightgray",
          }}
        >
          <h4>Dettaglio Pokémon</h4>
          {dettaglioPokemon ? (
            <DettaglioPokemon dettaglio={dettaglioPokemon} />
          ) : (
            <p>Premere su un Pokémon per visualizzare il dettaglio.</p>
          )}
        </div>
      </div>

      <button style={{ margin: "10px" }} onClick={caricaAltri}>
        Carica altri
      </button>
    </>
  );
}

export default App;
