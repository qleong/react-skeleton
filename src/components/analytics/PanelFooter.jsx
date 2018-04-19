var React = require('react');
var createClass = require('create-react-class');
var PanelFooterMetric = require('./PanelFooterMetric.jsx');

var PanelFooter = createClass({
	render: function() {
		var footerStyle = {
			background: "#474D4D",
			height: 70,
			width: "100%",
			position: "absolute",
			bottom: 0
		};
		return (
			<div style={footerStyle}>
				<PanelFooterMetric metric="Shot Views" value="15080" />
				<PanelFooterMetric metric="Likes" value="12000" />
				<PanelFooterMetric metric="Comments" value="5100" />
			</div>
		);
	}
});

module.exports = PanelFooter;
