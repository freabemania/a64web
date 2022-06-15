export interface User {
    email : string,
    token : string,
    authenticated: boolean;
    loginError: boolean;
}

export interface UserState {
    user: User;
}