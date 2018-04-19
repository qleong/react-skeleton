var React = require('react');
var createClass = require('create-react-class');
var AggregateCard = require('./AggregateCard.jsx');
var WeatherCard = require('./WeatherCard.jsx');

var AggregateManager = createClass({
	render: function() {
		var divStyle = {
			marginTop: 20,
			background: "#F5F7FA"
		};
		return (
			<div style={divStyle} className="panel-group">
				<div className="row">
					<WeatherCard city="Paris" temp="18"/>
				</div>
				<div className="row">
					<AggregateCard color="#0095D3" title="New Visitors" value="1.5K" />
				</div>
				<div className="row">
					<AggregateCard color="#BC7DD7" title="Bounce Rate" value="50%" />
				</div>
				<div className="row">
					<AggregateCard color="#FF0000" title="Searches" value="28%" />
				</div>
				<div className="row">
					<AggregateCard color="#27CD53" title="Traffic" value="140.5 kb" />
				</div>
			</div>
		);
	}
});

module.exports = AggregateManager;
