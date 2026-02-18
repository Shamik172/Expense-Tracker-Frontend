import {useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import { mountNotifications } from "./components/Notification";

mountNotifications();

function App() {
  const [refreshAuth, setRefreshAuth] = useState(false);

  return (
    <BrowserRouter>
    <Navbar refreshAuth={refreshAuth} />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login setRefreshAuth={setRefreshAuth} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
