import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "../css/styles.scss";
import WinCoin from "../assets/winRibbin.png";
import RedChip from "../assets/redChip.png";
import GreenChip from "../assets/greenChip.png";
import { ReactComponent as CloseIcon } from "../assets/CloseIcon.svg";
import BlackChip from "../assets/blackChip.png";

export default function WinnerModel({
  open,
  locked,
  onClose,
  children,
  resultShow,
  mineTotalWin,
  setIsOpen,
  ...props
}) {
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    let timer;

    const decrementCount = () => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    };

    if (open && seconds > 0) {
      timer = setInterval(decrementCount, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [seconds, open]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (open && !event.target.closest(".winnerModel-bg")) {
        setIsOpen(false);
      }
    };
    if (open) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open, setIsOpen]);

  return (
    <>
      <div className="winnerModel" style={{ display: `${open === true ? "block" : "none"}` }}>
        <div className="winnerBg"></div>
        <div className="winnerModel-bg">
          <div className="modelWin">
            <div className="model-headWin">
              <img src={WinCoin} />
              {/* <div className="time-count">
                           {seconds}
                </div> */}
            </div>
            <div className="model-bodyWin">
              <div className="winner-fram" style={{ backgroundImage: `url(${resultShow?.color == "red" ? RedChip : resultShow?.color == "black" ? BlackChip : resultShow?.color == "green" ? GreenChip : GreenChip})` }}>
                <h6>
                  <span style={{ color: `${resultShow?.color == "red" ? "red" : resultShow?.color == "black" ? "black" : resultShow?.color == "green" ? "green" : "green"}` }}>{resultShow?.no}</span>
                </h6>
              </div>
              <h5>My WinCoin: <span>{mineTotalWin ? mineTotalWin?.toLocaleString() : 0}</span></h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
