var MyTitle= React.createClass({

	propTypes:{
	
		title:React.PropTypes.string.isRequired
	},
	render:function(){
		return this.props.title == 1234 ? <p>是一个字符串</p> : null	
	}

});

var data = "123";
React.render(
	<MyTitle title="1234"/>,document.getElementById("demo")
);