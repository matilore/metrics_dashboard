import React from "react";
import { AveragesProps } from "./contracts";
import { Average } from "./components";

const Averages = ({ averages }: AveragesProps) => {
  return (
    <>
      {averages.map(({ label, value }) => (
        <Average key={label} label={label} value={value} />
      ))}
    </>
  );
};

export default Averages;
