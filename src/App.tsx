import { Route, Routes } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import AccountPage from "./components/pages/accounts/AccountPage";

function App() {
  return (
    <Routes >
      <Route path="/"  element={<Landingpage />} />
      <Route path="/account"  element={<AccountPage />} />
    </Routes>
  );
}

export default App;
