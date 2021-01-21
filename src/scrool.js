import React from 'react'

const Scrol = (props) =>{
	return (
		<div style = {{overflow: 'scroll',border: '4px solid black', height:'800px'}} >
			{props.children}
		</div>


		);
};
export default Scrol