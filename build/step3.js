var data = [{"name":'longen1',"age":'28'},{"name":'longen2',"age":30}];
var NavMode = React.createClass({
	
	render:function(){
	
		return (
		
			<div className="NavList">
				Hello world! I am a Nav List
				</div>
		)
	}

});

var SlideMode = React.createClass({
		render:function(){
			
			return (
			
				<div className="slideMode">
					Hello world! I am a slide
					</div>
			)
		
		}

});

var ContentMode = React.createClass({
	
	render:function(){
		
			return (
				<div className="contentMode">
			 <h1>内容渲染进来</h1>
				<Page data={this.props.data}/>
			</div>
			)
	
	}

});

/*页面div封装 上面三个模块*/
var Page =  React.createClass({

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

React.render(
 
	<ContentMode data={data}/>,document.getElementById("example")
);