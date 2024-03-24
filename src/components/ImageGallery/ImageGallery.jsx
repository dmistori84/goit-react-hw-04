import ImageCard from "../ImageCard/ImageCard";
// import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
	return (
		<ul>
			{images.map(image => (
				<li key={image.id}>
					<ImageCard images={image} />
				</li>
			))}
		</ul>
	);
};

export default ImageGallery;
