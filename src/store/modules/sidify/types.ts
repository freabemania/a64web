export interface PlaylistState {
    collections?: Array<Playlist>
    tracks: Array<Track>
}

export interface Playlist {
    name: string;
    id: number;
    publicList: boolean;
    mine : boolean;
}

export interface Track {
    id: number;
    itemId: string;
    categoryId: number;
    name: string;
    fileId: string;
    group: string
    categoryName: string;
}