"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');

var ManageAuthorPage = React.createClass({
    //sets the initial state of author object which binds to the fields in the form
    getInitialState: function(){
        return {
          author: {id: '', firstName: '', lastName: ''}  
        };
    },
    
    //this function is activated when there is a change in state of the field and sets appropriately
    setAuthorState: function(event){
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },
    
    saveAuthor: function(event){
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
        
    },
    render: function(){
        return (
                <AuthorForm 
                    author={this.state.author}
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor}
                    />
        );
    }
});

module.exports = ManageAuthorPage;