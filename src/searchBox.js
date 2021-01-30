import React from 'react';

const SearchBox = ({filterRobots, searchChange}) =>{
	return (
		<div className = 'pa2'>
			<input 
			className = 'pa3 br--green bg-lightest-blue'
			type = 'search' 
			placeholder = 'search robots' 
			onChange = {searchChange}
			/>

		</div>

		)
}
export default SearchBox