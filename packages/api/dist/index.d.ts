import * as axios from 'axios';

declare const apiClient: axios.AxiosInstance;
interface PixabayImage {
    id: number;
    pageURL: string;
    type: string;
    tags: string;
    previewURL: string;
    previewWidth: number;
    previewHeight: number;
    webformatURL: string;
    webformatWidth: number;
    webformatHeight: number;
    largeImageURL: string;
    fullHDURL?: string;
    imageURL?: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
    views: number;
    downloads: number;
    likes: number;
    comments: number;
    user_id: number;
    user: string;
    userImageURL: string;
}
interface PixabayResponse {
    total: number;
    totalHits: number;
    hits: PixabayImage[];
}
interface PixabaySearchParams {
    q?: string;
    lang?: string;
    id?: string;
    image_type?: 'all' | 'photo' | 'illustration' | 'vector';
    orientation?: 'all' | 'horizontal' | 'vertical';
    category?: string;
    min_width?: number;
    min_height?: number;
    colors?: string;
    editors_choice?: boolean;
    safesearch?: boolean;
    order?: 'popular' | 'latest';
    page?: number;
    per_page?: number;
}
declare const searchImages: (params?: PixabaySearchParams) => Promise<PixabayResponse>;
declare const getImageById: (id: string) => Promise<PixabayResponse>;

export { type PixabayImage, type PixabayResponse, type PixabaySearchParams, apiClient, getImageById, searchImages };
