import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export interface PixabayImage {
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

export interface PixabayResponse {
    total: number;
    totalHits: number;
    hits: PixabayImage[];
}

export interface PixabaySearchParams {
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

const API_KEY = '49274364-dd165c93bb99f0825fe77253d';
const BASE_URL = 'https://pixabay.com/api/';

export const searchImages = async (params: PixabaySearchParams = {}): Promise<PixabayResponse> => {
    const response = await axios.get<PixabayResponse>(BASE_URL, {
        params: {
            key: API_KEY,
            ...params,
        },
    });
    return response.data;
};

export const getImageById = async (id: string): Promise<PixabayResponse> => {
    const response = await axios.get<PixabayResponse>(BASE_URL, {
        params: {
            key: API_KEY,
            id,
        },
    });
    return response.data;
};