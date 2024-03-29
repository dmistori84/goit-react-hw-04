import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ regularImage, info, isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} ariaHideApp={false} onRequestClose={onClose}>
			<div className={css.overlay} onClick={onClose}>
				<div className={css.imageBox}>
					<div className={css.descriptionBox}>
						<p className={css.descP}>
							Description: <span>{info.description}</span>
						</p>
						<p className={css.descP}>Likes: {info.likes}👍🏼</p>
					</div>

					<img
						className={css.modal}
						src={regularImage}
						alt={info.description}
					/>
				</div>
			</div>
		</Modal>
	);
};

export default ImageModal;
