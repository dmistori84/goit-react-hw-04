import css from "./ImageCard.module.css";

const ImageCard = ({ images, openModal, showRegularImage, onCardInfo }) => {
	return (
		<div className={css.ImageGalleryItem}>
			<img
				className={css.ImageGalleryItemImage}
				src={images.urls.small}
				alt={images.tags}
				onClick={() => {
					openModal();
					showRegularImage(images.urls.regular);
					onCardInfo({
						description: images.alt_description,
						likes: images.likes,
					});
				}}
			/>
		</div>
	);
};

export default ImageCard;
