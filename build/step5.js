var names=["longen1",'longen2','longen3'];


var HelloMessage = React.createClass({

	render:function(){
	
		return <div>Hello {this.props.name}</div>;
	}

});

var NotesList = React.createClass({

	render:function(){
		
		return (
		
			<ol>
			{
				this.props.children.map(function(child){
				
					return <li>{child}</li>
				
				})
			}
			</ol>
		)
	
	}

});

React.render(<HelloMessage name="John"/>,document.getElementById("demo"));

React.render(
	<NotesList>
		<span>hello</span>
		<span>world</span>
	</NotesList>,
	document.getElementById("demo")
);

React.render(

	<div className="aa">
	{
		names.map(function(name){
		
			return <p>Hello,{name}</p>
		})
	}
	</div>
	,document.getElementById("example")


);

