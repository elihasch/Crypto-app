import { useState } from "react";
import { convertData } from "../../helpers/convertData";
import styles from "./Chart.module.css";
import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts"; //to ketabkhone hastesh

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        x
      </span>
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className={styles.types} onClick={typeHandler}>
          <button className={type === "prices" ? styles.selected : null}>
            prices
          </button>
          <button className={type === "market_caps" ? styles.selected : null}>
            market_caps
          </button>
          <button className={type === "total_volumes" ? styles.selected : null}>
            total_volumes
          </button>
        </div>
        <div className={styles.datails}>
          <div>
            <p>prices:</p>
            <span>
              {chart.currencySymbol}
              {chart.coin.current_price}
            </span>
          </div>
          <div>
            <p>ATH:</p>
            <span>
              {chart.currencySymbol}
              {chart.coin.ath}
            </span>
          </div>
          <div>
            <p>Market Cap:</p>
            <span>
              {chart.currencySymbol}
              {chart.coin.market_cap}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={300} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <CartesianGrid stroke="#404042" />
        <XAxis dataKey="date" hide />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
