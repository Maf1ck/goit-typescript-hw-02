import axios from "axios";

const accessKey = "ATOlv2bf-_-2K9b5yyliRmncaPsqAiRJpkNOSApywCI";
const baseURL = "https://api.unsplash.com/search/photos/";

export const fetchHits = async <T>(query: string, page: number): Promise<T> => {
  const responce = await axios.get<T>(
    `${baseURL}?client_id=${accessKey}&query=${query}&page=${page}&per_page=24`
  );
  return responce.data;
};
