import React from "react";
import styled from "styled-components";
import classes from "./feedbackModal.module.css";

const Modal = styled.div`
	display: ${(props) => (props.open ? "flex" : "none")}; /* Hidden by default */
`;

function FeedbackText({ children, open, onClose, variant = "error" }) {
	function onClick(evt) {
		evt.preventDefault();
		onClose();
	}

	return (
		<Modal
			className={classes.modal}
			open={open}
			variant={variant}
			onClick={onClick}
		>
			<div
				className={`${classes.modalContent}`}
				style={{ flexDirection: "column", maxWidth: "1200px" }}
			>
				<div
					className={`${classes.container}`}
					style={{
						minHeight: "200px",
						backgroundColor: "#e57373",
					}}
				>
					<p className={`${classes.title}`}>Warning</p>
				</div>
				<div
					style={{
						padding: "16px",
						minHeight: "100px",
						maxWidth: "600px",
						overflow: "hidden",
						textAlign: "center",
					}}
				>
					{children}
				</div>
				<div
					style={{
						padding: "16px 16px",
					}}
				>
					<button className={classes.button} onClick={onClick}>
						Close
					</button>
				</div>
			</div>
		</Modal>
	);
}

export default React.memo(FeedbackText);
