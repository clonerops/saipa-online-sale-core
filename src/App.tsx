import { Navigate, Route, Routes } from "react-router";

import Layout from "./shared/layout/Layout";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import HomePage from "./pages/home/HomePage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<HomePage />} path="/home" />
      </Route>
    </Routes>
  );
};

export default App;
