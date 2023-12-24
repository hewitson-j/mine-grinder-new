import { Route, Routes } from "react-router-dom";
import Content from "./Content";
import Jumpscare from "./Jumpscare";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="it" element={<Jumpscare />} />
    </Routes>
  );
}
