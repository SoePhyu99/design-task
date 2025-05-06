import { useQuery } from "@tanstack/react-query";

interface User {
  name: string;
  email: string;
}

const endpoint = "https://jsonplaceholder.typicode.com/users";

const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return fetch(endpoint).then<User[]>((res) => res.json());
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 h
  });

export default useUsers;
