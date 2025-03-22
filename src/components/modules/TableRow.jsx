import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { marketChart } from "../../services/cryptoApis";
import styles from "./TableCoin.module.css";

function TableRow({ coin, currencySymbol, setChart }) {
  const {
    id,
    image,
    name,
    symbol,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  } = coin;

  const showChartHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      setChart({ ...json, coin, currencySymbol });
    } catch (error) {
      setChart(null);
    }
  };

  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showChartHandler}>
          <img
            src={image || "fallback-image.svg"}
            alt={name || "Unknown Coin"}
          />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name || "N/A"}</td>
      <td>
        {currencySymbol}
        {current_price ? current_price.toLocaleString() : "N/A"}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {" "}
        {typeof price_change === "number" ? price_change.toFixed(2) : "N/A"}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img
          src={price_change > 0 ? chartUp : chartDown}
          alt={price_change > 0 ? "Price Up" : "Price Down"}
        />
      </td>
    </tr>
  );
}

export default TableRow;
