import React from "react";
import classes from "./mintCounterField.module.css";
import styled from "styled-components";

const ControlButton = styled.button`
	&:disabled {
		color: rgba(0, 0, 0, 0.26);
		background-color: rgba(0, 0, 0, 0.12);
		cursor: auto;
	}
`;

function MintCounterField({
	inputLabel,
	// label,
	// min = 1,
	// max = 10,
	// onMint,
	// value,
	// onChange,
	// disabled,
}) {
	// const [count, setCount] = React.useState(defaultValue);
	function _onChange(evt) {
		evt.preventDefault();
		// setCount(Number(evt.target.value));
		onChange(Number(evt.target.value));
	}

	function onIncrease() {
		let val = value + 1;
		if (val >= min && val <= max) {
			// setCount(val);
			onChange(val);
		}
	}

	function onDecrease() {
		let val = value - 1;
		if (val >= min && val <= max) {
			// setCount(val);
			onChange(val);
		}
	}

	// https://stackoverflow.com/questions/9712295/disable-scrolling-on-input-type-number

	return (
		<div className={classes.container}>
			<ControlButton
				className={classes.countButton}
				onClick={onDecrease}
				disabled={value === min}
			>
				-
			</ControlButton>
			<label for="counter" className={classes.inputLabel}>
				{inputLabel}
			</label>
			<input
				id="counter"
				className={classes.counter}
				type="number"
				min={min}
				value={value}
				onChange={_onChange}
			></input>
			<ControlButton
				className={classes.countButton}
				onClick={onIncrease}
				disabled={value === max}
			>
				+
			</ControlButton>
			<button
				className={classes.mintButton}
				onClick={onMint}
				disabled={disabled}
			>
				{label}
			</button>
		</div>
	);
}

export default React.memo(MintCounterField);
