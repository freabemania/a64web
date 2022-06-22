export interface Metadata {
    name: string,
    group?: string,
    event?: string,
    rating?: string,
    images?: Array<Target>,
    siteImage?: string
}

export interface Target {
    target: string
}