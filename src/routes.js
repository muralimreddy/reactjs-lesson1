"use strict";

var React = require('react');

var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;

var Route = Router.Route;

//Redirect old urls to new urls
var Redirect = Router.Redirect;

var routes = (
    <Route name = "app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}/>
        <Route name="authors" handler={require('./components/authors/authorPage')}/>
        <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')}/>
        <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')}/>                    
        <Route name="about" handler={require('./components/about/aboutPage')}/>
       
        <Redirect from="about-us" to="about"/>
    </Route>
);
                                       
module.exports = routes;                                       