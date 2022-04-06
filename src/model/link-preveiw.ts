export interface LinkPreviewServiceFetchRequest {
    url: string;
    fields?: string[];
}

export enum LinkPreviewAppResponseStatus {
    read,
    unread
}

export interface LinkPreviewAppResponse {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    created_at?: number;
    status: string;
}
