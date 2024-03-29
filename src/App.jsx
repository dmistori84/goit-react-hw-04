import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

import { requestImages } from "./services/api";

function App() {
	const [images, setImages] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [searchText, setSearchText] = useState("");
	const [isShowModal, setIsShowModal] = useState(false);
	const [regularImage, setRegularImage] = useState("");
	const [cardInfo, setcardInfo] = useState({});
	const [page, setPage] = useState(1);

	useEffect(() => {
		if (searchText.length === 0) return;
		async function fetchImages() {
			try {
				setLoading(true);
				const response = await requestImages(searchText, page);
				setImages(prev =>
					prev ? [...prev, ...response.results] : response.results
				);
			} catch (error) {
				setError(true);
			} finally {
				setLoading(false);
			}
		}
		fetchImages();
	}, [searchText, page]);

	const handleSearch = data => {
		setImages([]);
		setSearchText(data);
		setPage(1);
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

	const incPage = () => {
		setPage(prev => prev + 1);
	};

	return (
		<>
			<SearchBar onSearch={handleSearch} />
			<Toaster position="top-center" reverseOrder={false} />
			{error && <ErrorMessage error={error} />}
			{loading && <Loader />}
			<ImageGallery
				images={images}
				openModal={toggleModal}
				showRegularImage={onRegularImage}
				onCardInfo={onCardInfo}
			/>
			{images && <LoadMoreBtn onClick={incPage} />}
			{isShowModal && (
				<ImageModal
					regularImage={regularImage}
					info={cardInfo}
					isOpen={isShowModal}
					onClose={toggleModal}
				/>
			)}
		</>
	);
}

export default App;
