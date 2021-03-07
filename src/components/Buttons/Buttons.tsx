import React from "react";
import "./Buttons.css"

type ButtonPropsType = {
	count: number
	maxCount: number
	incFn: () => void
	resetFn: () => void
}

export function Buttons(props: ButtonPropsType) {
	return (
		<div className="button">
			<button onClick={props.incFn} disabled={props.count === props.maxCount}>inc</button>
			<button onClick={props.resetFn} disabled={props.count === 0}>reset</button>
		</div>

	)
}