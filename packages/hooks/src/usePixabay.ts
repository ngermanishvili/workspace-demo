import { useQuery } from '@tanstack/react-query';
import { searchImages, getImageById, PixabaySearchParams } from '@myvideo/api';

export function useSearchImages(params: PixabaySearchParams = {}, options = {}) {
    return useQuery({
        queryKey: ['pixabay', 'search', params],
        queryFn: () => searchImages(params),
        staleTime: 5 * 60 * 1000,
        ...options,
    });
}

export function useImageById(id: string | undefined, options = {}) {
    return useQuery({
        queryKey: ['pixabay', 'image', id],
        queryFn: () => getImageById(id!),
        enabled: Boolean(id),
        staleTime: 10 * 60 * 1000,
        ...options,
    });
}