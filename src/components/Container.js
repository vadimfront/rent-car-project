import { Box, Container } from "@chakra-ui/react";
import React from "react";

export const ContainerCustom = ({ children }) => {
  return (
    <Container maxW={1184} w={{ md: 769, lg: 1184 }} centerContent>
      {children}
    </Container>
  );
};
