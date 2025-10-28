import { useAppDispatch, useAppSelector } from "@/store";
import { setSortBy } from "@/store/berriesSlice";
import type { TFirmness } from "@/types/berry";
import { useState } from "react";

const FirmnessSliderValue: {[key: number]: TFirmness } = {
    20: 'very-soft',
    35: 'soft',
    50: 'hard',
    65: 'very-hard',
    80: 'super-hard'
}

export const useFirmnessSlider = () => {
    const {firmnessAmount} = useAppSelector(state => state.berries);
    const [sliderValue, setSliderValue] = useState<number>(35);

    const dispatch = useAppDispatch();

    const setFirmness = (value: number) => {
        setSliderValue(value);
        dispatch(setSortBy(FirmnessSliderValue[value]));
    }

    return {
        sliderValue,
        setFirmness,
        firmnessAmount
    };
}