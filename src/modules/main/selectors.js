export const isLoading = state => state.main.loading;
export const getUserProfile = state => state.main.profileUser || null;
export const getAllUsers = state => state.main.users || null;
export const getFilteredUsers = state => state.main.filteredUsers || null;
