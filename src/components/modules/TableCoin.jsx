import { RotatingLines } from "react-loader-spinner";
import TableRow from "./TableRow";

import styles from "./TableCoin.module.css";

function TableCoin({ coins, isLoding, currency, setChart }) {
  const currencySimbolHandler = (currency) => {
    if (currency === "usd") return "$";
    else if (currency === "eur") return "€";
    else return "¥";
  };

  return (
    <div className={styles.container}>
      {isLoding ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th>Chart</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                coin={coin}
                key={coin.id}
                currencySymbol={currencySimbolHandler(currency)}
                setChart={setChart}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;
