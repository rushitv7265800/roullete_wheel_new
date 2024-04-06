import React, { useEffect, useState } from 'react'
import AvtarImg from '../assets/newIcon/Avatar.png'
import UsersIcon from '../assets/UsersIcon.png'
import WheeSpin from '../GameMain/WheeSpin'
import Frame from '../GameMain/Frame'
import audioPath from "../assets/audio/coinsSound.mp3";
import Coin50 from '../assets/coinButton/lightBlueCoin.png'
import Coin100 from '../assets/coinButton/pinkCoin.png'
import Coin400 from '../assets/coinButton/blueCoin.png'
import Coin800 from '../assets/coinButton/darkRedCoin.png'
import {useNavigate} from 'react-router-dom'
import BackButton from '../assets/newIcon/left-arrow.png'
import Coin1000 from '../assets/coinButton/redCoin.png'
import Coin200 from '../assets/coinButton/darkBlueCoin.png'
import { ToastConent } from '../GameMain/ToastConent'
import CoinBtn from '../GameMain/CoinButton'
import anime from 'animejs'
import WinnerModel from '../GameMain/WinnerModel'

let historyData = [
  {
    "no": 23,
    "color": "red",
    "oddAndEven": "odd"
  },
  {
    "no": 13,
    "color": "black",
    "oddAndEven": "odd"
  },
  {
    "no": 32,
    "color": "red",
    "oddAndEven": "even"
  },
  {
    "no": 2,
    "color": "black",
    "oddAndEven": "even"
  },
  {
    "no": 17,
    "color": "black",
    "oddAndEven": "odd"
  }
]
let arrCoins = [[], [], [], [], [], [], [], []];
let framesTotalMine = [0, 0, 0, 0, 0, 0, 0, 0];
let framesTotalCoins = [0, 0, 0, 0, 0, 0, 0, 0];
let totalBetCoin = 0;
let totalMineBetCoin = 0;
let winningFrames = [];
let resultNo = {
  no: "Spin",
  color: "black",
  oddAndEven: "odd",
};
let winTotal = [];
let updatedUserBalance = false;
let currentGame = {};
const rouletteWheelNumbers = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24,
  16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];
let spinNumber = "Spin"
const gameNumber = [50, 100, 200, 400, 800, 1000];
const getUser = {
  diamond: 20000,
  userName: "User"
}
const getselectedFrames = [{ selectFrame: 1, bit: 0, winner: false },
{ selectFrame: 2, bit: 0, winner: false },
{ selectFrame: 3, bit: 0, winner: false },
{ selectFrame: 4, bit: 0, winner: false },
{ selectFrame: 5, bit: 0, winner: false },
{ selectFrame: 6, bit: 0, winner: false },
{ selectFrame: 7, bit: 0, winner: false },
{ selectFrame: 8, bit: 0, winner: false },]
export default function ComputerPlayer() {
  const [gameCoin, setGameCoin] = useState(gameNumber);
  const [soundOn, setSoundOn] = useState(false)
  const [mineCoin, setMinCoin] = useState(
    [[], [], [], [], [], [], [], []]
  )
  const [resultShow, setResultShow] = useState();
  const [spinButton, setSpinButton] = useState(true)
  const [canPressCoins, setCanPressCoins] = useState(true);
  const [resultOld, setResultOld] = useState();
  const [selectedFrames, setSelectedFrames] = useState(getselectedFrames)
  const [winModelShow, setWinModelShow] = useState();
  const [winnerCoin, setWinnerCoin] = useState(0)
const navigate=useNavigate()
  const [addBitCheck, setAddBitCheck] = useState(false)
  const [winnerFrame, setWinnerFrame] = useState([])
  const [selecetedCoin, setSelectedCoin] = useState(50)
  const [userData, setUserData] = useState(getUser)

  useEffect(() => {
    if (addBitCheck === true) {
      if (spinButton === false) {
        setTimeout(() => {
          console.log("spin...............")
          console.log("winCoin", resultShow)
          winnerFrameSelect(resultShow?.no)
          setTimeout(() => {
            const winningFrames = selectedFrames
              ?.filter((item) => item?.winner)
              ?.map((item) => item?.selectFrame);
            setWinnerFrame(winningFrames)
            const filteredData = winTotal?.filter(item => winningFrames?.includes(item?.fram));
            const totalWinCoin = filteredData.reduce((accumulator, currentValue) => {
              return accumulator + currentValue.totalWinCoin;
            }, 0);
            setWinnerCoin(totalWinCoin)
            setTimeout(() => {
              setWinModelShow(true)
            }, 7150);
          }, 50);
        }, 6000);
      }
    }
    if (winModelShow === true) {
      setTimeout(() => {
        setCanPressCoins(true)
        setWinModelShow(false)
        setAddBitCheck(false)
        setSpinButton(true)
        setMinCoin([[], [], [], [], [], [], [], []])
        setWinnerFrame([])
        setResultShow([])
      }, 1000);
    }

    console.log("spin",spinButton)
    console.log("spin",resultShow)
    console.log("spin",mineCoin)
    console.log("spin",winModelShow)
    console.log("spin",addBitCheck)
  }, [spinButton, resultShow, mineCoin, winModelShow, addBitCheck])

  useEffect(() => {
    console.log("winModelShow", winModelShow)
  }, [winModelShow])

  const winnerFrameSelect = (number) => {

    console.log("number", number)
    function isOdd(num) {
      return num % 2 !== 0;
    }

    // Function to check if a number is even
    function isEven(num) {
      return num % 2 === 0;
    }

    // Function to get the color of the result
    function getColor(number) {
      return isOdd(number) ? 'red' : 'black';
    }
    function isWinner(selectFrame, resultNo) {
      switch (selectFrame) {
        case 1:
          return resultNo >= 1 && resultNo <= 15;
        case 2:
          return resultNo >= 16 && resultNo <= 25;
        case 3:
          return resultNo >= 26 && resultNo <= 36;
        case 4:
          return getColor(resultNo) === 'red';
        case 5:
          return getColor(resultNo) === 'black';
        case 6:
          return isOdd(resultNo);
        case 7:
          return isEven(resultNo);
        default:
          return false;
      }
    }
    const resultNo = number
    const frameData = selectedFrames?.forEach(frame => {
      frame.winner = isWinner(frame.selectFrame, resultNo);
    });
    console.log("winnerGet", frameData)
    setSelectedFrames(frameData)
  }
  const convertToShortForm = (number) => {
    if (number >= 1000) {
      const suffixes = ['', 'k', 'M', 'B', 'T'];
      const magnitude = Math.floor(Math.log10(number) / 3);
      const shortNumber = (number / Math.pow(1000, magnitude)).toFixed(0);

      return shortNumber + suffixes[magnitude]
    }

    return number?.toString();
  };

  const convertCoin = (fram, amount) => {
    let totalWinner;
    switch (fram) {
      case 1:
        totalWinner = amount * 20;
        break;
      case 2:
        totalWinner = amount * 2;
        break;
      case 3:
        totalWinner = amount * 2;
        break;
      case 4:
        totalWinner = amount * 2;
        break;
      case 5:
        totalWinner = amount * 3;
        break;
      case 6:
        totalWinner = amount * 3;
        break;
      case 7:
        totalWinner = amount * 2;
        break;
      case 8:
        totalWinner = amount * 2;
        break;
      default:
        break;
    }
    return totalWinner;
  };
  const getAmount = (coin) => {
    let amount = 0;
    if (coin == gameCoin[0]) amount = gameCoin[0];
    else if (coin == gameCoin[1]) amount = gameCoin[1];
    else if (coin == gameCoin[2]) amount = gameCoin[2];
    else if (coin == gameCoin[3]) amount = gameCoin[3];
    else if (coin == gameCoin[4]) amount = gameCoin[4];
    else if (coin == gameCoin[5]) amount = gameCoin[5];


    return amount;
  };

  const playSoundFunction = async () => {
    if (soundOn) {
      let audio = new Audio(audioPath);
      console.log("soundOn", soundOn)

      audio.volume = soundOn ? 1 : 0;
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
    }
  };


  const clickedCoin2K = (e) => {
    setSelectedCoin(gameCoin[0])
  };
  const clickedCoin5K = (e) => {
    setSelectedCoin(gameCoin[1])
  };
  const clickedCoin10K = (e) => {
    setSelectedCoin(gameCoin[2])
  };
  const clickedCoin20K = (e) => {
    setSelectedCoin(gameCoin[3])
  };
  const clickedCoin50K = (e) => {
    setSelectedCoin(gameCoin[4])
  };
  const clickedCoin1K = (e) => {
    setSelectedCoin(gameCoin[5])
  };
  const clickFrame1 = (e) => {
    if (selecetedCoin >= 0) {
      addBit(selecetedCoin == 0 ? gameCoin[0] : selecetedCoin, 1);
    }
  };

  const clickFrame2 = (e) => {
    if (selecetedCoin >= 0) {
      addBit(selecetedCoin == 0 ? gameCoin[0] : selecetedCoin, 2);
    }
  };

  const clickFrame3 = (e) => {
    if (selecetedCoin >= 0) {
      addBit(selecetedCoin == 0 ? gameCoin[0] : selecetedCoin, 3);
    }
  };

  const clickFrame4 = (e) => {
    if (selecetedCoin >= 0) {
      addBit(selecetedCoin == 0 ? gameCoin[0] : selecetedCoin, 4);
    }
  };

  const clickFrame5 = (e) => {
    if (selecetedCoin >= 0) {
      addBit(selecetedCoin == 0 ? gameCoin[0] : selecetedCoin, 5);
    }
  };

  const clickFrame6 = (e) => {
    if (selecetedCoin >= 0) {
      addBit(selecetedCoin == 0 ? gameCoin[0] : selecetedCoin, 6);
    }
  };


  function getRandomRouletteNumber() {
    const index = Math.floor(Math.random() * rouletteWheelNumbers.length);
    return rouletteWheelNumbers[index];
  }

  const handleSpinButton = () => {
    setSpinButton(false)
    const getNumber = getRandomRouletteNumber()
    spinWheel(getNumber)
    setCanPressCoins(false)
  }
  const addBit = (bitcoin, myframe) => {
    let amount = getAmount(bitcoin);
    playSoundFunction();
    if (bitcoin != -1 && myframe !== 0) {
      if (userData?.diamond - amount >= 0) {
        setAddBitCheck(true)
        userData.diamond -= amount;
        const totalWinCoin = convertCoin(myframe, bitcoin);
        const bitData = {
          bit: bitcoin,
          amount: amount,
          fram: myframe,
          totalWinCoin: totalWinCoin,
        };
        winTotal?.push(bitData);

        const mineCoinData = mineCoin?.map((arr, index) => {
          if (index + 1 === myframe) {
            // Add the coin data to the current frame
            arr?.push({
              coin: bitcoin,
              left: Math.random() * 55 + 5,
              top: Math.random() * 45 + 0,
            });
            framesTotalCoins[index] += getAmount(bitcoin);
            framesTotalMine[index] += getAmount(bitcoin);
          }
          return arr;
        });
        setMinCoin(mineCoinData)
        const initialValue = 0;
        const totalBetCoinGet = framesTotalCoins?.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          initialValue
        );
        const convertCoinBetAdd = convertToShortForm(totalBetCoinGet)
        totalBetCoin = convertCoinBetAdd;

        const initialValueMine = 0;
        const totalMintBet = framesTotalMine?.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          initialValueMine
        );
        const convertCoinBet = convertToShortForm(totalMintBet)
        totalMineBetCoin = convertCoinBet;
      } else {
        ToastConent("You don't enough diamond now, please  recharge first!");
      }
    } else {
      ToastConent("Missing to select any Coin");
    }
  };
  // Wheel



  useEffect(() => {
    if (resultShow) {
      setResultOld(resultShow);
    }
    console.log("resultShow", resultShow)
  }, [resultShow]);
  // socketRef?.current?.off('randomWinnerNumber')?.on('randomWinnerNumber', (number) => {
  //   if (number) {
  //     spinNumber = number
  //   }
  // });


  var totalNumbers = 37;
  var singleSpinDuration = 5000;
  var singleRotationDegree = 360 / totalNumbers;
  var lastNumber = 0;

  // var rouletteWheelNumbers = props.rouletteData.numbers;
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

  const playSoundFunctionWheel = async () => {
    if (soundOn) {
      let audio = new Audio(audioPath);
      audio.volume = soundOn ? 1 : 0;
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
    }
  };


  const spinWheel = async (number) => {
    await playSoundFunctionWheel();
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
    const resultObject = {
      no: number,
      color: colorGet,
      resultOddAndEven: oddOrEven,
    };
    setResultShow(resultObject);
    console.log("resultObject", resultObject)

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
  const handleSoundOn = () => {
    setSoundOn(!soundOn)
    localStorage.setItem("soundOn", soundOn)
  }


  // useEffect(() => {
  //   if (props.startTime === -2) {
  //     var nextNubmer = spinNumber;
  //     if (nextNubmer != null && nextNubmer !== "") {
  //       var nextNumberInt = parseInt(nextNubmer);
  //       spinWheel(nextNumberInt);
  //     }
  //   }

  // }, [spinNumber, props.startTime]);
  // wheel

  return (
    <div className='comPlayer'>
      <div className="game-content">
      <div className="userDetails">
        <div className="user-avtar">
          <img src={AvtarImg} />
        </div>
        <div className='user-balance'>
          <h6>{"Jhone Doee"}</h6>
          <h5>{userData?.diamond ? convertToShortForm(parseInt(userData?.diamond)) : "0"}</h5>
        </div>
       
      </div>
      <div className='backButton' onClick={()=>navigate("/home")}>
          <img src={BackButton}/>
        </div>
        <div className='new-table'>
          <div className='result-show'>
            <div className='result-head'>
              <div className='result-body'>
                <h6>Result</h6>
                <div className="number-showBox">
                  {
                    historyData?.length > 0 ?
                      historyData?.map((item) => {
                        return (
                          <div className="number" style={{ backgroundColor: `${item?.color}` }}>
                            <span>{item?.no}</span>
                          </div>
                        )
                      })
                      :
                      <h5>No Result...</h5>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className='showTableShow'>

            <div className='tableTable'>
              <div className='table-show'>
                <WheeSpin spinButton={spinButton} />
                <div className='tableDataShow'>
                  <div className='tableHead'>
                    <div className='row align-items-center'>
                      <div className='col-9 bet-head'>
                        <div className="showBetHed">
                          <div className="showBetData">
                            <div className="table-headText">
                              <h6>
                                Bet:{" "}
                                <span>
                                  {totalMineBetCoin
                                    ? totalMineBetCoin?.toLocaleString()
                                    : 0}
                                </span>
                              </h6>
                            </div>
                          </div>
                          {/* <div class="betShowStand"></div> */}
                        </div>
                      </div>
                      <div className='col-3 headRght'>
                        <div className='userIconShow'>
                          <img src={UsersIcon} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-body">
                    <div className="table-box">
                      <Frame
                        comPlayer={true}
                        totalBet={"5000"}
                        myBet={"400"}
                        multiCoin={"20"}
                        betDetails={"0"}
                        coins={framesTotalCoins[0]}
                        mine={framesTotalMine[0]}
                        arrCoins={arrCoins[0]}
                        mineCoin={mineCoin[0]}
                        gameCoin={gameCoin}
                        framNo={1}
                        winningFrames={winnerFrame}
                        onClick={clickFrame1}
                      />
                      <Frame
                        comPlayer={true}
                        totalBet={"6000"}
                        myBet={"600"}
                        multiCoin={"2"}
                        betDetails={"1-15"}
                        coins={framesTotalCoins[1]}
                        mine={framesTotalMine[1]}
                        arrCoins={arrCoins[1]}
                        mineCoin={mineCoin[1]}
                        gameCoin={gameCoin}
                        framNo={2}
                        winningFrames={winnerFrame}
                        onClick={clickFrame2}
                      />
                      <Frame
                        comPlayer={true}
                        totalBet={"5000"}
                        myBet={"0"}
                        multiCoin={"2"}
                        betDetails={"16 -25"}
                        coins={framesTotalCoins[2]}
                        mine={framesTotalMine[2]}
                        gameCoin={gameCoin}
                        arrCoins={arrCoins[2]}
                        mineCoin={mineCoin[2]}
                        framNo={3}
                        winningFrames={winnerFrame}
                        onClick={clickFrame3}
                      />
                      <Frame
                        comPlayer={true}
                        totalBet={"4000"}
                        myBet={"0"}
                        multiCoin={"2"}
                        betDetails={"26-36"}
                        coins={framesTotalCoins[3]}
                        mine={framesTotalMine[3]}
                        arrCoins={arrCoins[3]}
                        mineCoin={mineCoin[3]}
                        gameCoin={gameCoin}
                        framNo={4}
                        winningFrames={winnerFrame}
                        onClick={clickFrame4}
                      />
                      <Frame
                        comPlayer={true}
                        totalBet={"5000"}
                        myBet={"0"}
                        multiCoin={"3"}
                        betDetails={"Red"}
                        coins={framesTotalCoins[4]}
                        mine={framesTotalMine[4]}
                        arrCoins={arrCoins[4]}
                        mineCoin={mineCoin[4]}
                        gameCoin={gameCoin}
                        framNo={5}
                        winningFrames={winnerFrame}
                        onClick={clickFrame5}
                      />
                      <Frame
                        comPlayer={true}
                        totalBet={"5000"}
                        myBet={"0"}
                        multiCoin={"3"}
                        betDetails={"Black"}
                        coins={framesTotalCoins[5]}
                        mine={framesTotalMine[5]}
                        arrCoins={arrCoins[5]}
                        mineCoin={mineCoin[5]}
                        gameCoin={gameCoin}
                        framNo={6}
                        winningFrames={winnerFrame}
                        onClick={clickFrame6}
                      />
                      {/* <Frame
                      comPlayer={true}
                    totalBet={"5000"}
                    myBet={"0"}
                    multiCoin={"2"}
                    betDetails={"Odd"}
                    coins={framesTotalCoins[6]}
                    mine={framesTotalMine[6]}
                    arrCoins={arrCoins[6]}
                    mineCoin={mineCoin[6]}
                    gameCoin={gameCoin}
                    framNo={7}
                    winningFrames={winnerFrame}
                    onClick={clickFrame7}
                  />
                  <Frame
                  comPlayer={true}
                    totalBet={"6000"}
                    myBet={"200"}
                    multiCoin={"2"}
                    betDetails={"Even"}
                    coins={framesTotalCoins[7]}
                    mine={framesTotalMine[7]}
                    arrCoins={arrCoins[7]}
                    mineCoin={mineCoin[7]}
                    gameCoin={gameCoin}
                    framNo={8}
                    winningFrames={winnerFrame}
                    onClick={clickFrame8}
                  /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-footer">
              <div className="coin-button-box">
                <CoinBtn
                  src={Coin50}
                  number={gameCoin[0]}
                  funcClick={clickedCoin2K}
                  selectedClass={
                    selecetedCoin == gameCoin[0] ? "selectedCoin" : ""
                  }
                  disabledClass={canPressCoins === false ? "coinDisabled" : ""}
                />
                <CoinBtn
                  src={Coin100}
                  number={gameCoin[1]}
                  funcClick={clickedCoin5K}
                  selectedClass={
                    selecetedCoin == gameCoin[1] ? "selectedCoin" : ""
                  }
                  disabledClass={canPressCoins === false ? "coinDisabled" : ""}
                />
                <CoinBtn
                  src={Coin200}
                  number={gameCoin[2]}
                  funcClick={clickedCoin10K}
                  selectedClass={
                    selecetedCoin == gameCoin[2] ? "selectedCoin" : ""
                  }
                  disabledClass={canPressCoins === false ? "coinDisabled" : ""}
                />
                <CoinBtn
                  src={Coin400}
                  number={gameCoin[3]}
                  funcClick={clickedCoin20K}
                  selectedClass={
                    selecetedCoin == gameCoin[3] ? "selectedCoin" : ""
                  }
                  disabledClass={canPressCoins === false ? "coinDisabled" : ""}
                />
                <CoinBtn
                  number={gameCoin[4]}
                  src={Coin800}
                  funcClick={clickedCoin50K}
                  selectedClass={
                    selecetedCoin == gameCoin[4] ? "selectedCoin" : ""
                  }
                  disabledClass={canPressCoins === false ? "coinDisabled" : ""}
                />
                <CoinBtn
                  number={gameCoin[5]}
                  src={Coin1000}
                  funcClick={clickedCoin1K}
                  selectedClass={
                    selecetedCoin == gameCoin[5] ? "selectedCoin" : ""
                  }
                  disabledClass={canPressCoins === false ? "coinDisabled" : ""}
                />
                <button className={`${spinButton === false ? "disabledSpinBtn" : ""} spin-button`} onClick={() => handleSpinButton()} disabled={spinButton === false ? true : false}>
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
      <WinnerModel open={winModelShow}
        mineTotalWin={winnerCoin}
        resultShow={resultOld}
        setIsOpen={setWinModelShow} />
    </div>
  )
}
