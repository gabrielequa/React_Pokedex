import { PokemonDetail } from "../types/Pokedex";

interface Props {
  dettaglio: PokemonDetail;
}

function DettaglioPokemon({ dettaglio }: Props) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "lightgray",
        color: "black",
      }}
    >
      {/* Nome e Immagine del Pokémon */}
      <div style={{ textAlign: "center" }}>
        <h2 style={{ textTransform: "capitalize", marginBottom: "10px" }}>
          {dettaglio.name}
        </h2>
        <img
          src={dettaglio.sprites.front_default}
          alt={dettaglio.name}
          style={{ width: "180px", height: "180px", objectFit: "contain" }}
        />
      </div>
      <hr style={{ margin: "20px 0" }} />

      {/* Tipo */}
      <h4>Tipo</h4>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {dettaglio.types.map((type, index) => (
          <div
            key={index}
            style={{
              padding: "5px 10px",
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            <p style={{ textTransform: "capitalize", margin: 0 }}>
              {type.type.name}
            </p>
          </div>
        ))}
      </div>
      <hr style={{ margin: "20px 0" }} />

      {/* Caratteristiche */}
      <h4>Caratteristiche</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "10px",
            marginRight: "10px",
            backgroundColor: "#f0f0f0",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          <p>
            <strong>Peso:</strong> {dettaglio.weight / 10} kg
          </p>
        </div>
        <div
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: "#f0f0f0",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          <p>
            <strong>Altezza:</strong> {dettaglio.height / 10} m
          </p>
        </div>
      </div>
      <hr style={{ margin: "20px 0" }} />

      {/* Statistiche */}
      <h4>Statistiche</h4>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
        }}
      >
        {dettaglio.stats.map((stat, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            <p style={{ textTransform: "capitalize", margin: 0 }}>
              {stat.stat.name}: <strong>{stat.base_stat}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DettaglioPokemon;
