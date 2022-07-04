export interface User {
    id : number,
    email : string,
    token : string,
    name : string,
    country : string,
    authenticated: boolean;
    loginError: boolean;
}

export interface UserState {
    user: User;
    avatarUrl: string;
}