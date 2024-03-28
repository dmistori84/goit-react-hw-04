import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { requestImages } from "./services/api";

function App() {
	const [images, setImages] = useState(null);
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
				const response = await requestImages(searchText);
				setImages(response.results);
				// console.log("response.data.results", response.data.results);
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
		setSearchText(data);
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
			<ErrorMessage error={error} />
			<ImageGallery
				images={images}
				openModal={toggleModal}
				showRegularImage={onRegularImage}
				onCardInfo={onCardInfo}
			/>
			{loading && <Loader />}
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
