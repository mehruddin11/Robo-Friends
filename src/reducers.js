import {CHANGE_SEARCH_FIELD, 
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_ERROR} from './constants.js'
import {robots} from './robots'
const intialState = {searchField : ''}
const initialStateRobots=  {
	ispending: false, robots:robots, error : ''
}

export const SearchRobots = (state = intialState, action = {})=>{
	console.log(action.type)
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state ,{searchField:action.payload})
		
	default:
		return state;
	
	}

}

export const RequestRobots = (state = initialStateRobots , action = {}) =>{
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state ,{ispending:true})
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({} , state, {robots:action.payload, ispending: false})
		case REQUEST_ROBOTS_ERROR:
			return Object.assign({} ,state, {error:action.payload, ispendin:false})
		default:
			return state;

	}
}