import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LinkBio from "./LinkBio/Page/LinkBio";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LinkBio />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
