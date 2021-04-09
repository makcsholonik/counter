import React, { ChangeEvent, useEffect, useState } from 'react';
import cl from './App.module.css';
import { Button } from "./Button";

export function App () {

	const [maxCount, setMaxCount] = useState<number> ( 5 );
	const [startCount, setStartCount] = useState<number> ( 0 );

	const [maxValue, setMaxValue] = useState<number> ( 5 );
	const [startValue, setStartValue] = useState<number> ( 0 );
	const [editMode, setEditMode] = useState<boolean> ( true );

	useEffect ( () => {
		let valueAsString = localStorage.getItem ( "counterStartValue" );
		if (valueAsString) {
			let newStartValue = JSON.parse ( valueAsString );
			setStartValue ( newStartValue );
		}
	}, [] );
	useEffect ( () => {
		let valueAsString = localStorage.getItem ( "counterMaxValue" );
		if (valueAsString) {
			let newMaxValue = JSON.parse ( valueAsString );
			setMaxValue ( newMaxValue );
		}
	}, [] );
	useEffect ( () => {
		localStorage.setItem ( "counterStartValue", JSON.stringify ( startValue ) );
		localStorage.setItem ( "counterMaxValue", JSON.stringify ( maxValue ) );
	}, [startValue, maxValue] )

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
		setStartCount ( startValue );
	}
	function onChangeMaxValue ( e : ChangeEvent<HTMLInputElement> ) {
		setMaxValue ( Number ( e.currentTarget.value ) );
		setEditMode ( false );
	}
	function onChangeStartValue ( e : ChangeEvent<HTMLInputElement> ) {
		setStartValue ( Number ( e.currentTarget.value ) );
		setEditMode ( false );
	}
	function onClickSetValue () {
		newValues ( maxValue, startValue );
		setEditMode ( true );
	}

	return (
		<div className={ cl.count }>
			<div className={ cl.counter }>
				<div className={ cl.displaySet }>
					<div>
						max value:
					</div>
					<div>
						<input
							type="number"
							value={ maxValue }
							onChange={ onChangeMaxValue }
						/>
					</div>
					<div>
						start value:
					</div>
					<div>
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
				<div className={ startCount ? cl.displayNumber :  cl.displayText}> //???
					{ editMode ? startCount : <div>enter values and press 'set'</div> }
				</div>
				<div className={ cl.button }>
					<Button
						buttonName={ "inc" }
						onClick={ incFn }
						disabledValue={ startCount === maxCount || maxValue <= startValue }
					/>
					<Button
						buttonName={ "reset" }
						onClick={ resetFn }
						disabledValue={ startCount === startValue || maxValue <= startValue }
					/>
				</div>
			</div>
		</div>
	)
}
