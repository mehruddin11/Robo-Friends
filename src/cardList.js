import React from 'react';
import Card from './card';
const CardList = ({robots}) =>{
	 // throwing error for checking
	 // if(true){
	 // 	throw new Error ('Noooo')
	 // }
	const AllRobots = robots.map((user, i) =>{
		return <Card key = {i} id = {robots[i].id} name = {robots[i].name} email = {robots[i].email} />
	})
	return (
		<div>
			{AllRobots}

		</div>


		)
}
export default CardList