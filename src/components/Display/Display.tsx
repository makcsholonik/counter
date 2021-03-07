import React from "react";
import "./Display.css"

type DisplayPropsType = {
	count: any
}

export function Display(props: DisplayPropsType) {
	return (
		<div className={props.count === 5 ? "active" : "count_score"}>
			{props.count}
		</div>
	)
}
