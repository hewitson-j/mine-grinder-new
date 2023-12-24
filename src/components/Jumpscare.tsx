import "./Jumpscare.css";
import mg1 from "../assets/MG1.jpg";

export default function Jumpscare() {
  return (
    <div className="jumpscare">
      <div className="jumpscare-body">
        <img
          src={mg1}
          title="Beware the Mine Grinder"
          alt="Beware the Mine Grinder"
          id="grinder-image"
        />
      </div>
    </div>
  );
}
