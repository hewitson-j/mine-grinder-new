import { Navigate, Route, Routes } from "react-router-dom";
import Content from "./Content";
import Jumpscare from "./Jumpscare";
import ErrorPage from "./ErrorPage";
import TermsOfService from "./TermsOfService";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="it" element={<Jumpscare />} />
      <Route path="error" element={<ErrorPage />} />
      <Route path="termsofservice" element={<TermsOfService/>} />
      <Route path="*" element={<Navigate to={"/error"} replace />} />
    </Routes>
  );
}
