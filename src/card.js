import React from 'react'
const Card =({name ,id ,email}) =>{
	return (
		<div className = ' dib ma2 pd3 br3 grow bg-light-green tc bw2 shadow-5'>
			<img alt = "robots" src = {`https://robohash.org/${id}?200 200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		)

}
export default Card