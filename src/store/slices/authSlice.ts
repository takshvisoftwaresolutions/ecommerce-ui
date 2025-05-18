import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../services/api';

export interface User {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      // For demo purposes, using mock login
      // In a real app, this would be an API call
      const response = await new Promise<{ user: User; token: string }>((resolve) => {
        setTimeout(() => {
          // Mock successful login for demo
          if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
            resolve({
              user: {
                id: '1',
                email: 'admin@example.com',
                name: 'Admin User',
                isAdmin: true,
              },
              token: 'mock-jwt-token',
            });
          } else if (credentials.email === 'user@example.com' && credentials.password === 'password') {
            resolve({
              user: {
                id: '2',
                email: 'user@example.com',
                name: 'Regular User',
                isAdmin: false,
              },
              token: 'mock-jwt-token-user',
            });
          } else {
            throw new Error('Invalid credentials');
          }
        }, 500);
      });
      
      localStorage.setItem('token', response.token);
      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userData: { name: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      // For demo purposes, using mock registration
      const response = await new Promise<{ user: User; token: string }>((resolve) => {
        setTimeout(() => {
          resolve({
            user: {
              id: '3',
              email: userData.email,
              name: userData.name,
              isAdmin: false,
            },
            token: 'mock-jwt-token-new',
          });
        }, 500);
      });
      
      localStorage.setItem('token', response.token);
      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('token');
  return null;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;