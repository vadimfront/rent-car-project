import {
  Box,
  Button,
  Heading,
  Image,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { extractLocation } from "../helpers/helpers";
import { useTheme } from "@emotion/react";

export const ModalCar = ({ data, isOpen, onClose }) => {
  const {
    id,
    year,
    model,
    make,
    type,
    img,
    rentalPrice,
    description,
    address,
    rentalCompany,
    mileage,
    accessories,
    functionalities,
    rentalConditions,
  } = data;

  const theme = useTheme();
  const location = extractLocation(address);
  const { country, city } = location;

  const formattedMileage = mileage.toLocaleString();
  const carInfo = [country, city, rentalCompany, type, model, formattedMileage];

  const comfortFeatures = accessories.concat(functionalities);

  const conditions = [
    rentalConditions,
    `Mileage: ${formattedMileage}`,
    `Price: ${rentalPrice}`,
  ];

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pt="40px">
          <ModalCloseButton />
          <ModalBody maxW="462px">
            <Image src={img} alt={make} borderRadius="14px" />
            <Heading
              as="h3"
              display="flex"
              gap={2}
              flexWrap="wrap"
              fontFamily="heading"
              fontWeight="medium"
              fontSize="16px"
              mt="15px"
            >
              {make}
              <Box as="span" color={theme.colors.blue[200]}>
                {model}
              </Box>
              , {year}
            </Heading>
            <List display="flex" flexWrap="wrap" gap="6px" mt="14px">
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
            <Text mt="24px" fontSize="14px">
              {description}
            </Text>
            <Heading as="h4" fontSize="18px" mt="15px">
              Accessories and functionalities:
            </Heading>
            <List display="flex" flexWrap="wrap" gap="6px" mt="15px">
              {comfortFeatures.map((item, index) => (
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
            <Heading as="h4" fontSize="18px" mt="15px">
              Rental Conditions:{" "}
            </Heading>
            <List display="flex" flexWrap="wrap" gap="6px" mt="15px">
              {conditions.map((item) => (
                <ListItem
                  key={item}
                  fontSize="12px"
                  padding="5px 10px"
                  borderRadius="14px"
                  bgColor="#e5e5e5"
                >
                  {item}
                </ListItem>
              ))}
            </List>
            <Button
              as="a"
              href="tel:+380730000000"
              colorScheme="blue"
              mt="15px"
              bg={theme.colors.blue[200]}
            >
              Rental car
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
