import "../styles/Destination.css";
import Tangkuban1 from "../assets/tangkuban1.jpeg";
import Tangkuban2 from "../assets/tangkuban2.jpeg";
import Kawahputih1 from "../assets/kawahputih1.jpeg";
import Kawahputih2 from "../assets/kawahputih2.jpeg";
import Dufan1 from "../assets/dufan.jpeg";
import Dufan2 from "../assets/Dufan2.jpeg";

const DestinationData = () => {
  return (
    <>
      <div className="first-des">
        <div className="des-text">
          <h2>ABC</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque massa velit, sollicitudin eget dolor vitae, malesuada consectetur lectus. Cras faucibus sollicitudin suscipit. Quisque eu lectus id lectus volutpat ultricies eu ac quam. Ut ullamcorper sed leo at rhoncus. Ut porta nibh augue, non molestie felis convallis vel. Nam dignissim ante vitae sapien pulvinar, viverra facilisis velit malesuada. Nunc consectetur arcu urna, at vestibulum justo consectetur maximus. Sed quis efficitur sapien. Etiam et turpis eros. Nulla facilisi.
          </p>
        </div>

        <div className="image">
          <img alt="random" src={Tangkuban1} />
          <img alt="random" src={Tangkuban2} />
        </div>
      </div>

      <div className="first-des">
        <div className="des-text">
          <h2>ABC</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque massa velit, sollicitudin eget dolor vitae, malesuada consectetur lectus. Cras faucibus sollicitudin suscipit. Quisque eu lectus id lectus volutpat ultricies eu ac quam. Ut ullamcorper sed leo at rhoncus. Ut porta nibh augue, non molestie felis convallis vel. Nam dignissim ante vitae sapien pulvinar, viverra facilisis velit malesuada. Nunc consectetur arcu urna, at vestibulum justo consectetur maximus. Sed quis efficitur sapien. Etiam et turpis eros. Nulla facilisi.
          </p>
        </div>

        <div className="image">
          <img alt="random" src={Kawahputih1} />
          <img alt="random" src={Kawahputih2} />
        </div>
      </div>

      <div className="first-des">
        <div className="des-text">
          <h2>ABC</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque massa velit, sollicitudin eget dolor vitae, malesuada consectetur lectus. Cras faucibus sollicitudin suscipit. Quisque eu lectus id lectus volutpat ultricies eu ac quam. Ut ullamcorper sed leo at rhoncus. Ut porta nibh augue, non molestie felis convallis vel. Nam dignissim ante vitae sapien pulvinar, viverra facilisis velit malesuada. Nunc consectetur arcu urna, at vestibulum justo consectetur maximus. Sed quis efficitur sapien. Etiam et turpis eros. Nulla facilisi.
          </p>
        </div>

        <div className="image">
          <img alt="random" src={Dufan1} />
          <img alt="random" src={Dufan2} />
        </div>
      </div>
    </>
  );
};

export default DestinationData;
