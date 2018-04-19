var React = require('react');
var createClass = require('create-react-class');

var AggregateCardHeader = createClass({
	render: function() {
		var headerStyle = {
			color: "#FFFFFF"
		};
		if (this.props.color) {
			headerStyle.background = this.props.color
		}
		return (
			<div style={headerStyle} className="panel col-sm-12">
				<div className="panel-body">
					<div style={{fontSize: 15}} className="row">{this.props.title}</div>
					<div style={{fontSize: 20}} className="row"><b>{this.props.value}</b></div>
				</div>
			</div>
		);
	}
});

module.exports = AggregateCardHeader;
