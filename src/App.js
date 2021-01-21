import React ,{Component}  from 'react'
import CardList from './cardList'
 
import SearchBox from './searchBox'
import './App.css'
import Scrol from './scrool'
import ErrorBoundary from './ErrorBoundary'
 
class App extends Component {
	constructor(){
		super()
		this.state = {
			robots :[],
			searchfield :''

	}
}
componentDidMount(){
   	fetch('https://jsonplaceholder.typicode.com/users')
  	.then(response => response.json())
  	.then(user =>this.setState({robots:user}))
}
onSearchChange =(event) =>{
		this.setState({searchfield: event.target.value})
}
	
render(){
		const filterRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
			})
		if (this.state.robots.length === 0){
			return <h1> Loading..</h1>
		}

		else
			return( 
		<div className = 'tc'>
		   <h1 className = 'f3'> RoboFriends</h1>
		    <SearchBox Searchchange ={this.onSearchChange}/>
		    <Scrol>
		    	<ErrorBoundary>

		   		<CardList robots = {filterRobots}/>
		   		</ErrorBoundary>
		   	</Scrol>
			
		</div>
		);
			 
		
}

	}


	

export default App