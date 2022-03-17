import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import MainPage from "./components/views/MainPage/MainPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
