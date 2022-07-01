import React, {useState} from 'react';
import {Dialogue, ComponentReply} from 'Dialogue.tsx'
import LocFinder, {LocComponent} from './LocFinder'
import plaque from "../plaque.jpg"
import tunnel from "../tunnel.jpg"
import music from "../musicCipher.wav"

const TestComponent = (input) => {
	if (input == "doot") {
		return {text: "you done doot it!"}
	} else {
		return {text: "not quite...", component: TestComponent}
	}
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
	, {text: "I'm sure you have more questions, but unfortunately I haven't been very active in the forum recently so I don't know what in the box. Luckily this also means I evaded capture."}
	, {text: "Before disappearing, our agents hid information for you in your home"}
	, {text: `To be sure it didn't fall into the wrong hands, they had to conceal this information in "creative" ways`}
	, {text: "I have encrypted documents on my computer that contain vital information. The password to the first document in hidden in a folder in a book on your shelf"}
	, {text: "Make sure to keep the book once you've found it, and tell me the code written.", input:"7654"}
	, {text: "I'm in"}
	, {text: "Also included in the folder is a cipher that must be applied to a page in the book. To figure out which page, you must accomplish a series of tasks"}
	, {text: "First, you must locate a series of numbered bottles. Do not open them. There whereabouts can be found through solving a series of riddles"}
	, {text: "First you must solve a game to find a word, which must be inserted into one of the sentences on the sheet to find out where the bottles are"}
	, {text: "The list of words can be found through:"}
	, {text: "When you have located all the bottles, write 'ready'", input:"ready"}
	, {text: "The page number is made up of the three numbers corresponding to bottles which contain acid. In the folder labelled Step Two, there is a tool that will help you discern them"}
	, {text: "Once you have found them, try out permutations of the numbers and apply the cipher until you find something that makes sense"}
	, {text: "Good luck", input: "test"}
	// find Mrs. White
	// Make here they can find a document about the box's contents, and get code for the next thing
	, {text: "My ex-colleagues really weren't the brightest..."}
	, {text: "I opened the next file with that code! The box is hidden somewhere outside!"}
	, {text: "I don't know the exact coordinates, but I can tell you how far away you are."}
	, {text: "Just press next every time you'd like an update. Please allow me to know your location!", component: LocComponent}
	, {text: "Nearby there should be a a tunnel nearby that looks like this:"}
	, {text: "Once you've found it, walk to the right until you find a pile of rocks. There should be something buried underneath. Tell me what you find"
		, input:"usb"
		, img: tunnel
		}
	, {text: "A usb? Strange, I thought the box would be buried. Perhaps it contains the true location of the box."}
	, {text: "Even if we find the box, we won't be able to nullify the contents until we are able to access the emails between my colleague and the enemy."}
	, {text: `The email is "salt_hater123@outlook.com" but I do not know the password yet. My colleague hid his password outside as well.`} // TODO DCDCDC
	, {text: "First, go to the George-Étienne Cartier Monument and count the number of green people", input: 13} // TODO DCDCDC
	, {text: "Next, find this plaque and tell me the missing information", img: plaque, input: "CAMILLIEN HOUDE"}
	, {text: "Lastly, between Villeneuve and Mont Royal find this wall and tell me the missing information"} // DCDCDC TODO IMAGE and INPUT
	, {text: `Perfect! The password is "HOUDE13" Try searching through the email to see what you can find!`} //TODO DCDCDC password
	, {text: "Afterwards, check out what's on the usb!", input:"wreoi"}
	, {text: "It seems as though the information is hidden behind a code."}
	, {text: "I have no idea what it means. The only other information I have is this audio file", aud: music}
	, {text: "Good luck deciphering it", input:"1234"} // TODO DCDCDC code on the box
	, {text: "Oh no. It seems as though our enemy put an extra lock on the box"}
	, {text: "One of my colleqgues was bale to get the combination from the enemy through email. Unfortunately, I don't know the password"}
]

export default Dialogues