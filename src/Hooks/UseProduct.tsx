import { useQuery } from "@tanstack/react-query";
import { Product } from ".././Interface/Interface";

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
