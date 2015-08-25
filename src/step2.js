var NavMode = React.createClass({
	
	render:function(){
	
		return {
		
			<div className="NavList">
				Hello world! I am a Nav List
				</div>
		};
	}

});

var SlideMode = React.createClass({
		render:function(){
			
			return {
			
				<div className="slideMode">
					Hello world! I am a slide
					</div>
			}
		
		}

});

var ContentMode = React.createClass({
	
	render:function(){
		render:function(){
		
			return {
				<div className="contentMode">
					Hello World! I am comtent</div>
			}
		}
	
	}

});

/*页面div封装 上面三个模块*/
var page =  React.createClass({

	render:function(){
	return (
			<div className="homepage">
				<h1>page首页</h1>
				<NavMode/>
				<SlideMode/>
				<ContentMode/>
			</div>
	)
	}
	
});

React.render(

	React.createElment(page,null),document.getElementById("example")
);