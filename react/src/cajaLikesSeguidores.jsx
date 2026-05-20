import './cajaLikesSeguidores.css';

function CajaLikeSeguidores(props) {
  return (
    <>
      <div className="cajaLikesSeguidores"> 
        <h3 className="followers">{props.iconoFollow}{props.numeroFollow}</h3>
        <h3 className="likes">{props.iconoLike}{props.numeroLike}</h3>
      </div>
    </>
  );
}

export default CajaLikeSeguidores;