import Select from 'react-select';
import React, { Component } from "react";




const options = [
  { value: '', label: 'The Irish Times' },
  { value: 'bbc-news', label: 'BBC' },
  { value: 'cnn', label: 'CNN' },
  {value: 'fox-news,' ,label:"Fox News" }
];

export default class SelectForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }
 

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

formSubmitted = event => {
  // Validate input value

    // setNewsSource is a function passed from parent (news page) via props
    // It is used as a way to pass the input value back up to the parent
    // This is called state lifting
    // see: https://reactjs.org/docs/lifting-state-up.html
    this.props.setNewsSource(event.target.newsSource.value);
  
}

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.formSubmitted}
        options={options}
      />
    );
  }
}

