import React, {useState} from 'react';
import './App.css';
import {Display} from './components/Display/Display';


function App() {

	const [count, setCount] = useState<number>(0)

	function inc() {
		setCount(count + 1)
	}

	function reset() {
		setCount(0)
	}

	return (
		<div className="count">
			<Display count={count}/>
			<div className="button">
				<button className="button_inc" onClick={inc} disabled={count === 5}>inc</button>
				<button className="button_reset" onClick={reset} disabled={count === 0}>reset</button>
			</div>
		</div>
	);
}

export default App;
