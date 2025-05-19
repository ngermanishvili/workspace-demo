// src/usePixabay.ts
import { useQuery } from "@tanstack/react-query";
import { searchImages, getImageById } from "@myvideo/api";
function useSearchImages(params = {}, options = {}) {
  return useQuery({
    queryKey: ["pixabay", "search", params],
    queryFn: () => searchImages(params),
    staleTime: 5 * 60 * 1e3,
    ...options
  });
}
function useImageById(id, options = {}) {
  return useQuery({
    queryKey: ["pixabay", "image", id],
    queryFn: () => getImageById(id),
    enabled: Boolean(id),
    staleTime: 10 * 60 * 1e3,
    ...options
  });
}
export {
  useImageById,
  useSearchImages
};
