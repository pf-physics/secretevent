import React, {useState} from 'react';
import {Dialogue, ComponentReply} from 'Dialogue.tsx'
import LocFinder, {LocComponent} from './LocFinder'
import plaque from "../plaque.jpg"
import tunnel from "../tunnel.jpg"
import grafitti from "../grafitti.jpg"
import music from "../musicCipher.wav"

const Dialogues: Dialogue[] =
	[ {text: "I don't know you and you don't know me but I need your help"}
	, {text: "Before you block me, please hear me out"}
	, {text: "My colleagues have all been captured or kill. You're our last hope."}
	, {text: "I'll try to give a brief explanation"}
	, {text: "I was originally a member on a website about finding alien life. It was a silly hobby and I didn't actually expect us to discover anything. Until the artifact was found..."}
	, {text: "At the bottom of the sea, a locked box covered with strange symbols was uncovered. With all the texts we've gathered over the years, translating it was simple for the moderators. They quickly came to the conclusion that the box should never be opened and so they kept their findings to themselves. I don't even know what's in it."}
	, {text: "One moderator was not in accord, and sold this information to someone who could make use of it."}
	, {text: "The other moderators told us not to worry because the key to open the box no longer existed on this planet"}
	, {text: "Only one with this alien DNA can unlock the box. This is where you come in."}
	, {text: "Your recent DNA test revealed you are 50% Scandinavian. In truth, this is a lie covering up the fact that you have extraterrestrial DNA"}
	, {text: "Because of this test, they have a sample of alien DNA which they can use to unlock the box"}
	, {text: "One of our agents procured and hid the box before they disappeared, but it is only a matter of time before our enemies find it"}
	, {text: "We must find the box and destroy its contents before it fall into the wrong hands"}
	, {text: "Will you help? (yes/yes)", input:"yes"}
	, {text: "Excellent!"}
	, {text: "All the moderators have gone missing or have been killed, so now it's up to me and you to fix this mess!"}
	, {text: "Before disappearing, our agents hid information for you in your home"}
	, {text: `To be sure it didn't fall into the wrong hands, they had to conceal this information in "creative" ways`}
	, {text: "I have encrypted documents on my computer that contain vital information. The password to the first document in hidden in a folder in a book on your shelf"}
	, {text: "Make sure to keep the book once you've found it, and tell me the code written.", input:"7654"}
	, {text: "I'm in"}
	, {text: "Also included in the folder is a cipher that must be applied to a page in the book. To figure out which page, you must accomplish a series of tasks"}
	, {text: "First, you must locate a series of numbered bottles. Do not open them. Their whereabouts can be found through solving a series of riddles"}
	, {text: "First you must solve a game to find a word, which must be inserted into one of the sentences on the other sheet to find out where the bottles are"}
	, {text: "The list of words can be found through:"
		, urls: [ "https://wordle.danstewart.xyz/game.html?settings=eyJ3b3JkIjoic2t1bGwiLCJtYXhUcmllcyI6IjYiLCJoaW50IjoiIiwic2hvd0Fuc3dlciI6ZmFsc2V9" //skull
						, "https://wordle.danstewart.xyz/game.html?settings=eyJ3b3JkIjoiYWx0ZXIiLCJtYXhUcmllcyI6IjYiLCJoaW50IjoiIiwic2hvd0Fuc3dlciI6ZmFsc2V9" // alter for lantern
						, "https://wordle.danstewart.xyz/game.html?settings=eyJ3b3JkIjoic3BpdHMiLCJtYXhUcmllcyI6IjYiLCJoaW50IjoiIiwic2hvd0Fuc3dlciI6ZmFsc2V9" // spits for spirits
						, "https://wordle.danstewart.xyz/game.html?settings=eyJ3b3JkIjoiRHJhaW4iLCJtYXhUcmllcyI6IjYiLCJoaW50IjoiIiwic2hvd0Fuc3dlciI6ZmFsc2V9" // drain for rain
						, "https://wordle.danstewart.xyz/game.html?settings=eyJ3b3JkIjoic2hha2UiLCJtYXhUcmllcyI6IjYiLCJoaW50IjoiIiwic2hvd0Fuc3dlciI6ZmFsc2V9" // shake for sake
						, "https://wordle.danstewart.xyz/game.html?settings=eyJ3b3JkIjoiUGVkYWwiLCJtYXhUcmllcyI6IjYiLCJoaW50IjoiIiwic2hvd0Fuc3dlciI6ZmFsc2V9" // pedal
						]
		}
	, {text: 'If you want to work on these together, you can share these messages by directing your friends to the url\n "https://pf-physics.github.io/secretevent/?id=num", num being the idx of this message.'}
	, {text: "When you have located all the bottles, write 'ready'", input:"ready"}
	, {text: 'The page number is made up of the three numbers corresponding to bottles which contain acid. In the folder labelled "2" on your shoe rack, there is a tool that will help you discern them'} // TODO hide
	, {text: "Once you have found them, try out permutations of the numbers and apply the cipher until you find something that makes sense"}
	, {text: "Good luck", input: "4728"} // TODO DCDCDC CODE and print the sheet
	// find Mrs. White
	, {text: "I opened the next file with that code! You must find something that is hidden somewhere outside! I don't know the exact coordinates, but I can tell you how far away you are."}
	, {text: "You may need to periodically recalibrate your location by using google maps or another such app as you go"}
	, {text: "Just press next every time you'd like an update. Please allow me to know your location!", component: LocComponent}
	, {text: "There should be a a tunnel nearby that looks like this:", img: tunnel}
	, {text: "Once you've found it, walk to the right until you find a pile of rocks. There should be something buried underneath. Tell me what you find"
		, input:"usb"
		} // TODO DCDCDC bury (and finish usb)
	, {text: "A usb? Strange, I thought the box would be buried. Perhaps it contains the true location of the box."}
	, {text: "Even if we find the box, we won't be able to nullify the contents."}
	, {text: "One of my colleagues was in contact with the enemy and found out how to do this but the information is in his email!"}
	, {text: `The email is "salt_hater@outlook.com" but I do not know the password yet. My colleague hid his password outside as well.`}
	, {text: "First, go to the George-Étienne Cartier Monument and count the number of green people", input: "17"}
	, {text: "Next, find this plaque and tell me the missing information", img: plaque, input: "CAMILLIEN HOUDE"}
	, {text: "Lastly, between Villeneuve and Mont Royal find this wall and tell me the missing information in red", img:grafitti, input:"HEAD"}
	, {text: "Perfect! The password is the text in blue, the text in red (uppercase), the last name of person on the plaque (lowercase), and the number of green people!"}
	// the password is ..HEADhoude17
	, {text: `Try searching through the email, salt_hater@outlook.com, to see what you can find!`}
	, {text: "What was the time the last email was sent (ie - 6:45pm = 645)", input:"249"}
	, {text: "Now, check what's on the usb!", input:"wreoi"}
	, {text: "It seems as though the information is hidden behind a code."}
	, {text: "I have no idea what it means. The only other information I have is this audio file", aud: music}
	, {text: "Good luck deciphering it.", input:"8109"}
	, {text: "Congratulations! You have foiled our enemies' plans! You now must consume the powder in the bottle to save the oceans! (I heard that adding it to liquid makes it more palatable) As a reward, please help yourself to the contents of this suitcase we retrieved from an enemy we assassinated."}
]

export default Dialogues