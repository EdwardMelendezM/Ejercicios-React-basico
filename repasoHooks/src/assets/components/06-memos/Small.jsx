import { memo } from "react";

const Small = ({ value }) => {
  console.log("Me volvi a mostrar :(");
  return <small>{value}</small>;
};

export default memo(Small);
