import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button/Button';
import {Display} from './components/Display/Display';


function App() {
	const maxCount = 5;
	const [count, setCount] = useState<number>(0)

	function incFn() {
		if (count < maxCount) {
			setCount(count + 1)
		}
	}

	function resetFn() {
		setCount(0)
	}

	return (
		<div className="count">
			<Display count={count}/>
			<Button count={count} maxCount={maxCount} incFn={incFn} resetFn={resetFn}/>
		</div>
	);
}

export default App;
