// Include React
var React = require("react");

var Search = React.createClass({
 // Here we set a generic state associated with the text being searched for
	getInitialState: function() {
	 	 return { term: "" };
	 	},

// This function will respond to the user input
  handleChange: function(event) {

    this.setState({ term: event.target.value });

  },

// When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  },

  render: function() {
  	return (
  		<div className="panel panel-default">
  			<div className="panel-heading">
  				<h3 className="panel-title text-center">Topic</h3>
  			</div>
  			<div className="panel-body text-center">
  				<form onSubmit={this.handleSubmit}>
  					<div className="form-group">
  						<input
		                value={this.state.term}
		                type="text"
		                className="form-control text-center"
		                id="term"
		                onChange={this.handleChange}
		                required
              			/>
              		</div>
  					
              			<br />
              		<h3 className="panel-title text-center">Start Year</h3>
              			<div className="form-group">
	  						<input
			                value={this.state.term}
			                type="text"
			                className="form-control text-center"
			                id="startYear"
			                onChange={this.handleChange}
			                required
	              			/>
	              		</div>
  					
              			<br />
  					<h3 className="panel-title text-center">End Year</h3>
  						<div className="form-group">
	  						<input
			                value={this.state.term}
			                type="text"
			                className="form-control text-center"
			                id="endYear"
			                onChange={this.handleChange}
			                required
	              			/>
	              		</div>

  						<br />
			            <button
			              className="btn btn-primary"
			              type="submit"
			             >
			                Search
			             </button>
  				</form>
  			</div>
  		</div>

  	);
  }

});

module.exports = Search;