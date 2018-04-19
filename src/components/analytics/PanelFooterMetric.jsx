var React = require('react');
var createClass = require('create-react-class');

var PanelFooterMetric = createClass({
	render: function() {
		var footerMetricStyle = {
			paddingTop: 10,
			color: "#FAFAFA",
			textAlign: "center"
		};
		return (
			<div style={footerMetricStyle} className="col-sm-4">
				<div style={{fontSize: 20}} className="row">{this.props.value}</div>
				<div style={{color: "#9C9E9E", fontSize: 12}} className="row">{this.props.metric}</div>
			</div>
		);
	}
});

module.exports = PanelFooterMetric;
