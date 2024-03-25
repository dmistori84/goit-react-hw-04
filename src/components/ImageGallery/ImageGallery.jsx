import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal, showRegularImage }) => {
	return (
		<ul className={css.ImageGallery}>
			{images.map(image => (
				<li key={image.id}>
					<ImageCard
						images={image}
						openModal={openModal}
						showRegularImage={showRegularImage}
						// showRegularImage={image.urls.regular}
					/>
				</li>
			))}
		</ul>
	);
};

export default ImageGallery;
