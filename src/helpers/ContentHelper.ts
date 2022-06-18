import {ContentKey} from "@/models/ContentKey";

export function formatYear(year : Number) {
    return year
}

export function toContentKey(id: string, category: number) {
    return new ContentKey(id,category);
}
