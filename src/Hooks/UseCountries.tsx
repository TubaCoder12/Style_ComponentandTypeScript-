import { useQuery } from "@tanstack/react-query";

// Define the Country type based on REST Countries API response

import { Country } from "../Interface/Interface";
// Custom hook
const useCountries = () => {
  const fetchData = async (): Promise<Country[]> => {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,cca3"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch countries");
    }
    const data: Country[] = await res.json();

    return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
  };

  const { data, isPending, isError, error } = useQuery<Country[], Error>({
    queryKey: ["countries"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return { data, isPending, isError, error };
};

export default useCountries;
