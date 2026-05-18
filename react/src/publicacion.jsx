import { useEffect, useState } from 'react';
import api from './services/api';
import PublicacionDetail from './publicacionDetail.jsx';

function Publicacion() {
    const [gatos, setGatos] = useState([]);
    const [gatoSeleccionado, setGatoSeleccionado] = useState(null);

    useEffect(() => {
        async function obtenerGatos() {
            try {
                const response = await api.get(
                    'images/search?limit=6&has_breeds=1'
                );

                setGatos(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        obtenerGatos();
    }, []);

    if (gatoSeleccionado) {
        return (
            <PublicacionDetail
                imagen={gatoSeleccionado.url}
                breeds={gatoSeleccionado.breeds}
                id={gatoSeleccionado.id}

            />
        );
    }

    return (
        <div className="galeria">
            {gatos.map((gato) => (
                <div key={gato.id}>
                    <img
                        src={gato.url}
                        alt="Gatito"
                        width="200"
                    />

                    <button onClick={() => setGatoSeleccionado(gato)}>
                        Ver detalle
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Publicacion;