import authorPic from "../assets/DH.jpg";
import "./AboutAuthor.css";
import ParagraphSections from "./ParagraphSections";

const paragraphs = [
  `Dave “Huey” Hewitson was born in the 70’s and from an early age loved
        watching movies. Huey’s mom started him off with musicals but as he got
        older, he started watching fantasy like Krull and Willow, sci-fi like
        Wrath of Khan and ROTJ and action, anything with Jean-Claude, Segal or
        Arnold.`,
  `After working at a video store in the summer of 1989, Huey became
        fascinated with the Horror genre, Michael, Freddy and Chuckie being his
        big three. Every night, after Huey closed up, he would bring home a
        horror movie, a box of Hostess Ding Dongs and a gallon of milk. Huey and
        his dad, a funeral director (Phantasm being his dad’s favorite movies),
        would finish all three before the night was over.`,
  `This is Huey’s debut entry in writing. He wanted to create a character
        that would become equal to the 80’s predecessors. “Respectfully, I do
        miss the old campy stuff. Let’s just have some fun.”`,
];

export default function AboutAuthor() {
  return (
    <div className="about" id="about">
      <h2>About the Author</h2>
      <img
        src={authorPic}
        alt="Dave Hewitson"
        title={`Author: Dave "Huey" Hewitson`}
      />
      <ParagraphSections paragraphs={paragraphs} />
    </div>
  );
}
