import { useState, useEffect } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [searchText, setSearchText] = useState("");
	const [isShowModal, setIsShowModal] = useState(false);
	const [regularImage, setRegularImage] = useState("");
	const [cardInfo, setcardInfo] = useState({});

	useEffect(() => {
		async function fetchImages() {
			try {
				setLoading(true);
				const response = await axios.get(
					`https://api.unsplash.com/search/photos?client_id=s2k9HBCjFN_CIHBti7abhULlrT7141iyaWVylsXTv34&page=1&query=${searchText}`
				);
				console.log("response", response.data.results);
				setImages(response.data.results);
				console.log("response.data.results", response.data.results);
			} catch (error) {
				// Встановлюємо стан error в true
				setError(true);
			} finally {
				setLoading(false);
			}
		}
		fetchImages();
	}, [searchText]);

	const handleSearch = data => {
		// setImages(data);
		setSearchText(data);
		console.log("пошук");
	};

	const toggleModal = () => {
		setIsShowModal(prev => !prev);
	};

	const onRegularImage = bigImage => {
		setRegularImage(bigImage);
	};

	const onCardInfo = data => {
		setcardInfo(data);
	};

	return (
		<>
			<SearchBar onSearsh={handleSearch} />
			<Toaster position="top-center" reverseOrder={false} />
			{loading && <p>Loading data, please wait...</p>}
			{error && (
				<p>Whoops, something went wrong! Please try reloading this page!</p>
			)}
			{images.length > 0 && (
				<ImageGallery
					images={images}
					openModal={toggleModal}
					showRegularImage={onRegularImage}
					onCardInfo={onCardInfo}
				/>
			)}
			<LoadMoreBtn />
			{isShowModal && (
				<ImageModal
					hideModal={toggleModal}
					regularImage={regularImage}
					info={cardInfo}
				/>
			)}
		</>
	);
}

export default App;
