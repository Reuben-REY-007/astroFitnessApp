import { Route, Routes } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import AccountPage from "./components/pages/accounts/AccountPage";
import Signup from "./components/pages/accounts/Signup";
import { SetStateAction } from "react";
function App() {
  
  return (
    <Routes >
      <Route path="/"  element={<Landingpage />} />
      <Route path="/account"  element={<AccountPage />} />
    </Routes>
  );
}

export default App;
