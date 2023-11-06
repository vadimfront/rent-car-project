import React, { useState } from "react";
import { selectCars, selectFavorite } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { FilterForm } from "../components/FilterForm";
import { ContainerCustom } from "../components/Container";
import { CardList } from "../components/CardList";
import { favoriteToggler } from "../redux/favoriteSlice";
import { ModalCar } from "../components/ModalCar";
import { useDisclosure } from "@chakra-ui/react";

const FavoritePage = () => {
  const [dataModal, setDataModal] = useState(null);
  const { favorite } = useSelector(selectFavorite);
  const { data } = useSelector(selectCars);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const removeFavorite = (card) => {
    dispatch(favoriteToggler(card));
  };

  const modalCard = (id) => {
    const index = data.findIndex((car) => car.id === id);
    setDataModal(data[index]);
    onOpen();
  };

  return (
    <ContainerCustom>
      {favorite && (
        <CardList
          cards={favorite}
          gap={29}
          col={4}
          onClick={removeFavorite}
          openModal={modalCard}
          isBtnHide={true}
        />
      )}
      {dataModal && (
        <ModalCar data={dataModal} isOpen={isOpen} onClose={onClose} />
      )}
    </ContainerCustom>
  );
};

export default FavoritePage;
