import React, { useState } from "react";
import { Box, Button, Flex, useTheme } from "@chakra-ui/react";

import { SelectCustom } from "./SelectCustom";
import { RangeSliderCustom } from "./RangeSliderCustom";

import { carManufacturers, carPrices } from "../constants/selectOptions";
import { fetchByFilters, fetchCars } from "../redux/operations";
import { useDispatch } from "react-redux";
import { switchPage } from "../redux/carsSlice";
import { filterCars } from "../redux/filterSlice";

export const FilterForm = ({ color }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const theme = useTheme();
  const dispatch = useDispatch();

  const formData = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const { brand, price } = formData;
    if (!brand) {
      dispatch(fetchCars({ page: 1 }));
      dispatch(switchPage(1));
      return;
    }
    dispatch(fetchByFilters({ brand }));
  };

  const handleChangeBrand = (e) => {
    const { value } = e.target;
    setSelectedBrand(value);
  };

  const handleChangePrice = (e) => {
    const { value } = e.target;
    setSelectedPrice(value);
    dispatch(filterCars({ price: value }));
  };

  return (
    <Box as="form" mb="50px" mt="25px" onSubmit={formData}>
      <Flex gap={18} justify="center" alignItems="center" flexWrap="wrap">
        <SelectCustom
          options={carManufacturers}
          placeholder="All"
          label="Car brand"
          width={224}
          name="brand"
          onChange={handleChangeBrand}
          value={selectedBrand}
          color={color}
        />
        <SelectCustom
          placeholder="To $"
          options={carPrices}
          label="Price/ 1 hour"
          width={125}
          name="price"
          onChange={handleChangePrice}
          value={selectedPrice}
          color={color}
        />
        <RangeSliderCustom
          min={0}
          max={100}
          step={10}
          trackColor={theme.colors.blue[100]}
          filledTrackColor={theme.colors.blue[200]}
          width={200}
          height="40px"
          label="Сar mileage / km"
          name="mileage"
          color={color}
        />
        <Button
          backgroundColor="#3470FF;"
          borderRadius={12}
          color="#fff"
          mt="auto"
          type="submit"
        >
          Search
        </Button>
      </Flex>
    </Box>
  );
};
