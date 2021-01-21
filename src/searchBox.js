import React from 'react'
const SearchBox = ({Searchchange ,filterRobots}) =>{
	return (
		<div className = 'pa2'>
		<input 
			className = 'pa3 ba b--green bg-lightest-blue'
			type ='search' 
			placeholder = 'search robots'
			onChange ={Searchchange}
			/>
		</div>

		);
}
export default SearchBox