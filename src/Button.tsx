import React from "react";

type PropsButtonType = {
	buttonName : string
	onClick : () => void
	disabledValue : boolean | undefined
}

export function Button ( props : PropsButtonType ) {
	return (
		<div>
			<button onClick={ props.onClick } disabled={ props.disabledValue }>
				{ props.buttonName }
			</button>
		</div>
	)
}