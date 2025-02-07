import axios from "axios";

const API_KEY = "0o2AGbsNNVsiMCVDneY_az67nVcUduqncOpUm2m-xiA"

axios.defaults.baseURL = "https://api.unsplash.com";

const SearchByValue = async (query, page) => {

        const { data } = await axios.get(`/search/photos`, {
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


