import './fotoPerfil.css';

function FotoPerfil (props){
    return(
        <>
        <div>
            <img src={props.foto} alt="" class="fotoPerfil"/>
        </div>
        </>
    )
}
export default FotoPerfil;