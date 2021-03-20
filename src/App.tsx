import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { Button, Grid, Paper, TextField } from "@material-ui/core";


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
		<Grid container justify="center" spacing={ 2 } alignItems="center">
			<Grid item xs={ 4 }>
				<Paper style={ { padding:"20px" } }>
					<div>
						max value:
						<TextField
							error={ maxValue < 0}
							variant="outlined"
							type="number"
							value={ maxValue }
							onChange={ onChangeMaxValue }
						/>
					</div>
					<div>
						start value:
						<TextField
							error={ startValue < 0 }
							variant="outlined"
							type="number"
							value={ startValue }
							onChange={ onChangeStartValue }
						/>
					</div>
					<Button
						disabled={ maxValue <= startValue }
						variant="outlined"
						color="primary"
						onClick={ onClickSetValue }>
						set
					</Button>
				</Paper>
			</Grid>
			<Grid item xs={ 4 }>
				<Paper style={ { padding:"20px" } }>
					<Grid item>
						<TextField
							variant="outlined"
							value={ startCount }
						/>
					</Grid>
					<Grid item>
						<Button
							variant="outlined"
							color="primary"
							onClick={ incFn }
							disabled={ startCount === maxCount }
						>inc
						</Button>
						<Button
							variant="outlined"
							color="primary"
							onClick={ resetFn }
							disabled={ startCount === 0 }
						>reset
						</Button>
					</Grid>
			</Paper>
		</Grid>
</Grid>
)
	;
}
