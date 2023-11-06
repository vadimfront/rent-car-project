export const selectFavorite = (state) => state.favoriteCars;
export const selectPage = (state) => state.catalogCars.page;
export const selectFilters = (state) => state.filter.filterData;

export const selectCars = (state) => {
  const { price } = selectFilters(state);
  const { data } = state.catalogCars;
  if (price && data.length) {
    const res = data.filter((car) => car.rentalPrice === `$${price}`);

    const newData = {
      data: res,
      loading: state.catalogCars.loading,
      error: state.catalogCars.error,
      isLastPage: true,
    };
    return newData;
  }
  return state.catalogCars;
};
