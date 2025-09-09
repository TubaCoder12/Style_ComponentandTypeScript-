import { useQuery } from "@tanstack/react-query";
import { Product } from ".././Interface/Interface";

// 👉 "async function hamesha Promise return karta hai. Isliye
//  Promise<Product[]> likhna zaroori hai taake TypeScript ko pata
//  chale ke promise ke andar Product[] milega."
const useProduct = () => {
  const fetchData = async (): Promise<Product[]> => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = res.json();
    return data;
  };

  const { data, isLoading, isError, error } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  return { data, isLoading, isError, error };
};

export default useProduct;
// The queryKey is like a unique identifier
// React Query saves (caches) fetched data in memory.

// queryKey tells React Query where to store this data.

// If two components use the same query (queryKey: ["products"]), React Query won’t fetch twice.
