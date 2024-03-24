import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchImages() {
			try {
				setLoading(true);
				const response = await axios.get(
					// "https://pixabay.com/api/?q=cat&page=1&key=25848819-9cdff21383665c4a2b048e17c&image_type=photo&orientation=horizontal&per_page=12"
					"https://api.unsplash.com/search/photos?client_id=s2k9HBCjFN_CIHBti7abhULlrT7141iyaWVylsXTv34&page=1&query=cat"
				);
				console.log("response", response.data.results);
				setImages(response.data.results);
			} catch (error) {
				// Встановлюємо стан error в true
				setError(true);
			} finally {
				setLoading(false);
			}
		}

		fetchImages();
	}, []);

	return (
		<>
			<SearchBar />
			{loading && <p>Loading data, please wait...</p>}
			{error && (
				<p>Whoops, something went wrong! Please try reloading this page!</p>
			)}
			{images.length > 0 && <ImageGallery images={images} />}
		</>
	);
}

export default App;
