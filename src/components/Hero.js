import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import heroImage from "../assets/images/hero-bg.jpg";
import { FilterForm } from "./FilterForm";
import { ContainerCustom } from "./Container";

export const Hero = () => {
  return (
    <Box backgroundImage={heroImage} bgSize="cover" pt="200px" pb="200px">
      <ContainerCustom>
        <Heading as="h1" color="#fff" fontSize="60px">
          Find the Best Car
        </Heading>
        <Text color="#fff" fontSize="25px">
          Identify the optimal solution and move forward!
        </Text>
      </ContainerCustom>
      <FilterForm color="#fff" />
    </Box>
  );
};
