import React, {useState, useRef, useEffect} from 'react';
import Dialogues from './Dialogues.tsx'

const ChatMessages = (props) => {
	const [idx, setIdx] = useState(0)
	const [inp, setInp] = useState("")
	const [allD, setAllD] = useState([Dialogues[0]])

	const c = Dialogues[idx]

	const messagesEndRef = useRef(null)	

	const scrollToBottom = () => {
	    messagesEndRef.current.scrollIntoView({})
	  }

  	useEffect(scrollToBottom, [allD]);

	const decrIndex = () => {
		if (idx > 0) {
			setIdx(idx-1)
		}
	}

	const incIdx = () => {
		if (c.input) {
			setAllD(allD.concat({text: c.input, style: "-resp"}).concat(Dialogues[idx+1]))
		} else {
			setAllD(allD.concat(Dialogues[idx+1]))
		}
		setIdx(idx+1)
	}

	const setInput = (ev) => {
		setInp(ev.target.value)
	}

	const inputCheck = () => {
		if (idx+1 < Dialogues.length) {
			if (c.input) {
				if (inp.toLowerCase() == c.input) {
					setInp("")
					return true
				} else {
					return false
				}
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

	if (c.component) {
		const Comp = c.component
		return <Comp idx={idx} incIdx={incrementIndex}/>
	}

	const MessagesRender = () => {

		return <div className="messages">
			{ allD.map((d, i) => <div key={"msg_" + i} className={d.style ? "message" + d.style : "message"}>
				<div ref={ i+1 == allD.length ? messagesEndRef : null} className="message-text">{d.text}</div>
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