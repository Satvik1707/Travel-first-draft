import "../styles/TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="random" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <button>{props.price}</button>
    </div>
  );
}

export default TripData;
