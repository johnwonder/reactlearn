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
			<div class="contents">{this.props.contents}</div>	
					{this.props.children}
			</div>
			)
	
	}

});

/*页面div封装 上面三个模块*/
var page =  React.createClass({

	render:function(){
	return (
			<div className="homepage">
				<ContentMode contents="longen">this is one comment</ContentMode>
				<ContentMode contents="longen2">this is two comment</ContentMode>
				//<h1>page首页</h1>
				//<NavMode/>
				//<SlideMode/>
				//<ContentMode/>
			</div>
	)
	}
	
});

React.render(
 
	React.createElement(page,null),document.getElementById("example")
);