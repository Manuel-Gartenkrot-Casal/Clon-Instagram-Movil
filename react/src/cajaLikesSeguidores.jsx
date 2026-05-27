import './cajaLikesSeguidores.css';

function CajaLikeSeguidores(props) {
  return (
    <>
     <div className="cajaLikesSeguidores"> 
        <h3 className="followers">
            <span style={{ display: 'flex', alignItems: 'center' }}>{props.iconoFollow}</span>
            <span>{props.numeroFollow}</span>
        </h3>
        <h3 className="likes">
            <span style={{ display: 'flex', alignItems: 'center' }}>{props.iconoLike}</span>
            <span>{props.numeroLike}</span>
        </h3>
      </div>
    </>
  );
}

export default CajaLikeSeguidores;