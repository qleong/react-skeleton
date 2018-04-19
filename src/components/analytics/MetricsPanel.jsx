var React = require('react');
var createClass = require('create-react-class');
var PanelFooter = require('./PanelFooter.jsx');

var MetricsPanel = createClass({
	render: function() {
		var panelStyle = {
			height: 250,
			marginTop: 15,
			padding: "0 0 0 0"
		};
		if (this.props.bgColor) {
			panelStyle.background = this.props.bgColor;
		}
		return (
			<div style={panelStyle} className="col-sm-12">
				<PanelFooter />
				<PanelFooter />
			</div>
		);
	}
});

module.exports = MetricsPanel;
