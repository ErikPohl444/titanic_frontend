import React, { useState } from "react";
import { TitanicDataType } from "../Constants";
import GenericTable from "./GenericTable";
import log from "../Logging/Logger";

function Counter({ data }: { data: TitanicDataType[] }) {
  const [count, setCount] = useState(0);

  const handleNext = () => {
    if (count < data.length - 80) {
      setCount(count + 1);
    }
    log.info("Counter component incremented count to", count + 1);
  };

  const handlePrev = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    log.info("Counter component decremented count to", count - 1);
  };
  log.info("Counter component rendered with count", count);
  return (
    <div>
      <button onClick={handlePrev} disabled={count === 0}>
        Prev
      </button>
      <span>{count}</span>
      <button onClick={handleNext} disabled={count === data.length - 80}>
        Next
      </button>
      <GenericTable data={data.slice(count, count + 10)} />
    </div>
  );
}

export default Counter;
