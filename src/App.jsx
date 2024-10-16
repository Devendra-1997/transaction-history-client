import { Route, Routes } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignupPage from "./pages/signupPage";
import LoginPage from "./pages/loginPage";
import TransactionPage from "./pages/transactionPage";
import PrivateRoutes from "./components/privateRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/transactions"
          element={
            <PrivateRoutes>
              <TransactionPage />
            </PrivateRoutes>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
