var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;

// Components
var App = React.createClass({
    render: function render() {
        return <RouteHandler params={this.props.params} query={this.props.query} />;
    },
    statics: {
        a: function() {
            console.log('test')
        }
    }
});

var Login = React.createClass({
    render: function render() {
        return <h1>Login</h1>;
    },
    statics: {
        a: function(){
            console.log('test');
        }
    }
});

var NotFound = React.createClass({
    render: function render() {
        return <h1>Not found</h1>;
    },
    statics: {
        a: function(){
            console.log('test');
        }
    }
});

// This works
NotFound.a();

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute name="index" handler={Login} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

module.exports = routes;
