import AboutAuthor from "../about/AboutAuthor";
import Art from "../art/Art";
import Buy from "../buy/Buy";
import Copyright from "./Copyright";
import Home from "../Home";

export default function Body() {
  return (
    <main>
      <Home />
      <AboutAuthor />
      <Art />
      <Buy />
      <Copyright />
    </main>
  );
}
