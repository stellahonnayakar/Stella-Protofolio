import React, {Component} from 'react';
import Widecard from '../Components/Widecard';

class Education extends Component{
	render(){
		return(
			<div className="condiv">
			<h1 className="subtopic"> My Education</h1>
			<Widecard title="M.Tech Software Engineering" where="VIT University" from="July 2017" to="Present"/>
			<Widecard title="SSLC |HSC" where="Loyola High School" from="2008" to="2010"/>
			</div>
			)
	}
}
export default Education;