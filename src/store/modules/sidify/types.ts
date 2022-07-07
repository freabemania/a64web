export interface PlaylistState {
    collections?: Array<Playlist>
}

export interface Playlist {
    name: string;
    id: number;
    publicList: boolean;
    mine : boolean;
}