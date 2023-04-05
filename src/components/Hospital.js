import "../styles/TripStyles.css";
import HospitalData from "./HospitalData";
import Trip1 from "../assets/kawahputih1.jpeg";
import Trip2 from "../assets/tangkuban1.jpeg";
import Trip3 from "../assets/maribaya.jpeg";
import Trip4 from "../assets/deranch.jpeg";
import Trip5 from "../assets/pulauseribu.jpeg";
import Trip6 from "../assets/dufan.jpeg";
import Trip7 from "../assets/ujunggenteng.jpeg";
import Trip8 from "../assets/canyon.jpeg";
import Trip9 from "../assets/tamansafari.jpeg";

function Trip() {
  return (
    <div className="trip">
      <h1>Hospital Packages</h1>
      {/* <p>You can discover unique destinations using Google Maps.</p> */}
      <div className="tripcard">
        <HospitalData
          image={Trip1}
          heading="ABC"
          text="Text"
          price="$250"
        />
        <HospitalData
          image={Trip2}
          heading="ABC"
          text="Text"
          price="$250"
        />
        <HospitalData
          image={Trip3}
          heading="ABC"
          text="Text"
          price="$250"
        />
        <HospitalData
          image={Trip4}
          heading="ABC"
          text="Text"
          price="$250"
        />
        <HospitalData
          image={Trip5}
          heading="ABC"
          text="Text"
          price="$250"
        />
        <HospitalData
          image={Trip6}
          heading="ABC"
          text="Text"
          price="$250"
        />
        <HospitalData
          image={Trip7}
          heading="ABC"
          text="Text"
          price="$250"
        />
        <HospitalData
          image={Trip8}
          heading="ABC"
          text="Text"
          price="$250"
        />
        <HospitalData
          image={Trip9}
          heading="ABC"
          text="Text"
          price="$250"
        />
      </div>
    </div>
  );
}

export default Trip;
