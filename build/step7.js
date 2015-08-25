var MyComponent = React.createClass({

	handleClick:function(){
		React.findDOMNode(this.refs.myTextInput).focus();
	
	},
	render:function(){
	
		return (
			
			<div>
				<input type="text" ref="myTextInput"/>
				<input
				   type="button"
				   value="Focus the text input"
				   onClick={this.handleClick}
				/>
			</div>
		);
	
	}

});

React.render(
	<MyComponent/>,
	document.getElementById('demo')
	);