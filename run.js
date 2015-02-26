require('node-jsx').install();
var React = require('react');
var ReactRouter = require('react-router');

var routes = require('./routes.jsx');
ReactRouter.run(routes, '/login', function(Handler, state) {
    // This does not work
    Handler.a();

    var handler = React.createElement(Handler, {
        params: state.params,
        query: state.query
    });
    var initialHtml = React.renderToString(handler);
});
