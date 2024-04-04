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
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./Auth/LoginPage";
import GamePage from "./GamePage/GamePage";
import LoadingSvg from "./GamePage/extra/LoadingSvg";
import OnePlayer from "./ComputerPlayer/ComputerPlayer";
import HomePage from "./GamePage/HomePage";

// export const baseURL = "https://roulette-wheel-game.onrender.com/";
export const baseURL = "http://localhost:5040/";

export const key = "vguikkOUno8Xcfvjhkiyb06aIKrejZ9R4h";
const queryParams = new URLSearchParams(window.location.search);
const userId = queryParams.get("id") ? queryParams.get("id") : "6527da15bdfb0b7c39fd700f";
// axios.defaults.headers.common["key"] = key;
const isAuthGet = JSON.parse(sessionStorage.getItem("isAuth"))
const loaderShowGet = JSON.parse(sessionStorage.getItem("loader"))

function App() {
  const socketRef = useRef()

  const [isAuth, setIsAuth] = useState(isAuthGet?.length ? isAuthGet : false)
  const [loaderShow, setLoaderShow] = useState(loaderShowGet?.length ? loaderShowGet : false)
  const navigate = useNavigate()

  useEffect(() => {
    console.log("isAuth", isAuth);
    console.log("isAuth", loaderShow);
    if (isAuth === true && loaderShow === false) {

      const progressBars = document.querySelectorAll('.progress_bar_item');
      progressBars.forEach(progressBar => animateProgressBar(progressBar));
    }
  }, [isAuth, loaderShow]);

  const animateProgressBar = (progressBar) => {
    const speed = 30;
    const item = progressBar.querySelector('.progress');
    const itemValue = parseInt(item.dataset.progress);
    let i = 0;

    const count = setInterval(() => {
      if (i <= itemValue) {
        item.style.width = i + '%';
        progressBar.querySelector('.item_value').innerHTML = i + '%';
      } else {
        clearInterval(count);
        sessionStorage.setItem("loader", true)
        setLoaderShow(loaderShow)
        setTimeout(() => {
          navigate('/game')
        }, 200);
      }
      i++;
    }, speed);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage setIsAuth={setIsAuth} isAuth={isAuth} loaderShow={loaderShow} />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/computerPlayer" element={<OnePlayer />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
