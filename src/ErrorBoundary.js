import React ,{Component} from 'react';

class ErrorBoundary extends Component{
	constructor(props){
		super(props)
		this.state= {
			haseError:false
		}
	}

componentDidCatch(error, info){
	this.setState({haseError:true})
}
render(){
	if(this.state.haseError){
		return<h1> Opps That Not Good</h1>
	}
	return this.props.children;
	}
}
export default ErrorBoundary;