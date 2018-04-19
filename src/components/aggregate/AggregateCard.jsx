var React = require('react');
var createClass = require('create-react-class');
var AggregateCardHeader = require('./AggregateCardHeader.jsx');

var AggregateCard = createClass({
	render: function() {
		var cardSytle = {
			background: "#FFFFFF",
			marginTop: 10,
			height: 150
		};
		return (
			<div style={cardSytle} className="panel">
				<AggregateCardHeader color={this.props.color} title={this.props.title} value={this.props.value}/>
			</div>
		);
	}
});

module.exports = AggregateCard;
