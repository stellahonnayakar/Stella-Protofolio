import React, {Component} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from './BTpic.jpg';
import Social from'../Components/Social'

class Home extends Component{
	render(){
		return(
			<div className="condiv home">
			<img src={profilepic} className="profilepic"></img>
			<ReactTypingEffect className="typingeffect" text={['I am Stella B H', 'I am web developer']} speed={100} eraseDelay={700}/>
			<Social/>
			</div>
			)
	}
}
export default Home;