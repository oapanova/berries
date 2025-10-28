import { debounce, type DebouncedFunc } from "lodash";
import { useCallback } from "react";

export const useDebounce = () => {

    const debounceCustom =
        useCallback(
            <T extends (...args: any[]) => any>(
                fn: T,
            ): DebouncedFunc<T> => debounce(fn, 1000),
            []
        );

    return {
        debounceCustom
    }
}