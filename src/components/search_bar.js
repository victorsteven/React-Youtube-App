import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = { term: ''}
  }

  onInputChange = (e) => {
    let searchTerm = e.target.value
    this.setState({
      term: searchTerm
    });
    this.props.onSearchTermChange(searchTerm)
  }
  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </div>
    )
  }

  
}

export default SearchBar;