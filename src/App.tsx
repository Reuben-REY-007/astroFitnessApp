import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import AccountPage from "./components/pages/accounts/AccountPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
