import { useEffect, useState } from "react";
import { searchCoin } from "../../services/cryptoApis";

import { RotatingLines } from "react-loader-spinner";

import styles from "./Search.module.css";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]); //faghat boro az to coins ha search kon hamechi nayar
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setCoins([]); //chon gftin text khli edame nade serch ke khali mishe hamchenan chizayi ke peyda karde neshon mide ino gharar midim
    if (!text) {
      setIsLoding(false);
      return;
    } //kein res in mountd status

    const search = async () => {
      try {
        const res = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setCoins(json.coins);
          setIsLoding(false);
        } else {
          alert(json.status.error_meassage);
        } //chon darkhst ha ziyad nashe migim boro faghat oni ke coins dare search kon
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    setIsLoding(true);
    search();

    return () => controller.abort(); //cleanup func
  }, [text]);

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {/* age coins dashtim ya isLoding true bod biya neshon bede */}
      {(!!coins.length || isLoding) && (
        <div className={styles.searchResult}>
          {isLoding && (
            <RotatingLines
              width="50px"
              heigth="50px"
              strokeColor="#3874ff"
              strokeWidth="2"
            />
          )}
          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                <img src={coin.thumb} alt={coin.name} />
                <p>{coin.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
