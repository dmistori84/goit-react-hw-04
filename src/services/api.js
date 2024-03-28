import axios from "axios";

export const requestImages = async searchText => {
	const { data } = await axios.get(
		`https://api.unsplash.com/search/photos?client_id=s2k9HBCjFN_CIHBti7abhULlrT7141iyaWVylsXTv34&page=1&query=${searchText}`
	);
	return data;
};
