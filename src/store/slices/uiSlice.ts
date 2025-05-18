import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  mobileMenuOpen: boolean;
  searchOpen: boolean;
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'info';
    message: string;
  }>;
}

const initialState: UiState = {
  mobileMenuOpen: false,
  searchOpen: false,
  notifications: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state, action: PayloadAction<boolean | undefined>) => {
      state.mobileMenuOpen = action.payload !== undefined ? action.payload : !state.mobileMenuOpen;
    },
    
    toggleSearch: (state, action: PayloadAction<boolean | undefined>) => {
      state.searchOpen = action.payload !== undefined ? action.payload : !state.searchOpen;
    },
    
    addNotification: (state, action: PayloadAction<Omit<UiState['notifications'][0], 'id'>>) => {
      state.notifications.push({
        id: Date.now().toString(),
        ...action.payload,
      });
    },
    
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(n => n.id !== action.payload);
    },
  },
});

export const {
  toggleMobileMenu,
  toggleSearch,
  addNotification,
  removeNotification,
} = uiSlice.actions;

export default uiSlice.reducer;