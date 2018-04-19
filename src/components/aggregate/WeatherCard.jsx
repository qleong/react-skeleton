var React = require('react');
var createClass = require('create-react-class');

var WeatherCard = createClass({	
	render: function() {
		var style = {
			background: "#FF7F00",
			border: "1px solid #CACBCB",
			height: 200,
			color: "#FFFFFF",
			textAlign: "center"
		};
		return (
			<div style={style} className="panel col-sm-12">
				<div className="panel-body">
					<div style={{fontSize: 40}} className="row">{this.props.temp}°</div>
					<div className="row">{this.props.city}</div>
				</div>
			</div>
		);
	}
});

module.exports = WeatherCard;
