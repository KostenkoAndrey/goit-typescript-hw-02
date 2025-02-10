import axios from "axios";

const API_KEY = "0o2AGbsNNVsiMCVDneY_az67nVcUduqncOpUm2m-xiA"
axios.defaults.baseURL = "https://api.unsplash.com";

interface PhotoTypes {
    id: string;
    alt_description: string;
    urls: {
    regular: string;
    small: string;
    };
}

interface PhotosResponse {
    total: number;
    total_pages: number;
    results: PhotoTypes[];
}

const SearchByValue = async (query: string, page: number): Promise <PhotosResponse> => {

const { data } = await axios.get<PhotosResponse>(`/search/photos`, { 
            headers: { Authorization: `Client-ID ${API_KEY}` },
            params: {
                query,
                page,
                per_page: 10,
                orientation: "landscape"
            }
        });
        return data;
};

export default SearchByValue;


