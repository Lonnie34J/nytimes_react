// Include React
var React = require("react");

// Here we include all of the sub-components
var Search = require("./children/Search");
var Results = require("./children/Saved");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

var Main = React.createClass({

	getInitialState: function() {
		return {searchTerm: "", results: "", article: [] };
	},

	// The moment the page renders get the History
  componentDidMount: function() {
	    // Get the latest history.
	    helpers.getArticle().then(function(response) {
	      console.log(response);
	      if (response !== this.state.article) {
		        console.log("Article", response.data);
		        this.setState({ article: response.data });
	     	}
	    }.bind(this));
  	},

  	 // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {

    // Run the query for the address
    helpers.runQuery(this.state.searchTerm).then(function(data) {
      if (data !== this.state.results) {
        console.log("Title", data);
        this.setState({ results: data });

        // After we've received the result... then post the search term to our history.
        helpers.postArticle(this.state.searchTerm).then(function() {
          console.log("Updated!");

          // After we've done the post... then get the updated history
          helpers.getArticle().then(function(response) {
            console.log("Current Article", response.data);

            console.log("Article", response.data);

            this.setState({ article: response.data });

          }.bind(this));
        }.bind(this));
      }
    }.bind(this));
  },

    // This function allows childrens to update the parent.
 setTerm: function(term) {
    	this.setState({ searchTerm: term });
  	},

  	//render the main page
  	render: function() {
  		return (
  			<div className="container">
  				<div className="row">
  					<div className="jumbotron">
	  					<h2 className="text-center">New York Times Article Scrubber</h2>
	  					<p className="text-center">
	  						<em>Type in a keyword to search your articles.</em>
	  					</p>
  					</div>

  					<div className="panel panel-default">
  						<div className="panel -heading">
  							<h2 className="text-center">Search</h2>
  						</div>

  						<div className="col-md-12">
  							<Search setTerm={this.setTerm} />
  						</div>

  						{/*<div className="col-md-6">
  							<Results setTerm={this.state.results} />
  						</div>*/}	
  					</div>
  				</div>
  			</div>

  		);
  	}

});

module.exports = Main;