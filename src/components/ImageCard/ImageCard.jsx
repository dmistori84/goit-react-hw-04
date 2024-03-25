import css from "./ImageCard.module.css";

const ImageCard = ({ images, openModal, showRegularImage, regularImage }) => {
	return (
		<div className={css.ImageGalleryItem}>
			<img
				className={css.ImageGalleryItemImage}
				src={images.urls.small}
				alt={images.tags}
				onClick={() => {
					openModal();
					console.log("images.urls.regular", images.urls.regular);
					showRegularImage(images.urls.regular);
				}}
			/>
		</div>
	);
};

export default ImageCard;
