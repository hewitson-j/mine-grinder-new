import { Route, Routes } from "react-router-dom";
import Content from "./Content";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
    </Routes>
  );
}
