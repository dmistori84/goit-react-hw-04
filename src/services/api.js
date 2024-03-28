import axios from "axios";

const baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "s2k9HBCjFN_CIHBti7abhULlrT7141iyaWVylsXTv34";

export const requestImages = async (searchText, page = 1) => {
	const { data } = await axios.get(
		`${baseURL}/search/photos?client_id=${ACCESS_KEY}&page=${page}&query=${searchText}`
	);
	return data;
};
