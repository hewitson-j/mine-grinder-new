import "./Home.css";
import bookCover from "../assets/BookCover.jpg";

export default function Home() {
  return (
    <div id="home" className="home">
      <h2>Watch your back...</h2>
      <div className="home-body">
        <img
          src={bookCover}
          alt="Book Cover"
          title="Mine Grinder: A Legacy of Horror"
        />
        <p>
          Mine Grinder is a thriller that grabs you as it chronicles the last
          trip of lifelong friends out for one last hurrah. It is a reverent nod
          to the legacy of the 80’s horror movie genre that will unnerve you as
          you turn the pages. Horror fans will love the bloody misfortune into a
          forbidden mining town’s secret past, Abismo de la Plata, The Silver
          Abyss as it was named.
          <br />
          <br />
          Surrounded by darkness, the friends only have themselves to rely on as
          a mine collapse traps them and a robotic executioner aims to slaughter
          them, one by one. Chased by the cold machine that is as methodical as
          any serial killer in any story that came before. It is a story of pain
          and graphic death that spirals into the weaved web of a historically
          insane genius left from the mine’s past. What secrets does the
          darkness of Abismo de la Plata hold and can they find their way out
          before they become lost to the legend of the Silver Abyss?
        </p>
      </div>
    </div>
  );
}
