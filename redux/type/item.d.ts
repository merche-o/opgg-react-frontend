
export interface Image {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface Gold {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
}

export interface Maps {
    11: boolean;
    12: boolean;
    21: boolean;
    22: boolean;
}

export interface Stats {
    FlatMovementSpeedMod: number;
}

export interface itemData {
    name: string;
    description: string;
    colloq: string;
    plaintext: string;
    into: string[];
    image: Image;
    gold: Gold;
    tags: string[];
    maps: Maps;
    stats: Stats;
}

export interface rootItem {
    id: string
    data: itemData
}




type ItemDataAction = {
    type: string,
    data?:  rootItem[]
}

type ItemDataState = {
    data?:  rootItem[]
}


type DispatchItemData = (args: ItemDataAction) => ItemDataAction
