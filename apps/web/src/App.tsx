import { useState } from 'react';
import { Button, Card, CardBody, CardFooter, Input } from '@demo-go1337/ui';
import { useSearchImages } from '@myvideo/hooks';
import { formatNumber } from '@myvideo/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

function ImagesGallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('nature');

  const { data, isLoading, error } = useSearchImages({
    q: query,
    per_page: 12,
    image_type: 'photo'
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(searchTerm);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pixabay Image Search</h1>

      <form onSubmit={handleSearch} className="mb-8 flex gap-2">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for images..."
          className="flex-grow"
        />
        <Button type="submit">Search</Button>
      </form>

      {isLoading && <p className="text-center">Loading...</p>}

      {error && <p className="text-red-500">Error: {(error as Error).message}</p>}

      {data && (
        <>
          <p className="mb-4">Found {data.totalHits} images</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.hits.map(image => (
              <Card key={image.id} className="flex flex-col">
                <img
                  src={image.webformatURL}
                  alt={image.tags}
                  className="w-full h-48 object-cover"
                />
                <CardBody className="flex-grow">
                  <h3 className="text-lg font-medium truncate">{image.tags}</h3>
                  <p className="text-sm text-gray-500">By {image.user}</p>
                </CardBody>
                <CardFooter className="flex justify-between text-sm text-gray-600">
                  <span>👁️ {formatNumber(image.views)}</span>
                  <span>❤️ {formatNumber(image.likes)}</span>
                  <span>⬇️ {formatNumber(image.downloads)}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ImagesGallery />
    </QueryClientProvider>
  );
}

export default App;