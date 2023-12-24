import "./Jumpscare.css";
import mg1 from "../assets/MG1.jpg";

export default function Jumpscare() {
  return (
    <div className="jumpscare">
      <div className="jumpscare-body">
        <div id="message1">RUN</div>
        <div id="message2">FIGHT</div>
        <img
          src={mg1}
          title="Beware the Mine Grinder"
          alt="Beware the Mine Grinder"
          id="grinder-image"
        />
        <div id="message3">HIDE</div>
        <div id="message4">DIE</div>
      </div>
    </div>
  );
}
