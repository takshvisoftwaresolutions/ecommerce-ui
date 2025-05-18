import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { mockProducts } from '../../data/mockData';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  subcategory: string;
  rating: number;
  reviewCount: number;
  stock: number;
  brand: string;
  featured: boolean;
}

interface ProductsState {
  products: Product[];
  product: Product | null;
  loading: boolean;
  error: string | null;
  categories: string[];
  brands: string[];
  filters: {
    category: string | null;
    subcategory: string | null;
    minPrice: number | null;
    maxPrice: number | null;
    brand: string | null;
    rating: number | null;
    search: string;
  };
}

const initialState: ProductsState = {
  products: [],
  product: null,
  loading: false,
  error: null,
  categories: [],
  brands: [],
  filters: {
    category: null,
    subcategory: null,
    minPrice: null,
    maxPrice: null,
    brand: null,
    rating: null,
    search: '',
  },
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // For demo purposes, using mock data
      return await new Promise<Product[]>((resolve) => {
        setTimeout(() => {
          resolve(mockProducts);
        }, 500);
      });
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id: string, { rejectWithValue }) => {
    try {
      // For demo purposes, using mock data
      return await new Promise<Product>((resolve, reject) => {
        setTimeout(() => {
          const product = mockProducts.find(p => p.id === id);
          if (product) {
            resolve(product);
          } else {
            reject(new Error('Product not found'));
          }
        }, 300);
      });
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ key: keyof ProductsState['filters']; value: any }>) => {
      state.filters[action.payload.key] = action.payload.value;
    },
    
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
        
        // Extract categories and brands
        const categories = new Set<string>();
        const brands = new Set<string>();
        
        action.payload.forEach(product => {
          categories.add(product.category);
          brands.add(product.brand);
        });
        
        state.categories = Array.from(categories);
        state.brands = Array.from(brands);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setFilter, clearFilters } = productSlice.actions;
export default productSlice.reducer;