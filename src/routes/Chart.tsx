import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

export interface IHistorical {
  time_open: Date;
  time_close: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcf", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: data?.map((price) => ({
                x: price.time_close,
                y: [price.open, price.high, price.low, price.close],
              })),
              name: "Price",
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            // stroke: {
            //   curve: "smooth",
            //   width: 1,
            // },
            grid: { show: false },
            yaxis: { show: false },
            xaxis: {
              categories: data?.map((price) => price.time_close),
              axisBorder: { show: false },
              axisTicks: { show: false },
              type: "datetime",
              labels: { show: false },
            },
            // fill: {
            //   type: "gradient",
            //   gradient: { gradientToColors: ["#27ae60"], stops: [0, 100] },
            // },
            tooltip: {
              y: {
                formatter: (value) => `${value.toFixed(3)}`,
              },
            },
            colors: ["#3498db"],
          }}
        />
      )}{" "}
    </div>
  );
}

export default Chart;
