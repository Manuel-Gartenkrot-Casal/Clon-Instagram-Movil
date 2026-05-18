function PublicacionDetail(props) {
  return (
    <div className="detail">

      <img
        src={props.imagen}
        alt={props.breeds[0].name}
        width="500"
      />

      <div className="info">
        <h2>{props.breeds[0].name}</h2>
        <h2>{props.id}</h2>
        <p>{props.breeds[0].description}</p>
        <h3>🌍 Origen: {props.breeds[0].origin}</h3>
        <h3>🧠 Temperamento: {props.breeds[0].temperament}</h3>
        <h3>⏳ Esperanza de vida: {props.breeds[0].life_span} años</h3>
        <h3>❤️ Nivel de afecto: {props.breeds[0].affection_level}/5</h3>
        <h3>⚡ Energía: {props.breeds[0].energy_level}/5</h3>
        <button>❤️ Me gusta</button>
        <button>💬 Comentar</button>
        <button>📤 Compartir</button>
      </div>
    </div>
  );
}
export default PublicacionDetail;