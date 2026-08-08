"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
};

export default function CryptoMarket() {
  const [coins, setCoins] = useState<Coin[] | null>(null);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState<Coin | null>(null);
  const [chartData, setChartData] = useState<number[] | null>(null);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data))
      .catch(() => setError(true));
  }, []);

  useEffect(() => {
    if (!selected) {
      setChartData(null);
      return;
    }
    fetch(
      `https://api.coingecko.com/api/v3/coins/${selected.id}/market_chart?vs_currency=usd&days=7`
    )
      .then((res) => res.json())
      .then((data) => setChartData(data.prices.map((p: [number, number]) => p[1])))
      .catch(() => setChartData(null));
  }, [selected]);

  return (
    <section className="mb-16">
      <h3 className="text-lg font-bold mb-6 text-center md:text-left">Supported Assets</h3>
      <div className="flex flex-col gap-3">
        {error && (
          <div className="text-center text-sm text-gray-500 py-4 border border-gray-100 rounded-2xl">
            Failed to load market data.
          </div>
        )}
        {!error && !coins && (
          <div className="text-center text-sm text-gray-500 py-4 border border-gray-100 rounded-2xl">
            Loading real-time data...
          </div>
        )}
        {coins?.map((coin) => {
          const isUp = coin.price_change_percentage_24h >= 0;
          return (
            <button
              key={coin.id}
              onClick={() => setSelected(coin)}
              className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl hover:border-gray-300 hover:shadow-sm transition-all bg-white text-left"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={coin.image}
                  alt={coin.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                  unoptimized
                />
                <div>
                  <div className="font-bold text-sm md:text-base">{coin.name}</div>
                  <div className="text-xs text-gray-500 uppercase">{coin.symbol}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm md:text-base">
                  ${coin.current_price.toLocaleString()}
                </div>
                <div className={`text-xs font-semibold ${isUp ? "text-black" : "text-gray-400"}`}>
                  {isUp ? "+" : ""}
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <div className="bg-white w-full max-w-2xl rounded-[2rem] p-6 md:p-8 h-[60vh] md:h-[500px] flex flex-col shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="text-2xl font-bold capitalize">{selected.name}</h4>
                <p className="text-lg text-gray-500">
                  ${selected.current_price.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 relative w-full">
              {chartData ? (
                <Line
                  data={{
                    labels: chartData.map(() => ""),
                    datasets: [
                      {
                        data: chartData,
                        borderColor:
                          chartData[chartData.length - 1] >= chartData[0]
                            ? "#000000"
                            : "#d1d5db",
                        borderWidth: 2,
                        pointRadius: 0,
                        tension: 0.4,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { enabled: false } },
                    scales: {
                      x: { display: false },
                      y: { display: false },
                    },
                    interaction: { mode: "index", intersect: false },
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">
                  Loading chart...
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
