import "./story.css";

function Story(props) {
  return (
    <div>
      <img src={props.imagen} alt={props.username} />
      <h3>{props.username}</h3>
    </div>
  );
}

export default Story;