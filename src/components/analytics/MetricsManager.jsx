var React = require('react');
var createClass = require('create-react-class');
var MetricsCard = require('./MetricsCard.jsx');
var MetricsPanel = require('./MetricsPanel.jsx');

var MetricsManager = createClass({
	render: function() {
		var divStyle = {
			marginTop: 20,
			background: "#F5F7FA"
		};
		return (
			<div style={divStyle} className="panel">
				<div className="panel-body">
					<div className="row">
						<MetricsCard metricValue="20" metricDescription="New followers added this month"/>
						<MetricsCard metricValue="$ 1250" metricDescription="Average monthly income"/>
						<MetricsCard metricValue="$ 13865" metricDescription="Yearly income goal"/>
					</div>
					<div className="row">
						<MetricsPanel bgColor="#0095D3" />
					</div>
					<div className="row">
						<MetricsPanel bgColor="#DE33A3" />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = MetricsManager;
