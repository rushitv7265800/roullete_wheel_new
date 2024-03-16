import React, { useEffect, useState } from "react";
import WheeSpin from "./WheeSpin";
import TableContent from "./TableContent";
import anime, { set } from "animejs";
import { map, zip, fromEvent, pipe, withLatestFrom } from "./Observable";
import WinnerModel from "./WinnerModel";
import audioPath from "../assets/audio/wheel.mp3";
import ShopIcon from '../assets/shop (1).png'
import ExitGameIcon from '../assets/ExitGame.png'
import {ReactComponent as SoundMute} from '../assets/soundMute.svg'
import {ReactComponent as SoundUp} from '../assets/soundUp.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import NewTable from "../GamePage/NewGame/NewTable";
import ShopModel from "./ShopModel";

let spinNumber = "Spin"
export default function GameTable(props) {
  const resultObjDeflut = {
    resultNo: "0",
    resultColor: "#06562c",
    resultOddAndEven: "",
  };


  const [resultShow, setResultShow] = useState(resultObjDeflut);
  const [shopModelShow,setShopModelShow]=useState(false)
  const [resultOld, setResultOld] = useState(resultObjDeflut);
  const {
    userData,
    socketRef,
    number,
    rouletteData,
    setIsOpen,
    historyRecord,
    muteSound,
    setMuteSound,
    isOpen,
    startTime,
    isActive,
    setGameCoin,
    gameCoin
  } = props;
  const [spinStart, setSpinStart] = useState();

  useEffect(() => {
    if (resultShow) {
      setResultOld(resultShow);
    }
  }, [resultShow]);
  socketRef?.current?.off('randomWinnerNumber')?.on('randomWinnerNumber', (number) => {
    if (number) {
      spinNumber = number
    }
  });


  var totalNumbers = 37;
  var singleSpinDuration = 5000;
  var singleRotationDegree = 360 / totalNumbers;
  var lastNumber = 0;

  var rouletteWheelNumbers = props.rouletteData.numbers;
  const getRouletteIndexFromNumber = (number) => {
    return rouletteWheelNumbers.indexOf(parseInt(number));
  };
  const nextNumber = (number) => {
    var value = number;
    return value;
  };
  const getRotationFromNumber = (number) => {
    var index = getRouletteIndexFromNumber(number);
    return singleRotationDegree * index;
  };

  const getRandomEndRotation = (minNumberOfSpins, maxNumberOfSpins) => {
    var rotateTo = anime.random(
      minNumberOfSpins * totalNumbers,
      maxNumberOfSpins * totalNumbers
    );
    return singleRotationDegree * rotateTo;
  };

  const getZeroEndRotation = (totalRotaiton) => {
    var rotation = 360 - Math.abs(totalRotaiton % 360);
    return rotation;
  };

  const getBallEndRotation = (zeroEndRotation, currentNumber) => {
    return Math.abs(zeroEndRotation) + getRotationFromNumber(currentNumber);
  };

  const getBallNumberOfRotations = (minNumberOfSpins, maxNumberOfSpins) => {
    var numberOfSpins = anime.random(minNumberOfSpins, maxNumberOfSpins);
    return 360 * numberOfSpins;
  };

  const getRouletteWheelColor = (index) => {
    const i = index >= 0 ? index % 37 : 37 - Math.abs(index % 37);
    return i == 0 ? "green" : i % 2 == 0 ? "red" : "black";
  };

  function checkOddOrEven(index) {
    return index % 2 === 0 ? "even" : "odd";
  }

  const playSoundFunction = async () => {
    let audio = new Audio(audioPath);
    audio.volume = muteSound ? 0 : 1;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      try {
        await playPromise;
        // Audio started playing
      } catch (error) {
        // Handle potential errors
        console.error("Error playing audio:", error);
      }
    }
  };

  const spinWheel = async (number) => {
    await playSoundFunction();
    const bezier = [0.165, 0.84, 0.44, 1.005];
    var ballMinNumberOfSpins = 2;
    var ballMaxNumberOfSpins = 4;
    var wheelMinNumberOfSpins = 2;
    var wheelMaxNumberOfSpins = 4;

    var currentNumber = nextNumber(number);

    var lastNumberRotation = getRotationFromNumber(lastNumber.toString());

    var endRotation = -getRandomEndRotation(
      ballMinNumberOfSpins,
      ballMaxNumberOfSpins
    );
    var zeroFromEndRotation = getZeroEndRotation(endRotation);
    var ballEndRotation =
      getBallNumberOfRotations(wheelMinNumberOfSpins, wheelMaxNumberOfSpins) +
      getBallEndRotation(zeroFromEndRotation, currentNumber);
    const colorGet = getRouletteWheelColor(number);
    const oddOrEven = checkOddOrEven(number);
    setTimeout(() => {
      const resultObject = {
        resultNo: number,
        resultColor: colorGet,
        resultOddAndEven: oddOrEven,
      };
      setResultShow(resultObject);
    }, 5000);

    anime.set([".layer-2", ".layer-4"], {
      rotate: function () {
        return lastNumberRotation;
      },
    });
    // reset zero
    anime.set(".ball-container", {
      rotate: function () {
        return 0;
      },
    });

    anime({
      targets: [".layer-2", ".layer-4"],
      rotate: function () {
        return endRotation; // random number
      },
      duration: singleSpinDuration, // random duration
      easing: `cubicBezier(${bezier.join(",")})`,
      complete: function (anim) {
        lastNumber = currentNumber;
      },
    });
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    let translateYValues = [
      { value: 0, duration: 2000 },
      { value: 20, duration: 1000 },
      { value: 25, duration: 900 },
      { value: 50, duration: 1000 },
    ];

    if (screenWidth <= 576) {
      translateYValues = [
        { value: 29, duration: 2000 },
        { value: 30, duration: 1000 },
        { value: 40, duration: 900 },
        { value: 50, duration: 1000 },
      ];
    }
    anime({
      targets: ".ball-container",
      translateY: translateYValues,
      rotate: [{ value: ballEndRotation, duration: singleSpinDuration }],
      loop: 1,
      easing: `cubicBezier(${bezier.join(",")})`,
    });
  };

  useEffect(() => {
    if (props.startTime === -2) {
      var nextNubmer = spinNumber;
      if (nextNubmer != null && nextNubmer !== "") {
        var nextNumberInt = parseInt(nextNubmer);
        spinWheel(nextNumberInt);
      }
    }

  }, [spinNumber, props.startTime]);

  return (
    <>
      <div className="buttonMetnuTop">
        <div className="buttonBox">
          <button className="buttonIcon" onClick={()=>setShopModelShow(true)}><img src={ShopIcon} /></button>
          <button className="buttonIcon">{true ? <SoundUp/> :<SoundMute/>}</button>
          <button className="buttonIcon "><img src={ExitGameIcon} /></button>
        </div>
      </div>
      <NewTable
        startTime={props.startTime}
        userData={userData}
        socketRef={socketRef}
        resultShow={resultShow}
        isActive={isActive}
        openModel={isOpen}
        setGameCoin={setGameCoin}
        gameCoin={gameCoin}
        setMuteSound={setMuteSound}
        muteSound={muteSound}
        setIsOpenModel={setIsOpen}
        resultOld={resultOld}
      />
      <ShopModel setShopModelShow={setShopModelShow} shopModelShow={shopModelShow} userData={userData}/>
    </>
  );
}
