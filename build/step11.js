
var style= {

	color:'#ff0000',
	fontSize:'14px'

};

var Input = React.createClass({

	getInitialState:function(){
	
		return {value:'Hello!'};
	},
	handleChange:function(event){
		this.setState({value:event.target.value});
	},
	render:function(){
	
		var value = this.state.value;
		return (
			
			<div>
				<input type="text" value={value} onChange={this.handleChange}/>
			<p style={style}>{value}</p>
			</div>
		);
	}

});

React.render(<Input/>,document.getElementById("demo"));