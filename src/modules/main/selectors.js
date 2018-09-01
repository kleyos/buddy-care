export const isLoading = state => state.main.loading;
export const getUserProfile = state => state.main.profileUser || null;
export const getAllCards = state => state.main.cards || null;
export const getFilteredCards = state => state.main.filteredCards || null;
 
export const getCardsById = (state, id) => {
  if (state.main.cards) {
    return state.main.cards.filter(item => item.owner.id === id);
  }
  return [];
} 
