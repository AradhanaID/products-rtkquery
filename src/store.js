import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import { apiSlice } from "./features/api/apiSlice";
export default configureStore({
	reducer: {
		productsReducer,
		[apiSlice.reducerPath]: apiSlice.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});
