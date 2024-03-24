import css from "./ImageCard.module.css";

const ImageCard = ({ images }) => {
	return (
		<div className={css.ImageGalleryItem}>
			<img
				className={css.ImageGalleryItemImage}
				src={images.urls.small}
				alt={images.tags}
			/>
		</div>
	);
};

export default ImageCard;
