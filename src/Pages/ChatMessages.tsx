import React, {useState} from 'react';
import Dialogues from './Dialogues.tsx'

const ChatMessages = (props) => {
	const [idx, setIdx] = useState(0)
	const [maxIdx, setMaxIdx] = useState(0)
	const [inp, setInp] = useState("")
	const [allD, setAllD] = useState([Dialogues[0]])

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
		setAllD(allD.concat(Dialogues[idx+1]))
		setInp("")
	}

	const setInput = (ev) => {
		setInp(ev.target.value)
	}

	const inputCheck = () => {
		if (idx+1 < Dialogues.length) {
			if (maxIdx > idx) {
				return true
			} else if (c.input) {
				return inp.toLowerCase() == c.input
			}
			return true
		}
		return false
	}

	const incrementIndex = () => {
		if (inputCheck()) {
			incIdx()
		}
	}

	const c = Dialogues[idx]

	if (c.component) {
		const Comp = c.component
		return <Comp idx={idx} incIdx={incrementIndex}/>
	}

	const MessagesRender = () => {

		return <div className="messages">
			{ allD.map((d, i) => <div key={"msg_" + i} className="message">
				<div className="message-text">{d.text}</div>
				</div>)
			}
		</div>
	}

	return (<div className="message-container">
		<MessagesRender/>
		<div className="input-container">
			<input value={inp} onChange={setInput}/>
			<button onClick={incrementIndex}>Next</button></div>
		<div/>
		</div>
		)
}

export default ChatMessages