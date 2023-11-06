import { Box, FormLabel, Select } from "@chakra-ui/react";
import React from "react";
import { uid } from "uid";

export const SelectCustom = ({
  options,
  placeholder,
  width,
  label,
  name,
  onChange,
  value,
  color,
}) => {
  return (
    <Box w={width}>
      {label && <FormLabel color={color}>{label}</FormLabel>}
      <Select
        placeholder={placeholder}
        name={name}
        onChange={(e) => onChange(e)}
        value={value}
        borderColor={color}
        color={color}
      >
        {options.map((option) => {
          return (
            <option style={{ color: "#000" }} key={uid()} value={option}>
              {option}
            </option>
          );
        })}
      </Select>
    </Box>
  );
};
