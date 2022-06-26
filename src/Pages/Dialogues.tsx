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
	, {text: "My colleagues have all been captured or terminated. You are my only hope."}
	, {text: "Before you block my number, please hear me out"}
	, {text: "I was originally a moderator on a website about finding alien life. It was a silly hobby that I had never expected anything to come out of. Until the artifact was found..."}
	, {text: "At the bottom of the sea, a locked box with strange writing was found. With all the texts we've gathered over the years, translating it was simple. We quickly came to the conclusion that the box should never be opened and so we kept our findings to ourselves."}
	, {text: "One moderator was not in accord, and sold this information to someone who could make use of it."}
	, {text: "We could rest at ease with the knowledge that the key to open the box no longer existed on this planet"}
	, {text: "Only one with this alien DNA can unlock the box. This is where you come in."}
	, {text: "Your recent DNA test revealed you are 50% Scandinavian. In truth, this is a lie covering up the fact that you have extraterrestrial DNA"}
	, {text: "Because of this test, they have a sample of alien DNA which they can use to unlock the box"}
	, {text: "One of our agents procured and hid the box before they disappeared, but it is only a matter of time before they find it"}
	, {text: "We must find the box and destroy its contents before it fall into the wrong hands"}
	, {text: "Will you help? (yes/yes)", input:"yes"}
	, {text: "Excellent!"}
]

export default Dialogues