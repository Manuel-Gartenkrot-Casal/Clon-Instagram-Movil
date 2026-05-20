import { useEffect, useState } from 'react';
import api from './services/api';
import PublicacionDetail from './publicacionDetail.jsx';
import './publicacion.css';
function Publicacion() {
    const [gatos, setGatos] = useState([]);
    const [gatoSeleccionado, setGatoSeleccionado] = useState(null);

    useEffect(() => {
        async function obtenerGatos() {
            try {
                const response = await api.get(
                    'images/search?limit=12&has_breeds=1'
                );

                setGatos(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        obtenerGatos();
    }, []);

    const handleBack = () => {
        setGatoSeleccionado(null);
    };

    if (gatoSeleccionado) {
        return (
            <>          <button className="volver" onClick={handleBack}> Volver</button>

                <PublicacionDetail
                    imagen={gatoSeleccionado.url}
                    breeds={gatoSeleccionado.breeds}
                    id={gatoSeleccionado.id}

                /></>
        );
    }

  return (
    <>
    <h1>Trending</h1>

    <div className="galeria">
        {gatos.map((gato) => (
            <div className="card" key={gato.id}>
                <img
                    className="foto"
                    src={gato.url}
                    alt="Gatito"
                />
                <div class = "footerPost">
                    <img src="./Perfil.webp" alt="Perfil rinoceronte" />
                    <button onClick={() => setGatoSeleccionado(gato)} >
                        Ver detalle
                    </button>
                </div>
            </div>
        ))}

    </div>
    </>
);
}

export default Publicacion;