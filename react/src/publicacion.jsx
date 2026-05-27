import { useEffect, useState } from 'react';
import api from './services/api';
import PublicacionDetail from './publicacionDetail.jsx';
import './publicacion.css';
import perfilImg from "./images/Perfil.webp";
import Loader from './loader.jsx';

function Publicacion() {
    const [gatos, setGatos] = useState([]);
    const [gatoSeleccionado, setGatoSeleccionado] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function obtenerGatos() {
            try {
                const response = await api.get(
                    'images/search?limit=12&has_breeds=1'
                );
                setGatos(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        obtenerGatos();
    }, []);

    const handleBack = () => {
        setGatoSeleccionado(null);
    };

    if (gatoSeleccionado) {
        return (
            <>
                <button className="volver" onClick={handleBack}>Volver</button>
                <PublicacionDetail
                    imagen={gatoSeleccionado.url}
                    breeds={gatoSeleccionado.breeds}
                    id={gatoSeleccionado.id}
                />
            </>
        );
    }

    if (loading) {
        return <Loader />;
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
                        <div className="footerPost">
                            <img src={perfilImg} alt="Perfil rinoceronte" />
                            <button onClick={() => setGatoSeleccionado(gato)}>
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