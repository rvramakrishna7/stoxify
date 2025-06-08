import React, { useState, useEffect } from "react";
import axios from "axios";



const Holdings = () => {
    const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://stoxify-c63v.onrender.com/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching holdings:", error);
        setAllHoldings([]);
        setLoading(false);
      });
  }, []);

  
  useEffect(() => {
    if (allHoldings.length > 0) {
      console.log("Holdings data:", allHoldings);
    }
  }, [allHoldings]);

  if (loading) {
    return <p>Loading holdings...</p>;
  }

  if (allHoldings.length === 0) {
    return <p>No holdings data available.</p>;
  }
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const profitLoss = curValue - stock.avg * stock.qty;
              const isProfit = profitLoss >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{profitLoss.toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default Holdings;
