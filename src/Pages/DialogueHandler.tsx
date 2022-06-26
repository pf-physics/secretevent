import React, {useState} from 'react';
import Dialogues from './Dialogues.tsx'

const DialogueHandler = (props) => {
	const [idx, setIdx] = useState(0)
	const [maxIdx, setMaxIdx] = useState(0)
	const [inp, setInp] = useState("")

	const decrIndex = () => {
		if (idx > 0) {
			setIdx(idx-1)
		}
	}

	const incIdx = () => {
		setIdx(idx+1)
		if (idx+1>maxIdx) {
			setMaxIdx(idx+1)
		}
	}

	const setInput = (ev) => {
		setInp(ev.target.value)
	}

	const inputCheck = () => {
		if (maxIdx > idx) {
			return true
		} else if (c.input) {
			return inp.toLowerCase() == c.input
		}
		return true
	}

	const incrementIndex = () => {
		if (inputCheck()) {
			incIdx()
		}
	}

	if (idx >= Dialogues.length) {
		return <h2>The end</h2>
	}
	const c = Dialogues[idx]

	if (c.component) {
		const Comp = c.component
		return <Comp idx={idx} incIdx={incIdx}/>
	}

	return (<div>
		<h2>{c.text}</h2>
		{c.input && <input onChange={setInput}/>}
		<div/>
		<button onClick={decrIndex}>Back</button>
		<button onClick={incrementIndex}>Next</button>
		</div>
		)
}

export default DialogueHandler