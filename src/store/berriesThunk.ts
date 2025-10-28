import { createAsyncThunk } from "@reduxjs/toolkit";
import {fetchBerriesApi, fetchBerryByNameApi} from "../services/berriesApi";
import type { TBerry } from "@/types/berry";

export const fetchBerries = createAsyncThunk(
    'berries/fetchBerries',
    async (_, thunkAPI) => {
        try {
            const response: {name: string, url: string}[] = await fetchBerriesApi();
            const berries: TBerry[] = await Promise.all(response.map(response =>
                fetchBerryByNameApi(response.name)
            ));
            return berries;
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to fetch berries');
        }
    }
);