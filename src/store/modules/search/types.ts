import {ContentEntryContainer} from "@/models/ContentEntry";

export interface Item {
    id? : string;
    name? : string;
    category?: number;
    group?: string;
    year?: number;
}

export class DefaulItem {

}


export interface SearchState {
    searchResult? : Array<Item>;
    selectedItem? : Item;
    contentEntries? : ContentEntryContainer;
}