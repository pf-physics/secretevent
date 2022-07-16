import React, {useState, useRef, useEffect} from 'react';
import Dialogues from './Dialogues.tsx'
import ReactPlayer from "react-player";
import {
  useParams,
  useNavigate
} from "react-router-dom";

const idxKey = "messageIdx"

const getUrlId = () => {
	const id = new URL(window.location.href).searchParams.get('id') 
	if (id && parseInt(id)) {
		return parseInt(id)
	}
	return false
}

const ChatMessages = (props) => {
	const urlId = getUrlId()
	const [inp, setInp] = useState("")
	const [idx, setIdx] = useState(urlId ? urlId : localStorage.getItem(idxKey) ? parseInt(localStorage.getItem(idxKey)) : 0)
	const [allD, setAllD] = useState(Dialogues.slice(0, idx+1))
	const [dStack, setDStack] = useState(Dialogues.slice(idx))
	const navigate = useNavigate();

  React.useEffect(() => {
    if (urlId) {
		localStorage.setItem(idxKey, urlId)
		navigate("/secretevent/")
    }
  });

	const c = allD[allD.length-1]

	const messagesEndRef = useRef(null)	

	const scrollToBottom = () => {
	    messagesEndRef.current.scrollIntoView({})
	  }

  	useEffect(scrollToBottom, [allD, inp]);

	const incIdx = () => {
		if (dStack.length < 1) {
			return
		}
		var newD = dStack[1]
		if (c.input) {
			setAllD(allD.concat({text: c.input, style: "-resp"}).concat(newD))
		} else {
			setAllD(allD.concat(newD))
		}
		setDStack(dStack.slice(1))
		setIdx(idx+1)
		localStorage.setItem(idxKey, idx+1)
	}

	const setInput = (ev) => {
		setInp(ev.target.value)
	}

	const handleComponent = () => {
		if (c.component) {
			var resp = c.component(allD, setAllD, inp)
			if (resp) {
				setAllD(allD.concat(resp))
			} else {
				console.log(resp)
			}
			setInp("")
		}
	}

	const inputCheck = () => {
		// don't do input check if component
		if (dStack.length > 0) {
			if (c.input) {
				if (inp.toLowerCase() == c.input.toLowerCase()) {
					setInp("")
					return true
				} else {
					if (inp.length > 0) {
						// TODO maybe add custom response
						setAllD(allD.concat({text: inp, style: "-resp", input: c.input})
							.concat({text: "Huh?", input: c.input}))
						setInp("")
					}
					return false
				}
			}
			return true
		}
		return false
	}

	// if component, do component check, otherwise do input check and incIdx
	const incrementIndex = () => {
		if (c.component) {
			handleComponent()
		}
		else if (inputCheck() && dStack.length > 1) {
			console.log(dStack.length)
			incIdx()
		}
	}


	const MessagesRender = () => {

		return <div className="messages">
			{ allD.map((d, i) => <div key={"msg_" + i} className={d.style ? "message" + d.style : "message"}>
				<div ref={ i+1 == allD.length ? messagesEndRef : null} className="message-text">
				{d.text}
				{d.img && <img style={{width:"100%", paddingTop: "15px"}} src={d.img}/>}
				
				{false && <audio controls="" type="audio/mpeg" autoplay="true" src={d.aud}></audio>}
				{d.urls && d.urls.map((url, i) => <p key={`url${i}`}><a href={url}>Hint{i}</a></p>)}
				{d.aud && <ReactPlayer
				        url={d.aud}
				        width="100%"
				        height="50px"
				        playing={false}
				        controls={true}
				      />
				  }
				{Dialogues.indexOf(d) >= 0 &&
					<div style={{textAlign: "right", fontSize: "small", color:"#3a2d6a"}}>
					{Dialogues.indexOf(d)}
					</div>}
				</div>
				</div>)
			}
		</div>
	}

	return (<div className="message-container">
		<MessagesRender/>
		<div className="input-container">
			<input value={inp} onChange={setInput} disabled={!c.input}/>
			<button onClick={incrementIndex}>{c.input ? "Send" : "Next"}</button></div>
		<div/>
		</div>
		)
}

export default ChatMessages