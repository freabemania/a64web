import {ContentKey} from "@/models/ContentKey";

export function formatYear(year : Number) {
    return year
}

export function toContentKey(obj : any) : ContentKey {
    const v : ContentKey = {
        id: obj.id,
        category : obj.category
    };
    return v;
}