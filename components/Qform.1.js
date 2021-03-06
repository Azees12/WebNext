// Import Dependencies
import React, { Component } from "react";

//
// Define SearchForm Class
//
export default class QForm extends Component {
  // constructor accepts props and initialises state
  constructor(props) {
    super(props);

    this.state = {};
  }

  //
  // an event handler for form submit
  //
  formSubmitted = event => {
    // Validate input value
    if (event.target.newsQ.value != "") {
      // setNewsSource is a function passed from parent (news page) via props
      // It is used as a way to pass the input value back up to the parent
      // This is called state lifting
      // see: https://reactjs.org/docs/lifting-state-up.html
      this.props.setNewsQ(event.target.newsQ.value);
    }
    // prevent page reload (prevent submit)
    event.preventDefault();
  };

  // Render the form
  render() {
    return (
      <div>
        {/* Search Input */}
        <div id="search">
          <h3>Enter a query</h3>
          {/* Note event handler */}
          <form onSubmit={this.formSubmitted}>
            {/* The input field */}
            <input
              name="newsQ"
              placeholder="Catorgory"
              type="text"
            />
            {/* Button click will trigger submit */}
            <button>Update News</button>
          </form>
        </div>
      </div>
    );
  }
}
