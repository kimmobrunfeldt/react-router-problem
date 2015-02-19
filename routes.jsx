var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

// Components
var App = React.createClass({
    render: function render() {
        return <h1>App</h1>;
    }
});

var Login = React.createClass({
    render: function render() {
        return <h1>Login</h1>;
    }
});

var NotFound = React.createClass({
    render: function render() {
        return <h1>Not found</h1>;
    }
});

var routes = (
  <Route name="index" path="/" handler={App}>
    <Route name="login" path="login" handler={Login}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = routes;
