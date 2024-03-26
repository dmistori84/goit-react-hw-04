import { useEffect } from "react";
// import { Modal } from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ hideModal, regularImage, info }) => {
	useEffect(() => {
		const handleEsc = event => {
			if (event.code === "Escape" || event.currentTarget === event.target)
				hideModal();
			console.log(event.target);
		};
		document.addEventListener("keydown", handleEsc);
		return () => {
			document.removeEventListener("keydown", handleEsc);
		};
	}, [hideModal]);

	return (
		<div className={css.Overlay}>
			<div>
				<p>Description: {info.description}</p>
				<p>Likes: {info.likes}👍🏼</p>
				<img className={css.Modal} src={regularImage} alt={info.description} />
			</div>
			{/* <Modal
				isOpen={hideModal}
				// onAfterOpen={afterOpenModal}
				// onRequestClose={closeModal}
				className={css.content}
			>
				open modal window
			</Modal> */}
		</div>
	);
};

export default ImageModal;
