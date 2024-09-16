import { Link } from "react-router-dom";
import "./Copyright.css";

export default function Copyright() {
  return (
    <div className="copyright">
      <hr />
      Mine Grinder is a Copyright of David Hewitson, 2022
      <br/>
      <Link to={'/termsofservice'}>{`Terms of Service (Updated 4/1/2024)`}</Link> || <Link to={'/privacypolicy'}>{`Privacy Policy (Updated 4/1/2024)`}</Link>
    </div>
  );
}
