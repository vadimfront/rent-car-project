import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FilterForm } from "../components/FilterForm";
import { CardList } from "../components/CardList";
import { selectCars, selectPage } from "../redux/selectors";

import { fetchCars } from "../redux/operations";
import { Button, useDisclosure } from "@chakra-ui/react";
import { ModalCar } from "../components/ModalCar";
import { ContainerCustom } from "../components/Container";
import { favoriteToggler } from "../redux/favoriteSlice";
import { Hero } from "../components/Hero";

const CatalogPage = () => {
  const [dataModal, setDataModal] = useState(null);
  const { data } = useSelector(selectCars);
  const curPage = useSelector(selectPage);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars({ page: curPage }));
  }, [dispatch, curPage]);

  const modalCard = (id) => {
    const index = data.findIndex((car) => car.id === id);
    setDataModal(data[index]);
    onOpen();
  };

  const addToFavorite = (card) => {
    dispatch(favoriteToggler(card));
  };

  return (
    <>
      <Hero />
      {data && (
        <CardList
          cards={data}
          gap={29}
          col={4}
          openModal={modalCard}
          onClick={addToFavorite}
          isBtnHide={false}
        />
      )}
      {dataModal && (
        <ModalCar data={dataModal} isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
};

export default CatalogPage;
