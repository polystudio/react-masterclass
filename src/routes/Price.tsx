import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
// import { IHistorical } from "./Chart";
import { PriceData } from "./Coin";

interface PriceProps {
  tickersData: PriceData;
}

interface IPriceRecord {
  name: string;
  value: string;
}

const PriceInfos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;
const InfoCell = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;

  a {
    display: block;
  }
`;
function PriceRecord(record: IPriceRecord) {
  return (
    <>
      <InfoCell>{record.name}</InfoCell>
      <InfoCell>{record.value}</InfoCell>
    </>
  );
}

function Price({ tickersData }: PriceProps) {
  return (
    <div>
      <div>
        Price Info
        <PriceInfos>
          <PriceRecord
            name="All-time high Price"
            value={"$ " + tickersData.quotes.USD.ath_price.toFixed(3)}
          ></PriceRecord>
          <PriceRecord
            name="Price"
            value={"$ " + tickersData.quotes.USD.price.toFixed(3)}
          ></PriceRecord>
          <PriceRecord
            name="One Hour Percent Change"
            value={tickersData.quotes.USD.percent_change_1h + " %"}
          ></PriceRecord>
        </PriceInfos>
      </div>
    </div>
  );
}

export default Price;
