import {useAppSelector } from "@/store";
import {useCallback, useMemo, useState } from "react";
import {debounce} from "lodash";
import { useDebounce } from "@/hooks/useDebounce";

export const useBerriesList = () => {
    const {berries, sortBy} = useAppSelector((state) => state.berries);
    const [search, setSearch] = useState<string>('');
    const [debouncedSearch, setDebouncedSearch] = useState<string>('');

    const {debounceCustom} = useDebounce();

    const filteredBerries = useMemo(() => {
        return berries.filter((berry) => berry.firmness.name === sortBy);
    }, [berries, sortBy]);

    const searchedBerries = useMemo(() => {
        if (!!debouncedSearch) return filteredBerries.filter((berry) =>
            berry.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
        else return filteredBerries
        }, [debouncedSearch, filteredBerries]);


    // const searchDebounced = useCallback(
    //     debounce((value: string) => {
    //         setDebouncedSearch(value);
    //     }, 1000),
    //     []
    // );

    const debouncedSetSearch = useMemo(
        () => debounceCustom(setDebouncedSearch),
        [debounceCustom]
    );

    const setSearchHandler = (value: string) => {
        setSearch(value);
        // searchDebounced(value);
        debouncedSetSearch(value);
    }


    return {
        filteredBerries: searchedBerries,
        search,
        setSearch: setSearchHandler,
    };
}