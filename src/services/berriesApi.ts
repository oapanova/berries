import type { TBerry } from "@/types/berry";
import axios, { type AxiosResponse } from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2/berry';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

export type TBerriesResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
}

export const fetchBerriesApi = async () => {
    try {
        const response: AxiosResponse<TBerriesResponse> = await axiosInstance.get('/?limit=64');
        return response.data?.results ?? [];
    } catch (error) {
        console.error('Error fetching berries:', error);
        throw error;
    }
}

export const fetchBerryByNameApi = async (name: string) => {
    try {
        const response: AxiosResponse<TBerry> = await axiosInstance.get(`/${name}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching berry with name ${name}:`, error);
        throw error;
    }
}

export const fetchBerryByIdApi = async (id: number) => {
    try {
        const response: AxiosResponse<TBerry> = await axiosInstance.get(`/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching berry with id ${id}:`, error);
        throw error;
    }
}