var React = require('react');
var createClass = require('create-react-class');

var MetricsCard = createClass({
	render: function() {
		var divStyle = {
			marginLeft: 20,
			border: "1px solid #CACBCB",
			height: 150
		};
		var valueStyle = {
			fontSize: 26,
			color: "#6E6E6E",
			paddingTop: 25,
			paddingLeft: 10
		};
		var descriptionStyle = {
			fontSize: 14,
			color: "#CACBCB",
			paddingLeft: 10
		};
		return (
			<div style={divStyle} className="panel col-sm-3">
				<div className="panel-body">
					<div style={valueStyle} className="row">
						<b>{this.props.metricValue}</b>
					</div>
					<div style={descriptionStyle} className="row">
						{this.props.metricDescription}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = MetricsCard;
