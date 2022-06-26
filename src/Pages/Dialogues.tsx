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

const Dialogues: Dialogue[] =
	[ {text: "HEY"}
	, {text: "hoo", input:"hoo"}
	, {text: "uh", component: TestComponent}
	, {text: "ok", input:"ok"}
]

export default Dialogues