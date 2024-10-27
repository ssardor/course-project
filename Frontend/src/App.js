import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TemplatePage from "./pages/TemplatePage";
import FormPage from "./pages/FormPage";
import AdminPage from "./pages/AdminPage";
import CreateFormPage from "./pages/CreateFormPage";
import ProfilePage from "./pages/ProfilePage";
import SearchFormsPage from "./pages/SearchFormsPage";
import PrivateRoute from "./components/PrivateRoute";
import { lightTheme, darkTheme } from "./themes/themes";
import "./App.css";
import CreateTemplatePage from "./pages/CreateTemplatePage";

function App() {
  const [theme, setTheme] = useState("light");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} user={user} />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage isAuthenticated={isAuthenticated} user={user}/>} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterPage onRegister={handleLogin} />} />
            <Route path="/templates/:id" element={<TemplatePage />} />
            <Route path="/forms/:id" element={<FormPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/create-form" element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <CreateFormPage />
              </PrivateRoute>
            } />
            <Route path="/create-template" element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <CreateTemplatePage />
              </PrivateRoute>
            } />
            <Route path="/profile" element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <ProfilePage user={user} />
              </PrivateRoute>
            } />
            <Route path="/search-forms" element={<SearchFormsPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;