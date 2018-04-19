var React = require('react');
var ReactDOM = require('react-dom');
var MetricsManager = require('./components/analytics/MetricsManager.jsx');
var AggregateManager = require('./components/aggregate/AggregateManager.jsx');

ReactDOM.render(<MetricsManager/>, document.getElementById('analytics'));
ReactDOM.render(<AggregateManager />, document.getElementById('aggregate'));
