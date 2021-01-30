import React from 'react';
const Card = ({name , email ,id}) =>{
	return (
		<div className= 'ma2 pa3 bg-light-green grow tc dib shadow-5'>
			<img alt ='robots' src= {`https://robohash.org/${id}`} />
			<h1> {name}</h1>
			<p> {email}</p>

		</div>

		)
}
export default Card