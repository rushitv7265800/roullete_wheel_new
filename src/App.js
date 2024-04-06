import axios from "axios";
import "./css/Wheel.scss";
import "./css/styles.scss";
import "./css/customStyle.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/newStyle.scss'
import "./css/responsive.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './Auth/ProtectedRoute'
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./Auth/LoginPage";
import GamePage from "./GamePage/GamePage";
import LoadingSvg from "./GamePage/extra/LoadingSvg";
import OnePlayer from "./ComputerPlayer/ComputerPlayer";
import HomePage from "./GamePage/HomePage";

// export const baseURL = "https://roulette-wheel-game.onrender.com/";
export const baseURL = "https://roulette-wheel-game.onrender.com/";

export const key = "vguikkOUno8Xcfvjhkiyb06aIKrejZ9R4h";
const queryParams = new URLSearchParams(window.location.search);
const userId = queryParams.get("id") ? queryParams.get("id") : "6527da15bdfb0b7c39fd700f";
// axios.defaults.headers.common["key"] = key;
function App() {

  return (
    <>
      <Routes>
      <Route  path="/login" element={<LoginPage /> } />
        <Route  path="/" element={<LoginPage />} />
        <Route path="/onlinePlay"  element={<ProtectedRoute Component={GamePage}/>}/>
        <Route path="/home"  element={<ProtectedRoute Component={HomePage}  /> } />
        <Route path="/offlinePlay" element={<ProtectedRoute Component={OnePlayer}/>} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
