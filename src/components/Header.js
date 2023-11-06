import { Box, List, ListItem } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ContainerCustom } from "./Container";

export default function Header() {
  return (
    <Box as="header" bg="#000" pt="15px" pb="15px">
      <ContainerCustom>
        <List display="flex" gap="20px" color="#fff">
          <ListItem>
            <NavLink
              style={({ isActive }) => {
                return {
                  borderBottom: isActive && "1px solid #fff",
                };
              }}
              to="/"
            >
              Home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/catalog"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive && "1px solid #fff",
                };
              }}
            >
              Catalog
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/favorite"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive && "1px solid #fff",
                };
              }}
            >
              Favorite
            </NavLink>
          </ListItem>
        </List>
      </ContainerCustom>
    </Box>
  );
}
