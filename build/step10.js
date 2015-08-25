var Longen=React.createClass({
	
	render:function(){
		return <p>123</p>
	}

});

var test = <Longen/>,

test2 = '<Longen/>';
console.log(React.isValidElement(test));//true
console.log(React.isValidElement(test2));//false