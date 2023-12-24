import "./Jumpscare.css";
import mg1 from "../assets/MG1.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Jumpscare() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10500);
  }, [navigate]);

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
