

var Page=React.createClass({

	render:function(){
	
	var ContentModes = this.props.data.map(function(content){
	
		return (
			
			<p className="pline" data-age={content.age}>{content.name}</p>
		)
	
	});
	return (
		
		<div className="homepage">{ContentModes}</div>
	)
	
	}
	

});

var ContentMode = React.createClass({

	getInitialState:function(){
		return {data:[]};
	},
	componentDidMount:function(){
		$.ajax({
			url:this.props.url,
			dataType:'json',
			success:function(data){
				this.setState({data:data});
			}.bind(this),
			error:function(xhr,status,err){
				console.log(this.props.url,status,err.toString());
			}.bind(this)
		
		});
	},
	render:function(){
	
		return (
			<div className="ContentMode">

				<h1>内容渲染进来</h1>
				<Page data={this.state.data}/>
			</div>
		)
	}

});
React.render(

	<ContentMode url="page.json"/>,
	document.getElementById("example")

);