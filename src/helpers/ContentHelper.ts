import {ContentKey} from "@/models/ContentKey";

const WEB_BASE = 'https://hackerswithstyle.se/leet'

export function getHost() {
    return WEB_BASE;
}

export function formatYear(year : Number) {
    return year
}

export function toContentKey(id: string, category: number) {
    return new ContentKey(id,category);
}
