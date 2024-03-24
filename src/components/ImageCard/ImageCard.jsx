// import css from "./ImageCard.module.css";

const ImageCard = ({ images }) => {
	return (
		<div>
			<img src={images.urls.small} alt={images.tags} />
		</div>
	);
};

export default ImageCard;
