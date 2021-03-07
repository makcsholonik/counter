import React from "react";
import "./Display.css"

export type PropsDisplayType = {
	count: any
}

export function Display(props: PropsDisplayType) {
	return (
		<div className={props.count === 5 ? "active" : "count_score"}>
			{props.count}
		</div>
	)
}
