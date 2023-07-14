import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import orderSlice from "./reducers/orderSlice";
import listSlice from "./reducers/listSlice";

export const store = configureStore({
  reducer: {
    orders: orderSlice,
    list: listSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
