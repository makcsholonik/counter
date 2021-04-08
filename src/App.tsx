import React, { ChangeEvent, useState } from 'react';
import cl from './App.module.css';
import { Button } from "./Button";

export function App () {

	const [maxCount, setMaxCount] = useState<number> ( 5 );
	const [startCount, setStartCount] = useState<number> ( 0 );

	const [maxValue, setMaxValue] = useState<number> ( 5 );
	const [startValue, setStartValue] = useState<number> ( 0 );

	function incFn () {
		if (startCount < maxCount) {
			setStartCount ( startCount + 1 );
		}
	}
	function resetFn () {
		setStartCount ( startValue )
	}
	function newValues ( maxValue : number, startValue : number ) {
		setMaxCount ( maxValue );
		setStartCount ( startValue )
	}

	function onChangeMaxValue ( e : ChangeEvent<HTMLInputElement> ) {
		setMaxValue ( Number ( e.currentTarget.value ) );
	}
	function onChangeStartValue ( e : ChangeEvent<HTMLInputElement> ) {
		setStartValue ( Number ( e.currentTarget.value ) );
	}
	function onClickSetValue () {
		newValues ( maxValue, startValue )
	}

	return (
		<div className={ cl.count }>
			<div className={ cl.counter }>
				<div className={ cl.display_set }>
					<div>
						max value:
						<input
							type="number"
							value={ maxValue }
							onChange={ onChangeMaxValue }
						/>
					</div>
					<div>
						start value:
						<input
							type="number"
							value={ startValue }
							onChange={ onChangeStartValue }
						/>
					</div>
				</div>
				<div className={ cl.button }>
					<Button
						buttonName={ "set" }
						onClick={ onClickSetValue }
						disabledValue={ maxValue <= startValue }
					/>
				</div>
			</div>
			<div className={ cl.counter }>
				<div className={ cl.display_show }>
					{ startCount }
				</div>
				<div className={ cl.button }>
					<Button
						buttonName={ "inc" }
						onClick={ incFn }
						disabledValue={ startCount === maxCount }
					/>
					<Button
						buttonName={ "reset" }
						onClick={ resetFn }
						disabledValue={ startCount === startValue }
					/>
				</div>
			</div>
		</div>
	)
}


/*
<button disabled={ maxValue <= startValue }	onClick={ onClickSetValue }>set</button>
<button onClick={ incFn }	disabled={ startCount === maxCount }>inc</button>
<button onClick={ resetFn } disabled={ startCount === startValue }>reset</button>
*/
