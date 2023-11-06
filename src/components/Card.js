import {
  Box,
  Button,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { LikeBtn } from "./LikeBtn";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { extractLocation } from "../helpers/helpers";
import { selectFavorite } from "../redux/selectors";

export const Card = ({ cardObj, w, openModal, onClick }) => {
  const {
    id,
    year,
    model,
    make,
    type,
    img,
    rentalPrice,
    address,
    rentalCompany,
    mileage,
  } = cardObj;

  const { favorite } = useSelector(selectFavorite);
  const theme = useTheme();

  const location = extractLocation(address);
  const { country, city } = location;

  const formattedMileage = mileage.toLocaleString();
  const carInfo = [country, city, rentalCompany, type, model, formattedMileage];

  const isFavorite = () => {
    const res = favorite.findIndex((car) => car.id === id);
    return res === -1 ? false : true;
  };

  return (
    <ListItem w={w} key={id}>
      <Box position="relative" w="274px" h="268px" mb="25px">
        <Image
          src={img}
          alt={make}
          h="100%"
          w="100%"
          objectFit="cover"
          borderRadius="14px"
        />
        <LikeBtn
          onClick={() => (onClick ? onClick(cardObj) : null)}
          style={{ position: "absolute", top: 0, right: 0 }}
          color={isFavorite() ? "red" : "#fff"}
        />
      </Box>
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          mb="8px"
        >
          <Heading
            as="h3"
            display="flex"
            gap={2}
            flexWrap="wrap"
            fontFamily="heading"
            fontWeight="medium"
            fontSize="16px"
          >
            {make}
            <Box as="span" color={theme.colors.blue[200]}>
              {model}
            </Box>
            , {year}
          </Heading>
          <Text>{rentalPrice}</Text>
        </Box>
        <List display="flex" flexWrap="wrap" gap="6px">
          {carInfo.map((item, index) => (
            <ListItem
              borderRightWidth="1px"
              borderColor={theme.colors.gray[100]}
              pr="6px"
              fontSize="12px"
              key={item + index}
            >
              {item}
            </ListItem>
          ))}
        </List>
      </Box>
      <Button
        onClick={() => openModal(id)}
        w="100%"
        mt="28px"
        bg={theme.colors.blue[200]}
        fontSize="14px"
        color="#fff"
      >
        Learn more
      </Button>
    </ListItem>
  );
};
