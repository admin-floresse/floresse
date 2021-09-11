// IMPORT MODULES
import React, { Component } from "react";

// IMPORT STYLES
import "./styles.css";

export default class TextScramble extends Component {
	constructor() {
		super()

		this.state = {
			currentWord: "",
			words: [
				"alluring", "bold", "contemporary", "artful", "innovative", "inventive", "visionary", "unique", "expert", "professional", "striking", "attractive", "appealing", "detailed", "intelligent", "cutting-edge", "transformative", "dramatic", "exciting", "elevated", "radical", "scalable", "progressive", "artistic", "breathtaking", "clean", "distinctive", "elegant", "powerful", "sophisticated", "stunning"
			]
		}

		this.changeWord = this.changeWord.bind(this)
	}

	componentDidMount() {
		// Set intital random word
		this.setState({
			currentWord: this.state.words[Math.floor(Math.random() * this.state.words.length)]
		})

		// Change word
		setInterval(this.changeWord, 5000)
	}

	changeWord() {
		let oldWord = this.state.currentWord
		let newWord = this.state.words[Math.floor(Math.random() * this.state.words.length)]
		const chars = "~!@#$%^&*()_+`1234567890-=[]\\;',./{}|:\"<>?α¤ß£‼Àà♥+Γ€¡Áá♂-δ$?Ââ♀×ε¢¿Ãã♪÷Θ¥Ää♫π₧Çç%µƒÈè©‰ΣÉé®σ´Êê™τËëΦÌìφÍíΩ∟Ïî■±§Ïï▲╚¶Ññ▼/╔†Òò¼╩‡Óó↨½│╦Ôô↑¾┤╠Õõ↓.╡═‹Öö→╢╬›Šš←≡╖╧‘Úú╕╨’Ûû♥≈╣╤“Üü♦║╥”Ùù♣<╗╙«Ýý♠>╝╘»Ÿÿ•≥╜╒‘Žž◘≤╛╓„○┐╫.◙√└╪åÅ♂ⁿ┴┘`Œœ♀¹┬┌&þÞ♪²├Øø♫³─Ææ►┼ñÑ◄π╞ß°╟Ðð▲▼…¦↨∞↑µ¯▬↓Σ→∩←¨☼ª-⌂º"
		const replaceChar = (origString, replaceChar, index) => {
			let newStringArray = origString.split("")
			newStringArray[index] = replaceChar
			let newString = newStringArray.join("")
			return newString
		}

		// Step 2: Change random chars to newWord letters
		let j = 0;                 
		const transition = () => {        
			setTimeout(() => {  
				if (j <= oldWord.length) {
					oldWord = replaceChar(oldWord, newWord[j], j)
				} else if (j > oldWord.length) {
					oldWord = newWord.slice(0, j)
				} 
				if (j === newWord.length - 1 && newWord.length < oldWord.length) {
					oldWord = oldWord.slice(0, j + 1)
				}
				this.setState({currentWord: oldWord})
				j++                  
				if (j < newWord.length) {          
			  		transition()       
				}                      
		  	}, 100)
		}

		// Step 1: Change oldWord letters to chars
		let i = 0;                 
		const scramble = () => {        
			setTimeout(() => {  
				oldWord = replaceChar(oldWord, chars[Math.floor(Math.random() * chars.length)], i)
				this.setState({currentWord: oldWord})
				i++                  
				if (i < oldWord.length) {          
			  		scramble()       
				} else {
					transition()
				}             
		  	}, 100)
		}

		scramble();
	}

    render() {
        return (
            <span>{this.state.currentWord}</span>
        );
    }
}