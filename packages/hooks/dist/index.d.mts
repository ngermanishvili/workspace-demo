import * as _tanstack_react_query from '@tanstack/react-query';
import * as _myvideo_api from '@myvideo/api';
import { PixabaySearchParams } from '@myvideo/api';

declare function useSearchImages(params?: PixabaySearchParams, options?: {}): _tanstack_react_query.UseQueryResult<_myvideo_api.PixabayResponse, Error>;
declare function useImageById(id: string | undefined, options?: {}): _tanstack_react_query.UseQueryResult<_myvideo_api.PixabayResponse, Error>;

export { useImageById, useSearchImages };
