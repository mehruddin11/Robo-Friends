import React, {Component} from 'react'
// import {robots} from './robots';
import CardList from './cardlist';
import SearchBox from './searchbox';
import Scroll from './scroll';
import './App.css'
import ErrorBoundary from './errorboundary';
import {connect} from 'react-redux';
import {setSearchField} from './action.js';
import {RequestRobots} from './action'


const mapStateToprops = (state) =>{
	return {
		searchField:state.SearchRobots.searchField,
		robots:state.RequestRobots.robots,
		ispending:state.RequestRobots.ispending,
		error:state.RequestRobots.error
	}
}
const mapDispatchToprops = (dispatch) =>{
	return {
		onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
		onRequestRobots:() =>dispatch(RequestRobots())
	}

}

class App extends Component{
componentDidMount(){
	 
	this.props.onRequestRobots()
}

	render(){
		const {robots , ispending} = this.props
		
		const filterRobots =robots.filter((robot)=>{
			return robot.name.toLowerCase().includes(this.props.searchField)
		})
		
		return ispending ?
				<h1 className = 'tc'> Loading.. </h1> :
				
		 
			(
		<div className = 'tc'>
			<h1 className = 'f1'> Robo Freinds</h1>
			<SearchBox searchChange = {this.props.onSearchChange} />
			<Scroll>
				<ErrorBoundary>

					<CardList robots = {filterRobots}/>
				</ErrorBoundary>

			</Scroll>

		</div>


			)

		}
	
 
}
export default connect(mapStateToprops, mapDispatchToprops)(App);