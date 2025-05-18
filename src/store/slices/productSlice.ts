import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { mockProducts } from '../../data/mockData';
const BASE_URL = 'http://localhost:5000/api'; // Replace with your actual API URL

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  category: Category;
  subcategory: string;
  rating: number;
  reviewCount: number;
  stock: number;
  brand: string;
  featured: boolean;
}

interface Category {
  id: string;
  name: string;
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
      return await fetch(`${BASE_URL}/v1/products`)
        .then((response) => response.json())
        .then((data) => {
          return data.data;
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
    setFilter: <K extends keyof ProductsState['filters']>(
      state: ProductsState,
      action: PayloadAction<{ key: K; value: ProductsState['filters'][K] }>
    ) => {
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
          categories.add(product.category.name);
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