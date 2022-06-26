import React, {useState} from 'react';
import Dialogue from 'Dialogue.tsx'

const TestComponent = ({incIdx}) => {
	const [i, setI] = useState(0)

	if (i > 5) {
		// this is illegal but idc
		incIdx()
	}

	return <button onClick={()=> setI(i+1)}>hoot</button>
}

const introDialogue =
	[ "I know you do not know me but I know you and I need your help"
	, "Before you block my number, please hear me out"
	, "I was originally a moderator on a website on finding alien life. It was a silly hobby that I had never expected anything to come out of. But that was before the artifact was found."
]

const Dialogues: Dialogue[] =
	[ {text: "I know you do know not me but I know you and I need your help"}
	, {text: "Before you block my number, please hear me out"}
	, {text: "I was originally a moderator on a website on finding alien life. It was a silly hobby that I had never expected anything to come out of. But that was before the artifact was found."}
	, {text: "ok", input:"ok"}
	, {text: "test"}
]

export default Dialogues