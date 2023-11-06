import { Button, List } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Card } from "./Card";
import { ContainerCustom } from "./Container";
import { selectCars } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { switchPage } from "../redux/carsSlice";

export const CardList = ({
  cards,
  col,
  gap,
  openModal,
  onClick,
  isBtnHide,
}) => {
  const { loading, isLastPage } = useSelector(selectCars);
  const dispatch = useDispatch();
  const width = `calc((100% - ${gap * col}px)/${col})`;

  const loadMoreOnClick = () => {
    dispatch(switchPage());
  };

  return (
    <ContainerCustom>
      <List display="flex" gap={29} flexWrap="wrap" width="100%" mt="40px">
        {cards.map((card) => {
          return (
            <Card
              cardObj={card}
              key={card.id + card.mileage}
              w={width}
              openModal={openModal}
              onClick={onClick}
            />
          );
        })}
      </List>
      {!isLastPage && !loading && !isBtnHide && (
        <Button
          onClick={loadMoreOnClick}
          mt="25px"
          bg="transparent"
          _hover={{ bg: "transparent" }}
        >
          Load more
        </Button>
      )}
    </ContainerCustom>
  );
};
