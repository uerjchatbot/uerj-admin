import React from "react";

type Props = {
  data: string[];
};

import { Select } from "./styles";

const SelectOptions = ({ data }: Props) => {
  return (
    <Select>
      {data.map((opt, index) => (
        <option key={`opt_${index}`}>{opt}</option>
      ))}
    </Select>
  );
};

export default SelectOptions;
