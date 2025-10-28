export type TBerry = {
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    natural_gift_power: number;
    size: number;
    smoothness: number;
    soil_dryness: number;
    firmness: {
        name: TFirmness;
        url: string;
    };
    flavors: {
        potency: number;
        flavor: {
            name: string;
            url: string;
        };
    }[];
    item: {
        name: string;
        url: string;
    };
    natural_gift_type: {
        name: string;
        url: string;
    };
}

export type TFirmness = 'soft' | 'hard' | 'very-soft' | 'very-hard' | 'super-hard';