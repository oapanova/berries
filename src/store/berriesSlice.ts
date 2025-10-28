import type { TBerry, TFirmness } from "@/types/berry";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { fetchBerries } from "./berriesThunk";

type TBerriesState = {
    berries: TBerry[];
    loading: boolean;
    sortBy: TFirmness;
    firmnessAmount: Record<TFirmness, number>;
}

const initialState: TBerriesState = {
    berries: [],
    loading: false,
    sortBy: 'soft',
    firmnessAmount: {
        'very-soft': 0,
        'soft': 0,
        'hard': 0,
        'very-hard': 0,
        'super-hard': 0,
    }
}

const berriesSlice = createSlice({
    initialState,
    name: 'berries',
    reducers: {
        setSortBy(state: TBerriesState, {payload}: PayloadAction<TFirmness>) {
            state.sortBy = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBerries.pending, (state: TBerriesState) => {
               state.loading = true;
        });
        builder.addCase(fetchBerries.fulfilled, (state: TBerriesState, action) => {
            state.berries = action.payload;
            state.loading = false;
            state.firmnessAmount = action.payload.reduce((acc, berry) => {
                acc[berry.firmness.name] = (acc[berry.firmness.name] || 0) + 1;
                return acc;
            }, {
                'very-soft': 0,
                'soft': 0,
                'hard': 0,
                'very-hard': 0,
                'super-hard': 0,
            } as Record<TFirmness, number>);
        });
        builder.addCase(fetchBerries.rejected, (state) => {
            state.loading = false;
            state.berries = [];
            state.firmnessAmount = {
                'very-soft': 0,
                'soft': 0,
                'hard': 0,
                'very-hard': 0,
                'super-hard': 0,
            };
        });
    }
})

export const {
    setSortBy,
} = berriesSlice.actions;

export default berriesSlice.reducer;