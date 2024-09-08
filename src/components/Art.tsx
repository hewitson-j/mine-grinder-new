import "./Art.css";

import abismoDeLaPlata from "../assets/AdlP.jpg";
import ghostTown from "../assets/GhostTown.jpg";
import mg2 from "../assets/MG2.jpg";
import shack from "../assets/Shack.jpg";
import tunnel1 from "../assets/Tunnel.jpg";
import tunnel2 from "../assets/Tunnel2.jpg";
import ArtImage from "./ArtImage";

export default function Art() {
  const imagesArray = [
    { name: abismoDeLaPlata, description: "Abismo de la Plata" },
    { name: ghostTown, description: "Abismo de la Plata Town" },
    { name: mg2, description: "The Mine Grinder" },
    { name: shack, description: "Small Shack where the town keeper lives." },
    { name: tunnel1, description: "One of the many tunnels in the mine." },
    { name: tunnel2, description: "Another tunnel of the mine." },
  ];

  return (
    <div className="art" id="art">
      <h2>Illustrations and Artwork</h2>
      <div className="images-body">
        {imagesArray.map((image, index) => {
          return <ArtImage key={index} image={image} />;
        })}
      </div>
    </div>
  );
}
