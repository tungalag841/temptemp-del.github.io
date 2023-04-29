import { configureStore } from '@reduxjs/toolkit';
import { frontEndApiSlice } from './frontEndApiSlice';
import { adminApiSlice } from './adminApiSlice';
import { authSlice1 } from './authSlice';

const store = configureStore({
  reducer: {

    [frontEndApiSlice.reducerPath]: frontEndApiSlice.reducer,
    [adminApiSlice.reducerPath]: adminApiSlice.reducer,
    [authSlice1.reducerPath]: authSlice1.reducer

  },

  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat([
      frontEndApiSlice.middleware,
      adminApiSlice.middleware,
      authSlice1.middleware
    ])
});
export default store;
