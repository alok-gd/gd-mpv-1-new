import { useEffect, useState } from "react";
import "./banner.styles.scss";
const Banner = () => {
  const [p, changeP] = useState(1);
  const [w, changeW] = useState(0);
  const [e, changeE] = useState(0);

  const toggleCard = (num) => {
    console.log(num);
    if (num === 1) {
      changeP(1);
      changeW(0);
      changeE(0);
    } else if (num === 2) {
      changeP(0);
      changeW(1);
      changeE(0);
    } else {
      changeP(0);
      changeW(0);
      changeE(1);
    }
  };

  return (
    <div className="banner">
      <div className={p === 1 ? "play-ex" : "play-co"}>
        <p>Play</p>
      </div>
      <div className={w === 1 ? "win-ex" : "win-co"}>
        <p>Win</p>
      </div>
      <div className={e === 1 ? "earn-ex" : "earn-co"}>
        <p>Earn</p>
      </div>
      <button
        onClick={() => {
          toggleCard(1);
        }}
      >
        Change
      </button>
    </div>
  );
};

export default Banner;
