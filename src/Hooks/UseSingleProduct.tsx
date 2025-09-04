import { useQuery } from "@tanstack/react-query";
import { Product } from ".././Interface/Interface";

const UseSingleProduct = (id: number) => {
  const fetchProduct = async (): Promise<Product> => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = await res.json();
    return data;
  };

  const { data, isLoading, isError, error } = useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: fetchProduct,
    enabled: !!id,
  });

  return { data, isLoading, isError, error };
};

export default UseSingleProduct;
