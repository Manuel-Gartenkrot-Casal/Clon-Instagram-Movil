import { useState } from 'react';

function PublicacionDetail(props) {
    const [likes, setLikes] = useState(0);

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
                <h3>Origen: {props.breeds[0].origin}</h3>
                <h3>Temperamento: {props.breeds[0].temperament}</h3>
                <h3>Esperanza de vida: {props.breeds[0].life_span} años</h3>
                <h3>Nivel de afecto: {props.breeds[0].affection_level}/5</h3>
                <button onClick={() => setLikes(likes + 1)}>{likes} Likes</button>
                <div className="comentarios">
                    <h3>Comentarios</h3>
                    <p> <h3>michi_fan123:</h3>Este gato es demasiado lindo ฅ≽^•⩊•^≼ฅ</p>
                    <p><h3>catlover_ok:</h3>Necesito abrazarlo ahora mismo ᨐᵉᵒʷ</p>
                    <p><h3>pastelDePapa777:</h3>me gustan mas los perros🐶</p>
                </div>        
            </div>
        </div>
    );
}
export default PublicacionDetail;