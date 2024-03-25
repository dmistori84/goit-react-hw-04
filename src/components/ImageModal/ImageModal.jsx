import { useEffect } from "react";
import { Modal } from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ hideModal, regularImage }) => {
	useEffect(() => {
		const handleEsc = event => {
			if (event.code === "Escape") hideModal();
		};
		document.addEventListener("keydown", handleEsc);
		return () => {
			document.removeEventListener("keydown", handleEsc);
		};
	}, [hideModal]);

	return (
		<div className={css.content}>
			open modal window
			<img src={regularImage} alt="" />
			{/* <Modal
				// isOpen={hideModal}
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
