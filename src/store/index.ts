import { combineReducers, configureStore } from '@reduxjs/toolkit';
import berriesSlice from "@/store/berriesSlice.ts";
import {useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
  berries: berriesSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export type RootState = ReturnType<typeof rootReducer>;

export default store;
