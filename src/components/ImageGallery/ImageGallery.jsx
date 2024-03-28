import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal, showRegularImage, onCardInfo }) => {
	return (
		<ul className={css.ImageGallery}>
			{Array.isArray(images) &&
				images.map(image => (
					<li key={image.id}>
						<ImageCard
							images={image}
							openModal={openModal}
							showRegularImage={showRegularImage}
							onCardInfo={onCardInfo}
						/>
					</li>
				))}
		</ul>
	);
};

export default ImageGallery;
