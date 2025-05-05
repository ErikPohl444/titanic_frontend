import React from "react";
import { TitanicDataType } from "../Constants";

function JSONOutput({ data }: { data: TitanicDataType[] }) {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default JSONOutput;
