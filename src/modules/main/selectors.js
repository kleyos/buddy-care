export const isLoading = state => state.main.loading;
export const getUserProfile = state => state.main.profileUser || null;
export const getCards = state => state.main.cards || null;
export const getWishes = state => state.main.wishCards || null;
export const getOffers = state => state.main.offerCards || null;
 
export const getCardsById = (state, id) => {
  if (state.main.cards) {
    return state.main.cards.filter(item => item.owner.id === id);
  }
  return [];
} 
