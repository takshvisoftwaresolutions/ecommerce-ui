// Simulated API service - in a real application, this would connect to a backend
const BASE_URL = 'https://api.example.com'; // This is a placeholder URL

export const api = {
  // Auth endpoints
  auth: {
    login: async (email: string, password: string) => {
      // Simulate API call
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // For demo purposes, accept specific credentials
          if (email === 'admin@example.com' && password === 'password') {
            resolve({
              user: {
                id: '1',
                email: 'admin@example.com',
                name: 'Admin User',
                isAdmin: true,
              },
              token: 'mock-jwt-token',
            });
          } else if (email === 'user@example.com' && password === 'password') {
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
            reject(new Error('Invalid credentials'));
          }
        }, 500);
      });
    },
    
    register: async (name: string, email: string, password: string) => {
      // Simulate API call
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            user: {
              id: '3',
              email,
              name,
              isAdmin: false,
            },
            token: 'mock-jwt-token-new',
          });
        }, 500);
      });
    },
  },
  
  // Order endpoints
  orders: {
    create: async (orderData: any) => {
      // Simulate API call
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: `order-${Date.now()}`,
            ...orderData,
            status: 'processing',
            createdAt: new Date().toISOString(),
          });
        }, 800);
      });
    },
    
    getAll: async () => {
      // Simulate API call
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 'order-1',
              items: [
                { id: '1', name: 'Product 1', price: 99.99, quantity: 1 },
                { id: '2', name: 'Product 2', price: 49.99, quantity: 2 },
              ],
              total: 199.97,
              status: 'delivered',
              createdAt: '2023-05-10T10:30:00Z',
            },
            {
              id: 'order-2',
              items: [
                { id: '3', name: 'Product 3', price: 149.99, quantity: 1 },
              ],
              total: 149.99,
              status: 'processing',
              createdAt: '2023-05-15T14:20:00Z',
            },
          ]);
        }, 600);
      });
    },
    
    getById: async (id: string) => {
      // Simulate API call
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (id === 'order-1') {
            resolve({
              id: 'order-1',
              items: [
                { id: '1', name: 'Product 1', price: 99.99, quantity: 1 },
                { id: '2', name: 'Product 2', price: 49.99, quantity: 2 },
              ],
              total: 199.97,
              status: 'delivered',
              createdAt: '2023-05-10T10:30:00Z',
              shippingAddress: {
                name: 'John Doe',
                street: '123 Main St',
                city: 'Anytown',
                state: 'CA',
                zipCode: '12345',
                country: 'USA',
              },
              paymentMethod: 'Credit Card',
            });
          } else {
            reject(new Error('Order not found'));
          }
        }, 300);
      });
    },
  },
  
  // Payment endpoints (would connect to Razorpay in a real app)
  payments: {
    createOrder: async (amount: number) => {
      // Simulate API call to create Razorpay order
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: `razorpay_order_${Date.now()}`,
            amount,
            currency: 'INR',
          });
        }, 500);
      });
    },
    
    verifyPayment: async (paymentData: any) => {
      // Simulate API call to verify payment
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            paymentId: paymentData.razorpay_payment_id,
          });
        }, 500);
      });
    },
  },
};